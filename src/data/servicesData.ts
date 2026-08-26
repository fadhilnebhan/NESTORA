import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential-interiors',
    title: 'Residential Interiors',
    subtitle: 'Beautiful, functional homes designed around your lifestyle.',
    description: 'Complete interior design services tailored for modern homes in Kerala. We balance aesthetic sophistication with daily practicality, maximizing natural ventilation, ambient light, and customized ergonomics.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Comprehensive Space Planning & Layouts',
      'Mood Boards, Color Schemes & Material Palette',
      'Custom Millwork & Storage Systems',
      'Curated Lighting & Electrical Schematics',
      'Soft Furnishings, Art & Styling Direction'
    ],
    idealFor: 'Independent Houses, New Builds, Renovation Projects',
    timeline: '8 – 14 Weeks'
  },
  {
    id: 'villa-interiors',
    title: 'Villa Interiors',
    subtitle: 'Complete luxury interiors for modern villas.',
    description: 'Grand architectural interior design for expansive villas. From double-height atriums and sculptural staircase focal points to indoor courtyards and private spa bathrooms.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Architectural Ceiling & Atrium Concepting',
      'Bespoke Italian Marble & Hardwood Inlays',
      'Smart Home & Centralized Lighting Integration',
      'Custom Wine Cellar, Lounge & Theatre Design',
      'Landscape-to-Interior Flow Optimization'
    ],
    idealFor: 'Luxury Gated Villas, NRI Private Residences',
    timeline: '12 – 20 Weeks'
  },
  {
    id: 'kitchen-design',
    title: 'Kitchen Design',
    subtitle: 'Functional kitchens with refined materials and smart storage.',
    description: 'High-performance modular and bespoke kitchens engineered for Kerala cooking habits with wet & dry zoning, Blum/Hafele hardware, anti-fingerprint acrylic/matte finishes, and quartz worktops.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Dual-Kitchen Zoning (Show Kitchen & Spice Kitchen)',
      'Ergonomic Work Triangle & Corner Storage Systems',
      'Integrated Appliances & Concealed Venting',
      'Quartz, Granite or Sintered Stone Surfaces',
      'Under-cabinet & Pantry Sensor Lighting'
    ],
    idealFor: 'Modular Kitchen Overhauls & New Kitchen Builds',
    timeline: '4 – 6 Weeks'
  },
  {
    id: 'bedroom-design',
    title: 'Bedroom Design',
    subtitle: 'Calm, comfortable and personalized private spaces.',
    description: 'Serene bedroom sanctuaries crafted for restorative rest. Featuring custom upholstered headboards, walk-in master wardrobes with integrated LED illumination, and acoustic serenity.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Custom Floating Bed Frames & Headboards',
      'Walk-In Closets with Glass & Wood Finishes',
      'Layered Circadian Lighting Design',
      'Acoustic Wall Paneling & Velvet/Linen Drapes',
      'Integrated Dressing Vanity & Concealed Safes'
    ],
    idealFor: 'Master Suites, Guest Rooms, Kids Suites',
    timeline: '3 – 5 Weeks'
  },
  {
    id: 'living-spaces',
    title: 'Living Spaces',
    subtitle: 'Elegant living rooms designed for everyday life and entertaining.',
    description: 'Captivating living and dining environments that make an immediate visual statement while fostering warm family connection and effortless hospitality.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Statement TV/Media Wall with Fluted Stone/Wood',
      'Custom Sectional Sofas & Sculptural Coffee Tables',
      'Dining Tables in Solid Wood & Natural Stone',
      'Curated Statement Chandeliers & Ambient Sconces',
      'Indoor Courtyard & Greenery Integration'
    ],
    idealFor: 'Formal Living Rooms, Family Lounges, Open Dining',
    timeline: '4 – 7 Weeks'
  },
  {
    id: 'commercial-interiors',
    title: 'Commercial Interiors',
    subtitle: 'Professional spaces designed to represent your brand.',
    description: 'Contemporary commercial, retail, boutique studio, and corporate office designs that elevate company culture, foster collaborative productivity, and leave an indelible client impression.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Brand Identity Interior Translation',
      'Ergonomic Workstations & Executive Suites',
      'Acoustic Boardrooms & Presentation Rooms',
      'Reception Lounges & Brand Feature Walls',
      'Code Compliant Safety, HVAC & Data Management'
    ],
    idealFor: 'Corporate Offices, Tech Hubs, Clinics, Boutiques',
    timeline: '6 – 12 Weeks'
  },
  {
    id: 'turnkey-interiors',
    title: 'Turnkey Interiors',
    subtitle: 'From concept to completion, we manage the entire project.',
    description: 'Zero-headache end-to-end interior execution. We take complete responsibility for civil modifications, false ceilings, electrical, plumbing, carpentry, painting, factory fabrication, and final white-glove handover.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Dedicated On-Site Project Manager & Quality Engineers',
      'Weekly Milestone Video Updates & App Tracking',
      'Strict Material Quality Verification',
      'Guaranteed Timeline & Transparent Fixed Budgeting',
      'Deep Cleaning & Final White-Glove Handover'
    ],
    idealFor: 'NRIs & Busy Professionals Seeking 100% Peace of Mind',
    timeline: 'Complete Project Lifecycle'
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    subtitle: 'See your space before construction begins.',
    description: 'Photorealistic architectural 3D CGI renderings, 360-degree virtual walkthroughs, and material simulations that allow you to experience your exact finished home before laying a single tile.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Ultra-HD 4K Photorealistic Room Renders',
      'Daylight vs. Evening Illumination Simulations',
      'Accurate Material & Finish Texture Mapping',
      'Interactive 360° Virtual Walkthrough Experience',
      'Precision Architectural Construction Drawings'
    ],
    idealFor: 'Clients Wanting Total Visual Clarity Prior to Execution',
    timeline: '1 – 2 Weeks'
  }
];
