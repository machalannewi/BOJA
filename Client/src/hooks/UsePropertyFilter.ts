import { useState, useMemo } from 'react';
import { Property, SearchFilters } from '@/lib/types/property';

export const usePropertyFilters = (properties: Property[]) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    minPrice: 0,
    maxPrice: 10000000,
    minBedrooms: 0,
    maxBedrooms: 10,
    minBathrooms: 0,
    maxBathrooms: 10,
    minCapRate: 0,
    maxCapRate: 20,
    features: []
  });

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      if (filters.location && 
          !property.address.city.toLowerCase().includes(filters.location.toLowerCase()) &&
          !property.address.state.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      if (filters.propertyType && property.propertyType !== filters.propertyType) return false;
      if (property.price < filters.minPrice || property.price > filters.maxPrice) return false;
      if (property.bedrooms < filters.minBedrooms || property.bedrooms > filters.maxBedrooms) return false;
      if (property.bathrooms < filters.minBathrooms || property.bathrooms > filters.maxBathrooms) return false;
      if (property.investmentMetrics.capRate < filters.minCapRate || 
          property.investmentMetrics.capRate > filters.maxCapRate) return false;
      if (filters.features.length > 0 && 
          !filters.features.some(feature => property.features.includes(feature))) return false;
      return true;
    });
  }, [properties, filters]);

  const resetFilters = () => {
    setFilters({
      location: '',
      propertyType: '',
      minPrice: 0,
      maxPrice: 10000000,
      minBedrooms: 0,
      maxBedrooms: 10,
      minBathrooms: 0,
      maxBathrooms: 10,
      minCapRate: 0,
      maxCapRate: 20,
      features: []
    });
  };

  return {
    filters,
    setFilters,
    filteredProperties,
    resetFilters
  };
};