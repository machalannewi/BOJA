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
                <div className="px-4 py-2 bg-[#caf0f8] text-[#023e8a] rounded-sm font-medium">
                About Basco B Special
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  About Basco B Special
                </h2>
            </div>
            
            {/* Subheading */}
            <h3 className="text-xl md:text-2xl text-[#023e8a] font-semibold">
              Lending & Real Estate Investment Company
            </h3>
            
            {/* Description */}
            <p className="text-black leading-relaxed">
<span className='font-bold'>BASCO B SPECIAL NIGERIA LIMITED</span> provided solutions to keep you truly covered. Now we are one the best financial services provider to promote financial & investment solutions to customers most especially Small and Medium Enterprises. SMEs, Work classes of people and corporate entity.
Our primary objectives is to help create an opportunities for our clients to save accumulated capital and build sustainable wealth. And today we are proud to say we have over 300 customers around Lagos city and more are keep coming best on the economy situations of the country.
            </p>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            {/* Main Container with Orange Border */}
            <div className="relative bg-[#023e8a] rounded-tl-full p-2">
              {/* Inner Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden h-[500px] rounded-tl-4xl">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/about/about-main.jpg')`,
                  }}
                >
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute top-4 left-0 bg-white rounded-2xl py-3 px-10 shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-semibold text-gray-900 mb-1">
                      Our<span className='text-[#023e8a]'> Certified</span>
                    </div>
                    <div className="text-gray-600 text-lg md:text-xl font-medium">
                      Engineers
                    </div>
                  </div>
                </div>
                
                {/* Bottom Stats Card (Optional - can be added if visible in original) */}
                <div className="absolute bottom-6 right-7 bg-white rounded-2xl py-4 px-10 shadow-xl animate-bounce">
                  <div className="flex items-center justify-between space-x-3 h-20 w-64">
                    <div className="text-left">
                        <div className="text-4xl font-semibold text-gray-900 mb-1">
                          3K<span className='text-[#023e8a]'>+</span>
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