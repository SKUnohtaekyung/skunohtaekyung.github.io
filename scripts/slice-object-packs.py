from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "public" / "images" / "design-assets" / "object-packs"
OUTPUT_DIR = ROOT / "public" / "images" / "design-assets" / "objects"

PACKS = {
    "common": "common_floating_paperpack.png",
    "likelion": "likelion_objectpack.png",
    "pickfit": "pickfit_objectpack.png",
    "pulse": "pulse_objectpack.png",
}

ALPHA_THRESHOLD = 32
PADDING = 8
MIN_PIXELS = 90
CONTACT_TILE_SIZE = 180
CONTACT_COLUMNS = 5

MANUAL_BOXES = {
    "pickfit": [
        (44, 28, 250, 348),
        (276, 28, 556, 174),
        (602, 34, 775, 398),
        (810, 100, 942, 354),
        (966, 54, 1072, 260),
        (1076, 66, 1184, 286),
        (1208, 38, 1510, 198),
        (138, 172, 342, 472),
        (346, 170, 548, 430),
        (1164, 178, 1458, 354),
        (958, 318, 1226, 510),
        (1256, 344, 1376, 540),
        (1368, 354, 1488, 584),
        (30, 384, 134, 474),
        (68, 444, 142, 506),
        (30, 522, 180, 584),
        (194, 520, 350, 588),
        (30, 604, 182, 676),
        (194, 608, 350, 676),
        (30, 694, 100, 770),
        (112, 694, 182, 772),
        (194, 694, 270, 774),
        (286, 694, 354, 772),
        (372, 466, 604, 744),
        (622, 466, 800, 754),
        (812, 452, 1002, 546),
        (812, 548, 1002, 648),
        (806, 666, 998, 748),
        (1012, 532, 1162, 748),
        (1198, 580, 1394, 750),
        (50, 784, 162, 964),
        (188, 814, 338, 974),
        (360, 774, 500, 966),
        (524, 812, 658, 976),
        (716, 782, 1084, 970),
        (1124, 786, 1492, 966),
    ]
}


@dataclass
class Component:
    x0: int
    y0: int
    x1: int
    y1: int
    pixels: int

    @property
    def width(self) -> int:
        return self.x1 - self.x0

    @property
    def height(self) -> int:
        return self.y1 - self.y0


class UnionFind:
    def __init__(self) -> None:
        self.parent: list[int] = []
        self.rank: list[int] = []

    def add(self) -> int:
        label = len(self.parent)
        self.parent.append(label)
        self.rank.append(0)
        return label

    def find(self, item: int) -> int:
        while self.parent[item] != item:
            self.parent[item] = self.parent[self.parent[item]]
            item = self.parent[item]
        return item

    def union(self, a: int, b: int) -> None:
        root_a = self.find(a)
        root_b = self.find(b)
        if root_a == root_b:
            return
        if self.rank[root_a] < self.rank[root_b]:
            root_a, root_b = root_b, root_a
        self.parent[root_b] = root_a
        if self.rank[root_a] == self.rank[root_b]:
            self.rank[root_a] += 1


def row_runs(row: np.ndarray) -> list[tuple[int, int]]:
    filled = np.flatnonzero(row)
    if filled.size == 0:
        return []

    breaks = np.where(np.diff(filled) > 1)[0] + 1
    chunks = np.split(filled, breaks)
    return [(int(chunk[0]), int(chunk[-1]) + 1) for chunk in chunks]


def connected_components(mask: np.ndarray) -> list[Component]:
    uf = UnionFind()
    previous_runs: list[tuple[int, int, int]] = []
    all_runs: list[tuple[int, int, int, int]] = []

    for y in range(mask.shape[0]):
        current_runs: list[tuple[int, int, int]] = []
        prev_index = 0

        for start, end in row_runs(mask[y]):
            label = uf.add()

            while (
                prev_index < len(previous_runs)
                and previous_runs[prev_index][1] < start
            ):
                prev_index += 1

            scan_index = prev_index
            while (
                scan_index < len(previous_runs)
                and previous_runs[scan_index][0] <= end
            ):
                prev_start, prev_end, prev_label = previous_runs[scan_index]
                if prev_end >= start and prev_start <= end:
                    uf.union(label, prev_label)
                scan_index += 1

            current_runs.append((start, end, label))
            all_runs.append((y, start, end, label))

        previous_runs = current_runs

    merged: dict[int, list[int]] = {}
    for y, start, end, label in all_runs:
        root = uf.find(label)
        if root not in merged:
            merged[root] = [start, y, end, y + 1, end - start]
            continue

        bounds = merged[root]
        bounds[0] = min(bounds[0], start)
        bounds[1] = min(bounds[1], y)
        bounds[2] = max(bounds[2], end)
        bounds[3] = max(bounds[3], y + 1)
        bounds[4] += end - start

    components = [
        Component(x0, y0, x1, y1, pixels)
        for x0, y0, x1, y1, pixels in merged.values()
        if pixels >= MIN_PIXELS
    ]
    return sorted(components, key=lambda item: (item.y0, item.x0))


def padded_bounds(component: Component, image_width: int, image_height: int) -> tuple[int, int, int, int]:
    return (
        max(component.x0 - PADDING, 0),
        max(component.y0 - PADDING, 0),
        min(component.x1 + PADDING, image_width),
        min(component.y1 + PADDING, image_height),
    )


def trim_bounds(image: Image.Image, padding: int = PADDING) -> tuple[int, int, int, int]:
    alpha = np.array(image.getchannel("A"))
    filled = np.argwhere(alpha > ALPHA_THRESHOLD)
    if filled.size == 0:
        return (0, 0, image.width, image.height)

    y0, x0 = filled.min(axis=0)
    y1, x1 = filled.max(axis=0) + 1
    return (
        max(int(x0) - padding, 0),
        max(int(y0) - padding, 0),
        min(int(x1) + padding, image.width),
        min(int(y1) + padding, image.height),
    )


def make_contact_sheet(items: list[dict], output_path: Path) -> None:
    if not items:
        return

    rows = (len(items) + CONTACT_COLUMNS - 1) // CONTACT_COLUMNS
    label_height = 28
    tile_w = CONTACT_TILE_SIZE
    tile_h = CONTACT_TILE_SIZE + label_height
    sheet = Image.new("RGB", (CONTACT_COLUMNS * tile_w, rows * tile_h), "#f4f4f0")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for index, item in enumerate(items):
        image = Image.open(item["absolute_path"]).convert("RGBA")
        image.thumbnail((CONTACT_TILE_SIZE - 24, CONTACT_TILE_SIZE - 24), Image.Resampling.LANCZOS)

        col = index % CONTACT_COLUMNS
        row = index // CONTACT_COLUMNS
        tile_x = col * tile_w
        tile_y = row * tile_h

        draw.rectangle(
            [tile_x + 8, tile_y + 8, tile_x + tile_w - 8, tile_y + tile_h - 8],
            fill="#ffffff",
            outline="#d9d9d2",
        )

        x = tile_x + (tile_w - image.width) // 2
        y = tile_y + label_height + (CONTACT_TILE_SIZE - image.height) // 2
        sheet.paste(image, (x, y), image)

        label = Path(item["file"]).name
        draw.text((tile_x + 12, tile_y + 10), label, fill="#222222", font=font)

    sheet.save(output_path)


def slice_pack(pack_name: str, source_name: str) -> list[dict]:
    source_path = SOURCE_DIR / source_name
    image = Image.open(source_path).convert("RGBA")

    pack_output = OUTPUT_DIR / pack_name
    pack_output.mkdir(parents=True, exist_ok=True)
    for old_file in pack_output.glob("*.png"):
        old_file.unlink()

    objects: list[dict] = []
    manual_boxes = MANUAL_BOXES.get(pack_name)

    if manual_boxes:
        crop_jobs = []
        for box in manual_boxes:
            rough_crop = image.crop(box)
            trim_left, trim_top, trim_right, trim_bottom = trim_bounds(rough_crop)
            left = box[0] + trim_left
            top = box[1] + trim_top
            right = box[0] + trim_right
            bottom = box[1] + trim_bottom
            crop_jobs.append((left, top, right, bottom, None))
    else:
        alpha = np.array(image.getchannel("A"))
        mask = alpha > ALPHA_THRESHOLD
        components = connected_components(mask)
        crop_jobs = [
            (*padded_bounds(component, image.width, image.height), component.pixels)
            for component in components
        ]

    for index, (left, top, right, bottom, pixels) in enumerate(crop_jobs, start=1):
        crop = image.crop((left, top, right, bottom))
        filename = f"{pack_name}-object-{index:03d}.png"
        output_path = pack_output / filename
        crop.save(output_path)

        objects.append(
            {
                "id": f"{pack_name}-object-{index:03d}",
                "pack": pack_name,
                "file": str(output_path.relative_to(ROOT)).replace("\\", "/"),
                "absolute_path": str(output_path),
                "source": str(source_path.relative_to(ROOT)).replace("\\", "/"),
                "source_bbox": {
                    "x": left,
                    "y": top,
                    "width": right - left,
                    "height": bottom - top,
                },
                "trimmed_pixels": pixels,
                "method": "manual" if manual_boxes else "auto",
                "width": right - left,
                "height": bottom - top,
            }
        )

    return objects


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    all_objects: list[dict] = []
    packs: dict[str, dict] = {}

    for pack_name, source_name in PACKS.items():
        objects = slice_pack(pack_name, source_name)
        all_objects.extend(objects)

        pack_contact_sheet = OUTPUT_DIR / f"{pack_name}-contact-sheet.png"
        make_contact_sheet(objects, pack_contact_sheet)

        packs[pack_name] = {
            "source": f"public/images/design-assets/object-packs/{source_name}",
            "count": len(objects),
            "contact_sheet": str(pack_contact_sheet.relative_to(ROOT)).replace("\\", "/"),
            "objects": [
                {key: value for key, value in item.items() if key != "absolute_path"}
                for item in objects
            ],
        }

        print(f"{pack_name}: {len(objects)} objects")

    manifest = {
        "generated_from": "scripts/slice-object-packs.py",
        "alpha_threshold": ALPHA_THRESHOLD,
        "padding": PADDING,
        "total_count": len(all_objects),
        "packs": packs,
    }

    manifest_path = OUTPUT_DIR / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"manifest: {manifest_path.relative_to(ROOT)}")
    print(f"total: {len(all_objects)} objects")


if __name__ == "__main__":
    main()
