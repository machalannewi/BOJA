// types/property.ts
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  propertyType: 'single-family' | 'multi-family' | 'commercial' | 'condo';
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  yearBuilt: number;
  images: string[];
  features: string[];
  investmentMetrics: {
    rentEstimate: number;
    capRate: number;
    cashFlow: number;
  };
  status: 'available' | 'pending' | 'sold';
  listedDate: string;
  rating: number;
  views: number;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  maxBedrooms: number;
  minBathrooms: number;
  maxBathrooms: number;
  minCapRate: number;
  maxCapRate: number;
  features: string[];
}