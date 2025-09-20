'use client';
import React from 'react';
import { X } from 'lucide-react';
import { SearchFilters } from '@/lib/types/property';

interface FiltersPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClose: () => void;
  onReset: () => void;
  availableFeatures: string[];
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filters,
  onFiltersChange,
  onClose,
  onReset,
  availableFeatures
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
        <div className="flex space-x-2">
          <button
            onClick={onReset}
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            Reset All
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => onFiltersChange({...filters, minPrice: Number(e.target.value) || 0})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice === 10000000 ? '' : filters.maxPrice}
              onChange={(e) => onFiltersChange({...filters, maxPrice: Number(e.target.value) || 10000000})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <div className="flex space-x-2">
            <select
              value={filters.minBedrooms}
              onChange={(e) => onFiltersChange({...filters, minBedrooms: Number(e.target.value)})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent text-sm"
            >
              <option value={0}>Any</option>
              {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}+</option>)}
            </select>
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
          <div className="flex space-x-2">
            <select
              value={filters.minBathrooms}
              onChange={(e) => onFiltersChange({...filters, minBathrooms: Number(e.target.value)})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent text-sm"
            >
              <option value={0}>Any</option>
              {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}+</option>)}
            </select>
          </div>
        </div>

        {/* Cap Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cap Rate (%)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minCapRate || ''}
              onChange={(e) => onFiltersChange({...filters, minCapRate: Number(e.target.value) || 0})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent text-sm"
              step="0.1"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxCapRate === 20 ? '' : filters.maxCapRate}
              onChange={(e) => onFiltersChange({...filters, maxCapRate: Number(e.target.value) || 20})}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent text-sm"
              step="0.1"
            />
          </div>
        </div>

        {/* Features */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
          <div className="flex flex-wrap gap-2">
            {availableFeatures.map(feature => (
              <button
                key={feature}
                onClick={() => {
                  const newFeatures = filters.features.includes(feature)
                    ? filters.features.filter(f => f !== feature)
                    : [...filters.features, feature];
                  onFiltersChange({...filters, features: newFeatures});
                }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filters.features.includes(feature)
                    ? 'bg-[#FF6000] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;