// components/PropertyCard.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Bed, Bath, Square, Heart, Share2, Eye, Calendar, Star
} from 'lucide-react';
import { Property } from '@/lib/types/property';

interface PropertyCardProps {
  property: Property;
  viewMode: 'grid' | 'list';
  isSaved: boolean;
  onToggleSaved: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  viewMode,
  isSaved,
  onToggleSaved
}) => {
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
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
      viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
    }`}>
      {/* Property Image */}
      <div className={`relative overflow-hidden ${
        viewMode === 'list' 
          ? 'h-48 md:h-auto md:w-80 md:flex-shrink-0' 
          : 'h-64'
      }`}>
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
            onClick={() => onToggleSaved(property.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ${
              isSaved
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
          </button>
          <button className="w-8 h-8 rounded-full bg-white/80 text-gray-600 flex items-center justify-center backdrop-blur-md hover:bg-white transition-all duration-200">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
        </div>

        {/* Views Counter */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 flex items-center space-x-1">
            <Eye className="w-3 h-3 text-white" />
            <span className="text-xs text-white">{property.views}</span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className={`p-4 sm:p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        {/* Price and Title */}
        <div className="mb-4">
          <div className={`flex items-start mb-2 ${
            viewMode === 'list' ? 'flex-col sm:flex-row sm:justify-between' : 'justify-between'
          }`}>
            <h3 className={`font-bold text-gray-900 line-clamp-2 ${
              viewMode === 'list' ? 'text-lg sm:text-xl mb-2 sm:mb-0' : 'text-xl'
            }`}>
              {property.title}
            </h3>
            <div className={`font-bold text-[#FF6000] ${
              viewMode === 'list' ? 'text-xl sm:text-2xl sm:ml-4' : 'text-2xl ml-4'
            }`}>
              {formatPrice(property.price)}
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm">
              {property.address.street}, {property.address.city}, {property.address.state}
            </span>
          </div>
        </div>

        {/* Property Stats - Grid View */}
        {viewMode === 'grid' && (
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
        )}

        {/* Property Stats - List View */}
        {viewMode === 'list' && (
          <div className="mb-4 py-3 bg-gray-50 rounded-lg px-3 sm:px-4">
            {/* Mobile: 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {property.propertyType !== 'commercial' && (
                <>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Bed className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-xs font-medium">{property.bedrooms} Beds</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Bath className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-xs font-medium">{property.bathrooms} Baths</span>
                  </div>
                </>
              )}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Square className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-xs font-medium">{formatNumber(property.squareFootage)} sq ft</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-xs font-medium">Built {property.yearBuilt}</span>
              </div>
            </div>
            
            {/* Desktop: 4 columns */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-4">
              {property.propertyType !== 'commercial' && (
                <>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Bed className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium">{property.bedrooms} Beds</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Bath className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium">{property.bathrooms} Baths</span>
                  </div>
                </>
              )}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Square className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm font-medium">{formatNumber(property.squareFootage)} sq ft</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm font-medium">Built {property.yearBuilt}</span>
              </div>
            </div>
          </div>
        )}

        {/* Investment Metrics */}
        <div className="mb-6">
          <div className={`grid gap-3 ${
            viewMode === 'list' 
              ? 'grid-cols-3 sm:gap-6' 
              : 'grid-cols-3 gap-4'
          }`}>
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Monthly Rent</div>
              <div className="font-bold text-gray-900 text-sm sm:text-base">
                {formatPrice(property.investmentMetrics.rentEstimate)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Cap Rate</div>
              <div className={`font-bold text-sm sm:text-base ${getPerformanceColor(property.investmentMetrics.capRate)}`}>
                {property.investmentMetrics.capRate}%
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Cash Flow</div>
              <div className="font-bold text-green-600 text-sm sm:text-base">
                +{formatPrice(property.investmentMetrics.cashFlow)}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, viewMode === 'list' ? 4 : 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
            {property.features.length > (viewMode === 'list' ? 4 : 3) && (
              <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{property.features.length - (viewMode === 'list' ? 4 : 3)} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 bg-[#FF6000] text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 text-center text-sm sm:text-base"
          >
            View Details
          </Link>
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base">
            Schedule Tour
          </button>
        </div>

        {/* Rating and Listed Date - List View Only */}
        {viewMode === 'list' && (
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-900">{property.rating}</span>
            </div>
            <div className="text-sm text-gray-500">
              Listed {new Date(property.listedDate).toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;