'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Home, 
  Landmark,
  Briefcase,
  PiggyBank,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesLandingSection: React.FC = () => {
  
  const realEstateServices = [
    { 
      icon: Building2, 
      title: 'Build, Rent & Lease', 
      description: 'Comprehensive property development and leasing solutions'
    },
    { 
      icon: Home, 
      title: 'Commercial & Residential', 
      description: 'Diverse property portfolio across all sectors'
    },
    { 
      icon: TrendingUp, 
      title: 'Property Management', 
      description: 'End-to-end property conversion and management services'
    },
    { 
      icon: Briefcase, 
      title: 'Marketing & Sales', 
      description: 'Strategic property sales and marketing expertise'
    },
    { 
      icon: Landmark, 
      title: 'Land Development', 
      description: 'Prime land deals and development opportunities'
    },
    { 
      icon: Users, 
      title: 'Project Management', 
      description: 'Professional construction and renovation oversight'
    }
  ];

  const lendingServices = [
    { 
      icon: PiggyBank, 
      title: 'Savings Platform', 
      description: 'Secure savings accounts with competitive returns'
    },
    { 
      icon: TrendingUp, 
      title: 'Investment Lending', 
      description: 'Flexible financing for property investments'
    },
    { 
      icon: Briefcase, 
      title: 'Business Lending', 
      description: 'Working capital and business expansion loans'
    },
    { 
      icon: DollarSign, 
      title: 'Project Lending', 
      description: 'Development and construction project financing'
    },
    { 
      icon: Users, 
      title: 'Individual Lending', 
      description: 'Personal loans tailored to your needs'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#caf0f8] text-[#023e8a] px-4 py-2 rounded-lg font-medium mb-4">
            Products & Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We support investment and businesses throughout different development stages, 
            considering their financial needs
          </p>
        </div>

        {/* Real Estate Investment Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-[#023e8a] rounded-lg flex items-center justify-center mr-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Real Estate Investment</h3>
              <p className="text-gray-600">Complete property investment and development solutions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#023e8a] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#023e8a] group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lending Services Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-[#023e8a] rounded-lg flex items-center justify-center mr-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Lending Services</h3>
              <p className="text-gray-600">Flexible financing solutions for every need</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lendingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-green-100 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#023e8a] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#023e8a] group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


      </div>

              {/* Why Choose Us - Competitive Advantages */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-300 text-lg">
              We deliver excellence through innovation and integrity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#caf0f8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-[#023e8a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Faster Service</h4>
                <p className="text-gray-300">Quick processing and efficient delivery on all transactions</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#caf0f8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-[#023e8a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Better Financial Services</h4>
                <p className="text-gray-300">Competitive rates and flexible terms tailored to your needs</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#caf0f8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-[#023e8a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Strategic Locations</h4>
                <p className="text-gray-300">Prime properties in high-growth areas with excellent ROI</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#caf0f8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-[#023e8a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Superior Customer Care</h4>
                <p className="text-gray-300">24/7 dedicated support and personalized service</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#caf0f8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-[#023e8a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Research Excellence</h4>
                <p className="text-gray-300">In-depth market analysis and data-driven investment strategies</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#caf0f8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-[#023e8a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Collaborative Team</h4>
                <p className="text-gray-300">Experienced professionals working together for your success</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServicesLandingSection;