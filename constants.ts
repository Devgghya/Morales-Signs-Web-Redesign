import { Type, Truck, Printer, Milestone } from 'lucide-react';
import { Service, GalleryItem, ClientLogo } from './types';

export const COMPANY_NAME = "Morales Signs & Graphics";
export const FOUNDED_YEAR = 2005;
export const PHONE_NUMBER = "(310) 555-0199";
export const EMAIL_ADDRESS = "quotes@moralessigns.com";
export const ADDRESS = "11170 Alamo Ct, Lynwood, CA 90262";

export const SERVICES: Service[] = [
  {
    id: 'channel-letters',
    title: 'Channel Letters',
    description: '3D illuminated lettering that creates a professional, high-visibility storefront presence day and night.',
    icon: Type
  },
  {
    id: 'vehicle-graphics',
    title: 'Vehicle Graphics',
    description: 'Turn your fleet into moving billboards with full wraps, decals, and magnetic signs.',
    icon: Truck
  },
  {
    id: 'large-format',
    title: 'Large Format Printing',
    description: 'High-resolution banners, wall murals, and window graphics printed on premium durable materials.',
    icon: Printer
  },
  {
    id: 'monument-signs',
    title: 'Monument Signs',
    description: 'Architectural freestanding signs that create a landmark entrance for business parks and complexes.',
    icon: Milestone
  }
];

// Using placeholder images with different dimensions to demonstrate masonry
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    src: 'https://picsum.photos/800/600?random=1',
    alt: 'Illuminated storefront sign at night',
    category: 'Channel Letters',
    heightClass: 'h-64'
  },
  {
    id: '2',
    src: 'https://picsum.photos/600/800?random=2',
    alt: 'Full branding wrap on commercial van',
    category: 'Vehicle Wraps',
    heightClass: 'h-96'
  },
  {
    id: '3',
    src: 'https://picsum.photos/800/800?random=3',
    alt: 'Large format banner for grand opening',
    category: 'Printing',
    heightClass: 'h-80'
  },
  {
    id: '4',
    src: 'https://picsum.photos/600/400?random=4',
    alt: 'Dimensional lobby logo',
    category: 'Indoor',
    heightClass: 'h-48'
  },
  {
    id: '5',
    src: 'https://picsum.photos/600/700?random=5',
    alt: 'Construction site safety signage',
    category: 'Industrial',
    heightClass: 'h-80'
  },
  {
    id: '6',
    src: 'https://picsum.photos/800/500?random=6',
    alt: 'Custom neon fabrication',
    category: 'Fabrication',
    heightClass: 'h-56'
  }
];

export const CLIENTS: ClientLogo[] = [
  { id: 1, name: "BuildCorp", initial: "B" },
  { id: 2, name: "WestSide Logistics", initial: "W" },
  { id: 3, name: "Apex Retail", initial: "A" },
  { id: 4, name: "City of Lynwood", initial: "C" },
  { id: 5, name: "Metro Eats", initial: "M" },
];