export type ProjectCategory = 'all' | 'residential' | 'villa' | 'apartment' | 'commercial';

export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'villa' | 'apartment' | 'commercial';
  categoryLabel: string;
  year: string;
  area: string;
  duration: string;
  coverImage: string;
  galleryImages: string[];
  subtitle: string;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  style: string;
  materials: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  projectType: string;
  avatar?: string;
  rating: number;
}

export interface BeforeAfterRoom {
  id: string;
  title: string;
  location: string;
  type: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  transformationPoints: string[];
}

export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  message: string;
  preferredConsultationDate?: string;
}
