import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  heightClass: string; // Tailwind class to simulate aspect ratios for masonry
}

export interface ClientLogo {
  id: number;
  name: string;
  initial: string;
}