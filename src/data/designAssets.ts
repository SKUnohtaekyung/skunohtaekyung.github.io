export const DESIGN_ASSETS = {
  rooms: {
    likelionRoomBg: '/images/design-assets/rooms/likelion_room_bg.png',
    likelionPhotoFrame: '/images/design-assets/rooms/likelion_photoframe.png',
    pulseRoomBg: '/images/design-assets/rooms/pulse_room_bg.png',
    pulseMainwallFrame: '/images/design-assets/rooms/pulse_mainwall_frame.png',
    pickfitRoomBg: '/images/design-assets/rooms/pickfit_room_bg.png',
    pickfitPhoneFrame: '/images/design-assets/rooms/pickfit_phoneframe.png',
    flowWall: '/images/design-assets/rooms/flow_wall.png',
    aboutpmGraphroom: '/images/design-assets/rooms/aboutpm_graphroom.png',
    corridorGallery: '/images/design-assets/rooms/corridor_gallery.png',
  },
  objectPacks: {
    commonFloatingPaperpack: '/images/design-assets/object-packs/common_floating_paperpack.png',
    likelionObjectpack: '/images/design-assets/object-packs/likelion_objectpack.png',
    pickfitObjectpack: '/images/design-assets/object-packs/pickfit_objectpack.png',
    pulseObjectpack: '/images/design-assets/object-packs/pulse_objectpack.png',
  },
  transitions: {
    pulseToPickfit: '/images/design-assets/transitions/pulse_to_pickfit.png',
    pickfitToLikelion: '/images/design-assets/transitions/pickfit_to_likelion.png',
  },
} as const

export type DesignAssetGroup = keyof typeof DESIGN_ASSETS
