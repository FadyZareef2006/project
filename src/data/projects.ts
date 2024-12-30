
import EVICOImage from '../assets/EVICO.png';
interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  title: string;
  category: string;
  images: ProjectImage[];
  description: string;
  details: string[];
  width?:number | string
}

export const projects: Project[] = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial',
    images: [
      {
        url: EVICOImage,
        alt: 'Modern office building exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        alt: 'Office interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        alt: 'Office lobby'
      }
    ],
    description: 'A state-of-the-art office complex featuring sustainable design and modern amenities.',
    details: ['50,000 sq ft', 'LEED Certified', 'Completed in 2023']
  },
  {
    title: 'Luxury Residence',
    category: 'Residential',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
        alt: 'Luxury home exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        alt: 'Modern kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4',
        alt: 'Living room'
      }
    ],
    description: 'Custom-built luxury home with high-end finishes and smart home technology.',
    details: ['6,000 sq ft', 'Smart Home Integration', 'Completed in 2023']
  },
  {
    title: 'Shopping Center Renovation',
    category: 'Commercial',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555636222-cae831e670b3',
        alt: 'Shopping center exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17a',
        alt: 'Mall interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1582437370671-54a4834a3c8c',
        alt: 'Retail space'
      }
    ],
    description: 'Complete renovation and modernization of an existing shopping center.',
    details: ['75,000 sq ft', 'Retail Space', 'Completed in 2022']
  },
  {
    title: 'Industrial Warehouse',
    category: 'Industrial',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
        alt: 'Warehouse exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1553850435-1789843d9ae3',
        alt: 'Warehouse interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1553850435-1789843d9ae4',
        alt: 'Loading dock'
      }
    ],
    description: 'Modern warehouse facility with state-of-the-art logistics capabilities.',
    details: ['100,000 sq ft', 'Climate Controlled', 'Completed in 2023']
  },
  {
    title: 'Historic Building Restoration',
    category: 'Restoration',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
        alt: 'Historic building exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1582407947305-fd86f028f717',
        alt: 'Restored interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1582407947306-fd86f028f718',
        alt: 'Architectural details'
      }
    ],
    description: 'Careful restoration of a historic building while preserving its original character.',
    details: ['Historic Preservation', 'Award Winning', 'Completed in 2022']
  },
  {
    title: 'Medical Center',
    category: 'Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc',
        alt: 'Medical center exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
        alt: 'Reception area'
      },
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0e',
        alt: 'Treatment room'
      }
    ],
    description: 'Modern medical facility designed for optimal patient care and efficiency.',
    details: ['30,000 sq ft', 'State-of-the-art Equipment', 'Completed in 2023']
  }
];