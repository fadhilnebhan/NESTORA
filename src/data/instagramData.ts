export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  tag: string;
  likes: number;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    caption: 'Morning light streaming into the Thrissur Villa courtyard lounge. Natural teak woodwork & travertine.',
    tag: '#KeralaInteriors #VillaDesign',
    likes: 1240
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    caption: 'Minimalist powder room with backlit fluted quartzite and brushed bronze fittings.',
    tag: '#BathroomGoals #LuxuryKerala',
    likes: 980
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    caption: 'Earthy textures and handcrafted terracotta details for our Calicut sanctuary.',
    tag: '#WarmMinimalism #JapandiKerala',
    likes: 1420
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    caption: 'Double height architectural volumes in Panampilly Nagar, Kochi.',
    tag: '#ArchitecturalDesign #KochiVillas',
    likes: 2100
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    caption: 'Master suite tranquility. Acoustic wall panels and integrated dimmable LED coves.',
    tag: '#MasterBedroom #Sanctuary',
    likes: 1150
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    caption: 'Bespoke Calacatta Gold waterfall kitchen island with custom matte cabinetry.',
    tag: '#ModernKitchen #InteriorDesignKerala',
    likes: 1890
  },
  {
    id: 'ig-7',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    caption: 'Curved micro-cement lines paired with muted neutral textiles.',
    tag: '#LivingRoomInspo #MinimalInterior',
    likes: 1320
  },
  {
    id: 'ig-8',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    caption: 'Detail shot: Solid Nilambur teak dining table with natural brass inlays.',
    tag: '#Craftsmanship #CustomFurniture',
    likes: 1670
  }
];
