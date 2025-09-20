'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, SlidersHorizontal, Grid3X3, List, TrendingUp, Eye
} from 'lucide-react';

// Import components
import SearchBanner from '@/components/properties/SearchBanner';
import FiltersPanel from '@/components/properties/FilterPanel';
import PropertyCard from '@/components/properties/PropertyCard';

// Import hooks and data
import { usePropertyFilters } from '@/hooks/UsePropertyFilter';
import { properties } from '@/lib/data/mockProperties';

const PropertiesPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [savedProperties, setSavedProperties] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { filters, setFilters, filteredProperties, resetFilters } = usePropertyFilters(properties);

  const propertyTypes = [
    { key: '', label: 'All Types' },
    { key: 'single-family', label: 'Single Family' },
    { key: 'multi-family', label: 'Multi Family' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'condo', label: 'Condos' }
  ];

  const sortOptions = [
    { key: 'newest', label: 'Newest First' },
    { key: 'price-low', label: 'Price: Low to High' },
    { key: 'price-high', label: 'Price: High to Low' },
    { key: 'cap-rate', label: 'Highest Cap Rate' },
    { key: 'cash-flow', label: 'Highest Cash Flow' }
  ];

  const availableFeatures = [
    'Pool', 'Garage', 'Fireplace', 'Updated Kitchen', 'Hardwood Floors',
    'City Views', 'Waterfront', 'Smart Home', 'Security System', 'Gym'
  ];

  const itemsPerPage = 6;

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'cap-rate': return b.investmentMetrics.capRate - a.investmentMetrics.capRate;
      case 'cash-flow': return b.investmentMetrics.cashFlow - a.investmentMetrics.cashFlow;
      case 'newest':
      default: return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime();
    }
  });

  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const paginatedProperties = sortedProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSaved = (propertyId: string) => {
    setSavedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Search Banner */}
      <SearchBanner 
        filters={filters}
        onFiltersChange={setFilters}
        propertyTypes={propertyTypes}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          
          {/* Results Count */}
          <div className="text-gray-600">
            Showing {paginatedProperties.length} of {filteredProperties.length} properties
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            
            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
              {showFilters && <span className="ml-2 text-[#FF6000]">•</span>}
            </button>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.key} value={option.key}>{option.label}</option>
              ))}
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#FF6000] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#FF6000] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <FiltersPanel
            filters={filters}
            onFiltersChange={setFilters}
            onClose={() => setShowFilters(false)}
            onReset={resetFilters}
            availableFeatures={availableFeatures}
          />
        )}

        {/* Properties Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }>
          {paginatedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              viewMode={viewMode}
              isSaved={savedProperties.includes(property.id)}
              onToggleSaved={toggleSaved}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#FF6000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-[#FF6000] text-white border-[#FF6000]'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PropertiesPage;