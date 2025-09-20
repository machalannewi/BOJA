'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

  const faqData = [
    {
      id: 1,
      question: "What is real estate investment?",
      answer: "Real estate investment involves purchasing, owning, managing, renting, or selling properties for the purpose of generating income or profit. It's a popular wealth-building strategy that can provide passive income, tax benefits, and long-term appreciation. Real estate investments can include residential properties, commercial buildings, land, and real estate investment trusts (REITs)."
    },
    {
      id: 2,
      question: "What types of real estate investments are available?",
      answer: "There are several types of real estate investments available: 1) Rental Properties - Single-family homes, multi-family properties, and apartment complexes for rental income. 2) Commercial Real Estate - Office buildings, retail spaces, warehouses, and industrial properties. 3) Fix-and-Flip - Buying undervalued properties, renovating them, and selling for profit. 4) REITs - Real Estate Investment Trusts that allow you to invest in real estate without direct ownership. 5) Real Estate Crowdfunding - Pooling money with other investors to fund larger projects."
    },
    {
      id: 3,
      question: "How do I get started with real estate investment?",
      answer: "Getting started with real estate investment involves several key steps: 1) Educate yourself about the market and investment strategies. 2) Assess your financial situation and determine your budget. 3) Get pre-approved for financing if needed. 4) Choose your investment strategy (rental, fix-and-flip, commercial, etc.). 5) Research markets and identify potential properties. 6) Build a team of professionals including real estate agents, contractors, accountants, and lawyers. 7) Start small with your first investment and learn from the experience. Our platform can help guide you through each of these steps."
    },
    {
      id: 4,
      question: "How much money do I need to invest in real estate?",
      answer: "The amount needed varies significantly based on your investment strategy and location: 1) Traditional rentals typically require 20-25% down payment plus closing costs and reserves. 2) Fix-and-flip projects may need 10-30% down plus renovation costs. 3) Commercial properties often require 25-35% down payment. 4) REITs can be started with as little as $500-1000. 5) Real estate crowdfunding platforms may have minimums from $500-5000. Generally, having $50,000-100,000 provides good options for getting started, but we offer financing solutions to help reduce your initial capital requirements."
    },
    {
      id: 5,
      question: "What are the risks involved in real estate investment?",
      answer: "Real estate investment carries several risks that investors should understand: 1) Market Risk - Property values can decline due to economic conditions. 2) Liquidity Risk - Real estate is less liquid than stocks and bonds. 3) Vacancy Risk - Rental properties may have periods without tenants. 4) Maintenance Risk - Unexpected repairs and maintenance costs. 5) Interest Rate Risk - Rising rates can affect financing costs and property values. 6) Location Risk - Neighborhood changes can impact property values. However, these risks can be mitigated through proper research, diversification, adequate insurance, and working with experienced professionals."
    },
    {
      id: 6,
      question: "How does financing work for investment properties?",
      answer: "Investment property financing differs from primary residence loans: 1) Higher down payments (typically 20-25% minimum). 2) Higher interest rates (usually 0.125-0.75% above primary residence rates). 3) Stricter qualification requirements including higher credit scores and lower debt-to-income ratios. 4) Lenders consider rental income in qualification calculations (usually 75% of projected rent). 5) More cash reserves required (2-6 months of mortgage payments). 6) Different loan programs available including conventional, portfolio, and hard money loans. Our platform connects you with specialized lenders who understand investment properties and can offer competitive rates."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Banner Section */}
      <section className="relative h-52 md:h-80 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/properties/house-isolated-field.jpg')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About
            </h1>
            <div className="w-24 h-0.5 bg-[#FF6000] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
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
                  
                  {/* Bottom Stats Card */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All Your Concern
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                >
                  <h3 className={`md:text-lg font-semibold pr-4 ${
                    openFAQ === faq.id ? 'text-[#FF6000]' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className={`w-6 h-6 rounded-full ${
                      openFAQ === faq.id ? 'text-[#FF6000] bg-[#FFF0E6]' : 'text-[#FF6000] bg-[#FFF0E6]'
                    }`} />
                  </div>
                </button>

                {/* Answer */}
                <div className={`transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;