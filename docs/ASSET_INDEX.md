# Portfolio Asset Index

This file maps original generated/reference image folders to stable public paths.
Use the public paths in React data/components so Vite can serve them directly.

## Stable Public Roots

- Hero layers: `/images/hero/...`
- Project evidence: `/images/evidence/{pulse|pickfit|likelion}/...`
- Side work evidence: `/images/side/...`
- Design-only generated assets: `/images/design-assets/...`

## Design Assets

These PNG assets were originally under `이미지_생성결과`.
They are copied to ASCII-only paths under `public/images/design-assets` so agents and code can find them reliably.

### Room Backgrounds And Frames

| Use | Public path | Original source |
| --- | --- | --- |
| LikeLion room background | `/images/design-assets/rooms/likelion_room_bg.png` | `이미지_생성결과/likelion_room_bg_16x9_v1.png` |
| LikeLion photo frame scene | `/images/design-assets/rooms/likelion_photoframe.png` | `이미지_생성결과/likelion_photoframe_16x9_v1.png` |
| PULSE room background | `/images/design-assets/rooms/pulse_room_bg.png` | `이미지_생성결과/pulse_room_bg_16x9_v1.png` |
| PULSE main wall frame | `/images/design-assets/rooms/pulse_mainwall_frame.png` | `이미지_생성결과/pulse_mainwall_frame_16x9_v1.png` |
| PickFit room background | `/images/design-assets/rooms/pickfit_room_bg.png` | `이미지_생성결과/pickfit_room_bg_16x9_v1.png` |
| PickFit phone frame scene | `/images/design-assets/rooms/pickfit_phoneframe.png` | `이미지_생성결과/pickfit_phoneframe_16x9_v1.png` |
| FLOW wall scene | `/images/design-assets/rooms/flow_wall.png` | `이미지_생성결과/flow_wall_16x9_v1.png` |
| AboutPM graph room | `/images/design-assets/rooms/aboutpm_graphroom.png` | `이미지_생성결과/aboutpm_graphroom_16x9_v1.png` |
| Corridor/gallery scene | `/images/design-assets/rooms/corridor_gallery.png` | `이미지_생성결과/corridor_gallery_16x9_v1.png` |

### Object Packs

| Use | Public path | Original source |
| --- | --- | --- |
| Common floating paper pack | `/images/design-assets/object-packs/common_floating_paperpack.png` | `이미지_생성결과/object_packs/common_floating_paperpack_transparent_v1.png` |
| LikeLion object pack | `/images/design-assets/object-packs/likelion_objectpack.png` | `이미지_생성결과/object_packs/likelion_objectpack_transparent_v1.png` |
| PickFit object pack | `/images/design-assets/object-packs/pickfit_objectpack.png` | `이미지_생성결과/object_packs/pickfit_objectpack_transparent_v1.png` |
| PULSE object pack | `/images/design-assets/object-packs/pulse_objectpack.png` | `이미지_생성결과/object_packs/pulse_objectpack_transparent_v1.png` |

> 2026-06-12: chromakey originals and contact sheets were removed from `public/` (production weight). Originals remain in `이미지_생성결과/`.

### Transitions

| Use | Public path | Original source |
| --- | --- | --- |
| PULSE to PickFit transition | `/images/design-assets/transitions/pulse_to_pickfit.png` | `이미지_생성결과/transition_pulse_to_pickfit_16x9_v1.png` |
| PickFit to LikeLion transition | `/images/design-assets/transitions/pickfit_to_likelion.png` | `이미지_생성결과/transition_pickfit_to_likelion_16x9_v1.png` |

## PULSE Evidence Assets (room narrative: ① UI/UX → ② slides → ③ award → ④ Adwise origin)

| Public path | Notes |
| --- | --- |
| `/images/evidence/pulse/dashboard.png` | Main Wall — weekly reels dashboard |
| `/images/evidence/pulse/promo_video.png` | ① AI promo video creation screen (added 2026-06-12, source `참고 자료 이미지/pulse/pulse_promo_video.png`) |
| `/images/evidence/pulse/landing.png` | ① Landing page |
| `/images/evidence/pulse/area_analysis.png` | ① Area analysis map |
| `/images/evidence/pulse/problem_slide.png` | ② Problem definition slide |
| `/images/evidence/pulse/review_to_persona.png` | ② Review→persona→journey map slide |
| `/images/evidence/pulse/target_persona.png` | ② Target persona slide |
| `/images/evidence/pulse/msa_pipeline.png` | ② MSA/AI pipeline slide (source `pulse_slide_msa_ai_pipeline.png`) |
| `/images/evidence/pulse/influencer_matching.png` | ② BM/influencer matching slide (added 2026-06-12) |
| `/images/evidence/pulse/award_ux_paper.png` | ③ UX paper grand prize certificate |
| `/images/evidence/pulse/adwise_landing_mockup.png` | ④ Adwise landing mockup (origin) |
| `/images/evidence/pulse/adwise_top14_proof.jpg` | ④ Hackathon top-14% proof (added 2026-06-12, 3MB photo — candidate for compression) |

## PickFit Evidence Assets

| Public path | Notes |
| --- | --- |
| `/images/evidence/pickfit/brand_banner.png` | Main Wall — brand banner with logo, tagline, two phone mockups (added 2026-06-12) |
| `/images/evidence/pickfit/recommendation_result.png` | Step 4 recommendation result (former Main Wall) |
| `/images/evidence/pickfit/situation_select.png` | Step 1 situation select |
| `/images/evidence/pickfit/style_input.png` | Step 2 style input |
| `/images/evidence/pickfit/ai_loading.png` | Step 3 AI loading |
| `/images/evidence/pickfit/outfit_items.png` | Step 5 outfit items |
| `/images/evidence/pickfit/shopping_ux_shift.png` | Insight slide |
| `/images/evidence/pickfit/design_system.png` | Design system slide |

## LikeLion Evidence Assets

Use these for actual portfolio evidence, not just decoration.

| Public path | Notes |
| --- | --- |
| `/images/evidence/likelion/figma_board.png` | Figma operation board, card news, curriculum material |
| `/images/evidence/likelion/session_photo.jpg` | Week 2 Pain Point session |
| `/images/evidence/likelion/session_what.jpg` | Week 3 What/MVP session |
| `/images/evidence/likelion/session_ia.jpg` | Week 4 IA/User Flow session |
| `/images/evidence/likelion/session_mentoring.png` | 1:1 mentoring scene |
| `/images/evidence/likelion/winter_study.png` | Operator study/session preparation |
| `/images/evidence/likelion/operator_planning_design.png` | Planning/design operator card news |
| `/images/evidence/likelion/recruit_tracks.png` | Track recruitment card |
| `/images/evidence/likelion/recruit_scale.png` | Recruitment size/FAQ card |
| `/images/evidence/likelion/org_intro.png` | Organization scale card |
| `/images/evidence/likelion/org_possibility.png` | Cross-functional collaboration card |

## Notes For Future Agents

- Prefer public paths in app code, for example `src="/images/design-assets/object-packs/likelion_objectpack.png"`.
- Keep original Korean folders as source archives. Do not import directly from them in React components.
- If a new generated asset is added, copy it into `public/images/design-assets/{rooms|object-packs|transitions|contact-sheets}` with a short English filename and update this index.
