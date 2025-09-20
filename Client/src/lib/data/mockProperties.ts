import { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Penthouse',
    description: 'Stunning penthouse with panoramic city views and premium finishes throughout.',
    price: 750000,
    address: {
      street: '456 Skyline Ave',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701'
    },
    propertyType: 'condo',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFootage: 2800,
    yearBuilt: 2020,
    images: ['/properties/3d-electric-car-building.jpg', '/properties/3d-rendering-house-model.jpg'],
    features: ['City Views', 'Rooftop Terrace', 'Smart Home', 'Concierge', 'Garage'],
    investmentMetrics: {
      rentEstimate: 4200,
      capRate: 6.7,
      cashFlow: 1850
    },
    status: 'available',
    listedDate: '2024-01-15',
    rating: 4.8,
    views: 234
  },
  {
    id: '2',
    title: 'Historic Brick Duplex',
    description: 'Charming duplex in trendy neighborhood with excellent rental potential.',
    price: 425000,
    address: {
      street: '789 Heritage St',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201'
    },
    propertyType: 'multi-family',
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 3200,
    yearBuilt: 1925,
    images: ['/properties/3d-rendering-house-model(1).jpg', '/properties/house-isolated-field.jpg'],
    features: ['Dual Income', 'Original Hardwood', 'Large Lot', 'Updated Kitchen', 'Parking'],
    investmentMetrics: {
      rentEstimate: 3400,
      capRate: 9.6,
      cashFlow: 2100
    },
    status: 'available',
    listedDate: '2024-01-20',
    rating: 4.9,
    views: 187
  },
  // Add more properties here...
];