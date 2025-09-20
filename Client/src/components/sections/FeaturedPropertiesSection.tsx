'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  TrendingUp, 
  Calendar,
  Star,
  ArrowRight,
  Eye,
  Share2
} from 'lucide-react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
  propertyType: 'single-family' | 'multi-family' | 'commercial' | 'condo';
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  images: string[];
  features: string[];
  investmentMetrics: {
    rentEstimate: number;
    capRate: number;
    cashFlow: number;
  };
  status: 'available' | 'pending' | 'sold';
  featured: boolean;
  rating: number;
  listedDate: string;
}

const FeaturedPropertiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [savedProperties, setSavedProperties] = useState<string[]>([]);

  const featuredProperties: Property[] = [
    {
      id: '1',
      title: 'Modern Downtown Penthouse',
      description: 'Stunning penthouse with panoramic city views and premium finishes.',
      price: 750000,
      address: {
        street: '456 Skyline Ave',
        city: 'Austin',
        state: 'TX'
      },
      propertyType: 'condo',
      bedrooms: 3,
      bathrooms: 2.5,
      squareFootage: 2800,
      images: ['/cities/3d-electric-car-building.jpg'],
      features: ['City Views', 'Rooftop Terrace', 'Smart Home', 'Concierge'],
      investmentMetrics: {
        rentEstimate: 4200,
        capRate: 6.7,
        cashFlow: 1850
      },
      status: 'available',
      featured: true,
      rating: 4.8,
      listedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Historic Brick Duplex',
      description: 'Charming duplex in trendy neighborhood with excellent rental potential.',
      price: 425000,
      address: {
        street: '789 Heritage St',
        city: 'Dallas',
        state: 'TX'
      },
      propertyType: 'multi-family',
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 3200,
      images: ['/cities/3d-house-model-with-modern-architecture.jpg'],
      features: ['Dual Income', 'Original Hardwood', 'Large Lot', 'Updated Kitchen'],
      investmentMetrics: {
        rentEstimate: 3400,
        capRate: 9.6,
        cashFlow: 2100
      },
      status: 'available',
      featured: true,
      rating: 4.9,
      listedDate: '2024-01-20'
    },
    {
      id: '3',
      title: 'Luxury Single Family Home',
      description: 'Beautifully renovated family home in prime school district.',
      price: 580000,
      address: {
        street: '321 Oak Valley Dr',
        city: 'Houston',
        state: 'TX'
      },
      propertyType: 'single-family',
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2650,
      images: ['/cities/3d-rendering-house-model.jpg'],
      features: ['Pool', 'Updated Kitchen', 'Granite Counters', 'Fireplace'],
      investmentMetrics: {
        rentEstimate: 3800,
        capRate: 7.9,
        cashFlow: 1650
      },
      status: 'available',
      featured: true,
      rating: 4.7,
      listedDate: '2024-01-18'
    },
    {
      id: '4',
      title: 'Commercial Office Building',
      description: 'Prime commercial real estate with established tenants.',
      price: 1250000,
      address: {
        street: '555 Business Park Blvd',
        city: 'San Antonio',
        state: 'TX'
      },
      propertyType: 'commercial',
      bedrooms: 0,
      bathrooms: 6,
      squareFootage: 8500,
      images: ['/cities/analog-landscape-city-with-buildings.jpg'],
      features: ['Established Tenants', 'Parking Garage', 'Modern HVAC', 'Security System'],
      investmentMetrics: {
        rentEstimate: 9500,
        capRate: 9.1,
        cashFlow: 4200
      },
      status: 'available',
      featured: true,
      rating: 4.6,
      listedDate: '2024-01-22'
    },
    {
      id: '5',
      title: 'Waterfront Condo Complex',
      description: 'Luxury waterfront condos with resort-style amenities.',
      price: 320000,
      address: {
        street: '888 Marina Way',
        city: 'Corpus Christi',
        state: 'TX'
      },
      propertyType: 'condo',
      bedrooms: 2,
      bathrooms: 2,
      squareFootage: 1850,
      images: ['/cities/new-buildings-with-green-areas.jpg'],
      features: ['Waterfront', 'Pool', 'Gym', 'Concierge'],
      investmentMetrics: {
        rentEstimate: 2800,
        capRate: 10.5,
        cashFlow: 1950
      },
      status: 'available',
      featured: true,
      rating: 4.8,
      listedDate: '2024-01-25'
    },
    {
      id: '6',
      title: 'Suburban Investment Property',
      description: 'Perfect starter investment in growing suburban area.',
      price: 280000,
      address: {
        street: '123 Maple Grove Ln',
        city: 'Plano',
        state: 'TX'
      },
      propertyType: 'single-family',
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1950,
      images: ['/cities/chinese-city.jpg'],
      features: ['New Roof', 'Updated Plumbing', 'Large Backyard', 'Garage'],
      investmentMetrics: {
        rentEstimate: 2400,
        capRate: 10.3,
        cashFlow: 1450
      },
      status: 'available',
      featured: true,
      rating: 4.5,
      listedDate: '2024-01-28'
    }
  ];

  const propertyTypes = [
    { key: 'all', label: 'All Properties' },
    { key: 'single-family', label: 'Single Family' },
    { key: 'multi-family', label: 'Multi Family' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'condo', label: 'Condos' }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? featuredProperties 
    : featuredProperties.filter(property => property.propertyType === activeFilter);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const toggleSaved = (propertyId: string) => {
    setSavedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'sold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (capRate: number) => {
    if (capRate >= 9) return 'text-green-600';
    if (capRate >= 7) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <section className="py-20 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFF0E6] text-[#FF6000] px-4 py-2 rounded-lg text-sm font-medium mb-4">
            Featured Properties
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Premium Investment Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handpicked properties with exceptional potential for strong returns and steady cash flow.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {propertyTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setActiveFilter(type.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === type.key
                  ? 'bg-[#FF6000] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/api/placeholder/400/300';
                  }}
                />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleSaved(property.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ${
                      savedProperties.includes(property.id)
                        ? 'bg-red-500 text-white'
                        : 'text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={savedProperties.includes(property.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="w-10 h-10 rounded-full text-gray-600 flex items-center justify-center backdrop-blur-md hover:bg-white transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-lg px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{property.rating}</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                {/* Price and Title */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                      {property.title}
                    </h3>
                    <div className="text-2xl font-bold text-[#FF6000]">
                      {formatPrice(property.price)}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">
                      {property.address.city}, {property.address.state}
                    </span>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="flex items-center justify-between mb-4 py-3 bg-gray-50 rounded-lg px-4">
                  {property.propertyType !== 'commercial' ? (
                    <>
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium">{property.bathrooms}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Commercial</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium">{formatNumber(property.squareFootage)} sq ft</span>
                  </div>
                </div>

                {/* Investment Metrics */}
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Monthly Rent</div>
                      <div className="font-bold text-gray-900">
                        {formatPrice(property.investmentMetrics.rentEstimate)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Cap Rate</div>
                      <div className={`font-bold ${getPerformanceColor(property.investmentMetrics.capRate)}`}>
                        {property.investmentMetrics.capRate}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Cash Flow</div>
                      <div className="font-bold text-green-600">
                        +{formatPrice(property.investmentMetrics.cashFlow)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#FFF0E6] text-[#FF6000] text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{property.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    href={`/properties/${property.id}`}
                    className="flex-1 bg-[#FF6000] text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 text-center"
                  >
                    View Details
                  </Link>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;