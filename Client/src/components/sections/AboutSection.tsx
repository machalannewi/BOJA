'use client';

import Image from 'next/image';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex flex-col align-items items-start gap-7">
                <div className="px-4 py-2 bg-[#FFF0E6] text-[#FF6000] rounded-sm font-medium">
                About Basco B Special
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Our Real Estate
                </h2>
            </div>
            
            {/* Subheading */}
            <h3 className="text-xl md:text-2xl text-orange-500 font-semibold">
              Finding great properties for investment
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              We specialize in providing a streamlined platform for real estate 
              investors to discover lucrative opportunities. Our user-friendly 
              interface offers access to a diverse range of properties, complete 
              with detailed analytics and expert guidance to help you make 
              informed decisions. Whether you are a seasoned investor or just 
              getting started, RealVest is your trusted partner for success in the 
              real estate market
            </p>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            {/* Main Container with Orange Border */}
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-tl-full p-2">
              {/* Inner Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden h-[500px] rounded-tl-4xl">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/about/65c46856b5a681707370582.jpg')`,
                  }}
                >
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute top-6 left-0 bg-white rounded-2xl py-3 px-10 shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-semibold text-gray-900 mb-1">
                      20<span className='text-[#FF6000]'>%</span>
                    </div>
                    <div className="text-gray-600 text-lg font-medium">
                      Average Profit Upto
                    </div>
                  </div>
                </div>
                
                {/* Bottom Stats Card (Optional - can be added if visible in original) */}
                <div className="absolute bottom-6 right-7 bg-white rounded-2xl py-4 px-10 shadow-xl animate-bounce">
                  <div className="flex items-center justify-between space-x-3 h-20 w-64">
                    <div className="text-left">
                        <div className="text-4xl font-semibold text-gray-900 mb-1">
                          3K<span className='text-[#FF6000]'>+</span>
                        </div>
                        <div className="text-gray-600 text-lg font-medium">
                          Investors
                        </div>
                    </div>
                    <Image src={"/about/thumbnail.png"} alt='Trusted' width={150} height={150}/>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-300 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;