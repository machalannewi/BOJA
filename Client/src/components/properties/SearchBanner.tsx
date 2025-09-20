// components/SearchBanner.tsx
'use client';
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { SearchFilters } from '@/lib/types/property';

interface SearchBannerProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  propertyTypes: Array<{ key: string; label: string }>;
}

const SearchBanner: React.FC<SearchBannerProps> = ({
  filters,
  onFiltersChange,
  propertyTypes
}) => {
  return (
    <section className="relative h-96 md:h-80 bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/properties/house-isolated-field.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Investment Properties
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover premium real estate opportunities with strong ROI potential
          </p>
          
          {/* Quick Search */}
          <div className="bg-white rounded-sm p-4 shadow-xl max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by city or state..."
                  value={filters.location}
                  onChange={(e) => onFiltersChange({...filters, location: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent"
                />
              </div>
              <select
                value={filters.propertyType}
                onChange={(e) => onFiltersChange({...filters, propertyType: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent"
              >
                {propertyTypes.map(type => (
                  <option key={type.key} value={type.key}>{type.label}</option>
                ))}
              </select>
              <button className="bg-[#FF6000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;