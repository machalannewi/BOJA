'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CityData {
  id: number;
  name: string;
  country: string;
  properties: number;
  image: string;
}

const CitiesSliderSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const cities: CityData[] = [
    {
      id: 1,
      name: 'London',
      country: 'United Kingdom',
      properties: 12,
      image: '/cities/3d-electric-car-building.jpg'
    },
    {
      id: 2,
      name: 'Paris',
      country: 'France',
      properties: 4,
      image: '/cities/3d-house-model-with-modern-architecture.jpg'
    },
    {
      id: 3,
      name: 'Berlin',
      country: 'Germany',
      properties: 8,
      image: '/cities/3d-rendering-house-model.jpg'
    },
    {
      id: 4,
      name: 'Tokyo',
      country: 'Japan',
      properties: 15,
      image: '/cities/analog-landscape-city-with-buildings.jpg'
    },
    {
      id: 5,
      name: 'New York',
      country: 'United States',
      properties: 23,
      image: '/cities/new-buildings-with-green-areas.jpg'
    },
    {
      id: 6,
      name: 'Dubai',
      country: 'UAE',
      properties: 7,
      image: '/cities/chinese-city.jpg'
    },
    {
      id: 7,
      name: 'Sydney',
      country: 'Australia',
      properties: 9,
      image: '/cities/hotel.jpg'
    },
    {
      id: 8,
      name: 'Singapore',
      country: 'Singapore',
      properties: 11,
      image: '/cities/mumbai-skyline-skyscrapers-construction.jpg'
    }
  ];

  // Clear existing interval
  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start auto-slide
  const startAutoSlide = () => {
    clearAutoSlide();
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => {
          const maxIndex = cities.length - 4; // Desktop: show 4 cards
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }
    }, 5000);
  };

  // Auto-slide every 5 seconds, but pause on hover
  useEffect(() => {
    if (!isPaused) {
      startAutoSlide();
    } else {
      clearAutoSlide();
    }

    return () => clearAutoSlide();
  }, [isPaused, cities.length]);

  // Handle mouse enter/leave for pausing
  const handleMouseEnter = (cityId: number) => {
    setHoveredCity(cityId);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
    setIsPaused(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = cities.length - 4; // Desktop: show 4 cards
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = cities.length - 4;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            {/* Section Label */}
            <div className="inline-block bg-[#FFF0E6] text-[#FF6000] px-4 py-2 rounded-lg text-sm font-medium mb-4">
              Cities
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore By Cities
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all duration-200 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all duration-200 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
            </button>
          </div>
        </div>

        {/* Cities Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-out gap-4 md:gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {cities.map((city, index) => (
              <div
                key={city.id}
                className="flex-none w-1/2 md:w-1/4 relative group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(city.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  hoveredCity === city.id ? 'transform scale-105 z-10 shadow-2xl' : 'shadow-lg'
                }`}>
                  
                  {/* City Image */}
                  <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-gray-200 to-gray-300">
                    <Image
                      src={city.image}
                      alt={`${city.name}, ${city.country}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* City Information Overlay */}
                    <div className={`absolute inset-0 flex flex-col justify-end p-4 md:p-6 transition-all duration-300 ${
                      hoveredCity === city.id 
                        ? 'bg-black/40' 
                        : 'bg-transparent'
                    }`}>
                      
                      {/* City Name and Properties - Always visible but enhanced on hover */}
                      <div className={`transform transition-all duration-300 ${
                        hoveredCity === city.id 
                          ? 'translate-y-0 scale-110' 
                          : 'translate-y-2'
                      }`}>
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                          {city.name}, {city.country}
                        </h3>
                        <p className="text-white/90 text-base md:text-lg">
                          {city.properties} Properties
                        </p>
                      </div>

                      {/* Additional hover content */}
                      <div className={`transform transition-all duration-300 mt-2 md:mt-3 ${
                        hoveredCity === city.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#FF6000] rounded-full"></div>
                          <span className="text-white/80 text-sm">Available Now</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(cities.length - 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-[#FF6000]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating "Back to Top" Button (matching original design) */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF6000] hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-50">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </section>
  );
};

export default CitiesSliderSection;