import { BeforeAfterRoom } from '../types';

export const BEFORE_AFTER_ROOMS: BeforeAfterRoom[] = [
  {
    id: 'room-01',
    title: 'Main Living & Dining Lounge',
    location: 'Thrissur Villa',
    type: 'Living Space',
    // Unfinished/bare minimalist shell vs Finished warm luxury living room interior
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    beforeDescription: 'Empty, cavernous shell with harsh bare lighting, cold concrete flooring, and echoing acoustics.',
    afterDescription: 'A warm, multi-layered architectural living sanctuary with fluted teak wall cladding, ambient lighting, and bespoke furniture.',
    transformationPoints: [
      'Engineered acoustic ceiling with concealed warm cove lighting (2700K)',
      'Custom Nilambur teak media wall with floating micro-cement hearth',
      'Large-format Italian travertine flooring with subtle matte finish',
      'Bespoke hand-tufted wool rug and modular low-profile linen sofa'
    ]
  },
  {
    id: 'room-02',
    title: 'Chef’s Island Kitchen & Pantry',
    location: 'Marine Drive Apartment, Kochi',
    type: 'Kitchen Design',
    // Bare/basic unrenovated kitchen shell vs Sleek modern island kitchen
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    beforeDescription: 'Outdated, cluttered builder layout with cramped counters, poor ventilation, and visible appliances.',
    afterDescription: 'Sleek handleless island kitchen with anti-fingerprint matte charcoal cabinetry, waterfall quartz island, and concealed wet kitchen.',
    transformationPoints: [
      'Calacatta Gold quartz waterfall island with integrated induction hob',
      'Motorized Blum servo-drive drawers with soft closing mechanisms',
      'Concealed spice pantry door blending invisibly with wall paneling',
      'Integrated Bosch appliances & high-capacity silent chimney exhaust'
    ]
  },
  {
    id: 'room-03',
    title: 'Master Suite Retreat',
    location: 'Panampilly Nagar, Kochi',
    type: 'Bedroom Design',
    // Generic empty room shell vs Warm boutique luxury master bedroom
    beforeImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
    beforeDescription: 'Generic empty room with stark white walls, mismatched electrical points, and zero wardrobe organization.',
    afterDescription: 'Calm boutique hotel master suite featuring full-height acoustic headboard, smoked glass walk-in wardrobe, and mood dimming.',
    transformationPoints: [
      'Custom floating bed platform with integrated brass nightstands and wireless charging',
      'Smoked bronze glass walk-in closet with interior proximity LED illumination',
      'Dual-layer motor-controlled blackout linen curtains',
      'Textured lime plaster accent wall with warm architectural wall sconces'
    ]
  }
];
