import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-01',
    title: 'Modern Villa — Thrissur',
    location: 'Thrissur, Kerala',
    category: 'residential',
    categoryLabel: 'Residential',
    year: '2024',
    area: '4,850 sq.ft',
    duration: '4.5 Months',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85'
    ],
    subtitle: 'An understated contemporary villa designed around natural light, warm materials and clean architectural lines.',
    description: 'A multi-generational luxury home in Thrissur that harmonizes modern architectural purity with Kerala’s traditional climatic sensitivity. Features soaring ceilings, shaded verandas, customized brass inlay teak joinery, and an integrated indoor water courtyard.',
    challenge: 'Balancing a minimalist modern aesthetic with the need for generous family gathering spaces and natural ventilation during Kerala’s monsoon and summer seasons.',
    approach: 'We oriented the living and dining spaces around a central double-height atrium with motorized louvered skylights. Bespoke cane, natural linen, micro-cement finishes, and local Nilambur teak give tactile warmth without visual clutter.',
    result: 'A calm, expansive sanctuary that stays 4°C cooler naturally, bathed in diffused morning light with seamless transitions between interior lounges and garden terraces.',
    style: 'Warm Tropical Modernism',
    materials: ['Nilambur Teak', 'Italian Travertine', 'Fluted Oak', 'Lime Plaster', 'Acoustic Wool'],
    testimonial: {
      quote: 'Nestora brought a quiet elegance to our family home. The play of light and the quality of woodwork surpassed all our expectations.',
      author: 'Dr. Madhavan Nair & Lakshmi',
      role: 'Homeowners'
    }
  },
  {
    id: 'project-02',
    title: 'Contemporary Apartment — Kochi',
    location: 'Marine Drive, Kochi',
    category: 'apartment',
    categoryLabel: 'Apartment',
    year: '2024',
    area: '2,900 sq.ft',
    duration: '3 Months',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85'
    ],
    subtitle: 'A high-rise waterfront apartment with bespoke curved cabinetry and sweeping harbor views.',
    description: 'Situated overlooking the Kochi backwaters, this 4-bedroom apartment was completely reconfigured into an open-plan entertaining haven with acoustic zoning, smart automation, and a concealed chef’s pantry.',
    challenge: 'A rigid builder layout with low structural beams and limited natural light deep inside the foyer.',
    approach: 'We introduced curved acoustic fluting along the central corridor, concealed warm cove illumination at 2700K, and installed full-height slimline pocket glass partitions to maximize water views.',
    result: 'An airy, cosmopolitan residence that feels double its original size, featuring effortless storage and hotel-suite comfort.',
    style: 'Refined Urban Minimalism',
    materials: ['Statuario Quartz', 'Smoked European Oak', 'Champagne Metal Trim', 'Linen Sheers'],
    testimonial: {
      quote: 'Living here feels like staying in an ultra-luxury boutique resort. Every guest is mesmerized by the joinery and lighting detail.',
      author: 'Rohan & Gayatri Kurien',
      role: 'Apartment Owners'
    }
  },
  {
    id: 'project-03',
    title: 'Warm Minimal Home — Calicut',
    location: 'Calicut (Kozhikode), Kerala',
    category: 'residential',
    categoryLabel: 'Residential',
    year: '2023',
    area: '3,400 sq.ft',
    duration: '3.5 Months',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85'
    ],
    subtitle: 'Earthy textures, handcrafted clay elements and serene proportions in the heart of Malabar.',
    description: 'A peaceful residential sanctuary featuring bespoke low-profile teak furniture, natural terracotta tones, and tactile micro-toppings tailored for tranquil family living.',
    challenge: 'Transforming a dark, compartmentalized floor plan into an organic open sanctuary without compromising structural columns.',
    approach: 'We wrapped structural pillars in rounded micro-cement fluting and unified the flooring with large-format honed limestone tile.',
    result: 'A calm, grounded home where morning chai feels meditative and every room connects gently with tropical greens.',
    style: 'Japandi & Malabar Fusion',
    materials: ['Honed Kota Stone', 'Natural Terracotta', 'Solid Teak', 'Organic Boucle'],
    testimonial: {
      quote: 'They captured the calm, unhurried rhythm of Calicut living in a modern design language that feels so natural.',
      author: 'Arun & Fathima',
      role: 'Clients'
    }
  },
  {
    id: 'project-04',
    title: 'Luxury Residence — Ernakulam',
    location: 'Panampilly Nagar, Kochi',
    category: 'villa',
    categoryLabel: 'Villa',
    year: '2024',
    area: '5,600 sq.ft',
    duration: '5 Months',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=85'
    ],
    subtitle: 'Grand double-height volumes, sculptural marble staircases and bespoke bronze finishes.',
    description: 'An architectural private villa commissioned by a prominent NRI family. Includes custom walk-in closets, temperature-controlled wine room, home theatre with Dolby Atmos acoustic paneling, and an indoor courtyard pool lounge.',
    challenge: 'Integrating heavy smart-home automation and HVAC concealed ducts while maintaining clean monolithic ceiling planes.',
    approach: 'Engineered zero-trim linear slot diffusers, magnetic track lighting, and concealed sub-frames for all frameless internal doors.',
    result: 'A showcase of international luxury craftsmanship built with the finest local and imported materials.',
    style: 'Modern Architectural Luxury',
    materials: ['Armani Grey Marble', 'Brushed Bronze', 'Smoked Walnut', 'Custom Suede Panels'],
    testimonial: {
      quote: 'Working across time zones from Dubai was completely stress-free. Nestora’s weekly progress video updates and precision execution were flawless.',
      author: 'George Varghese',
      role: 'Client'
    }
  },
  {
    id: 'project-05',
    title: 'Modern Office — Kochi',
    location: 'Infopark / Kakkanad, Kochi',
    category: 'commercial',
    categoryLabel: 'Commercial',
    year: '2023',
    area: '6,200 sq.ft',
    duration: '2.5 Months',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85'
    ],
    subtitle: 'A biophilic tech headquarters fostering collaborative energy and acoustic privacy.',
    description: 'Corporate studio for a fast-scaling technology enterprise in Kakkanad. Features ergonomic hot desks, acoustic phone booths, an open-concept townhall lounge, and living plant walls.',
    challenge: 'Creating a high-productivity workplace with diverse zoning for 80+ team members within a tight 75-day turnaround.',
    approach: 'Modular demountable acoustic glass partitions, ceiling baffle grids for sound dampening, and warm residential-style breakout lounges.',
    result: 'An office that elevated team morale, client impressions, and reduced environmental HVAC costs by 22%.',
    style: 'Biophilic Contemporary Commercial',
    materials: ['Acoustic PET Felt', 'Powder-Coated Steel', 'Engineered Ash Wood', 'Indoor Vertical Greens'],
    testimonial: {
      quote: 'Our team loves coming to work every single day. Clients who visit our Kochi office are blown away by the aesthetic.',
      author: 'Vipin Chandran',
      role: 'CEO & Founder'
    }
  },
  {
    id: 'project-06',
    title: 'Minimalist Home — Thrissur',
    location: 'Puzhakkal, Thrissur',
    category: 'residential',
    categoryLabel: 'Residential',
    year: '2024',
    area: '3,100 sq.ft',
    duration: '3 Months',
    coverImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1600&q=85'
    ],
    subtitle: 'Monolithic lines, quiet earth palettes and seamless kitchen-dining integration.',
    description: 'A serene sanctuary featuring a bespoke minimalist island kitchen, hidden pantry doors, floating vanity consoles, and warm oak slat partitions.',
    challenge: 'Maximizing perceived volume in a compact rectangular footprint without visual clutter.',
    approach: 'Continuous micro-topping flooring throughout, handle-less push-to-open flush millwork, and floor-to-ceiling pivoting glass doors.',
    result: 'An uncluttered, serene living experience where everyday routines feel effortless and graceful.',
    style: 'Warm Architectural Minimalism',
    materials: ['Micro-Cement', 'White Oak', 'Brushed Nickel', 'Linen Sheers'],
    testimonial: {
      quote: 'Clean lines, zero clutter, and beautiful materials. Nestora translated our wishlist into reality.',
      author: 'Deepak & Sneha',
      role: 'Homeowners'
    }
  }
];
