import { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern luxurious Duplex',
    description: 'New luxurious 4 bedroom duplex.',
    price: 200000000,
    address: {
      street: 'Freedom Way',
      city: 'Lekki Phase one',
      state: 'Lagos',
      zipCode: '78701'
    },
    propertyType: 'condo',
    bedrooms: 4,
    bathrooms: 2.5,
    squareFootage: 2800,
    yearBuilt: 2025,
    images: ['/properties/property1.jpg', '/properties/property1.jpg'],
    features: ['Gated house', '1 room BQ', 'Global C of O'],
    status: 'available',
    listedDate: '2025-10-15',
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
      city: 'Ikeja',
      state: 'Lagos',
      zipCode: '75201'
    },
    propertyType: 'multi-family',
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 3200,
    yearBuilt: 1925,
    images: ['/properties/3d-rendering-house-model(1).jpg', '/properties/house-isolated-field.jpg'],
    features: ['Dual Income', 'Original Hardwood', 'Large Lot', 'Updated Kitchen', 'Parking'],
    status: 'available',
    listedDate: '2024-01-20',
    rating: 4.9,
    views: 187
  },
  // Add more properties here...
];