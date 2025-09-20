'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  Shield, 
  CheckCircle, 
  TrendingDown,
  Star,
  ArrowRight,
  Percent,
  FileText,
  Users,
  Award
} from 'lucide-react';

interface LoanProduct {
  id: string;
  name: string;
  description: string;
  interestRate: {
    min: number;
    max: number;
  };
  minDownPayment: number;
  maxLoanAmount: number;
  termOptions: number[];
  features: string[];
  requirements: string[];
  processingTime: string;
  category: 'residential' | 'commercial' | 'bridge';
  popular?: boolean;
}

const LoansPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(25);
  const [term, setTerm] = useState<number>(30);

  const loanProducts: LoanProduct[] = [
    {
      id: 'conventional-investment',
      name: 'Conventional Investment Loan',
      description: 'Perfect for seasoned investors looking for competitive rates on rental properties.',
      interestRate: { min: 6.25, max: 7.50 },
      minDownPayment: 20,
      maxLoanAmount: 2000000,
      termOptions: [15, 20, 30],
      features: ['No PMI Required', 'Cash-Out Refinancing', 'Portfolio Building', 'Flexible Terms'],
      requirements: ['680+ Credit Score', '25% Down Payment', 'Debt-to-Income < 43%', '2-6 Months Reserves'],
      processingTime: '30-45 days',
      category: 'residential',
      popular: true
    },
    {
      id: 'portfolio-loan',
      name: 'Portfolio Loan',
      description: 'Designed for investors with multiple properties seeking portfolio optimization.',
      interestRate: { min: 5.95, max: 7.25 },
      minDownPayment: 25,
      maxLoanAmount: 5000000,
      termOptions: [20, 25, 30],
      features: ['No Loan Limits', 'Asset-Based Lending', 'Cross-Collateralization', 'Flexible Underwriting'],
      requirements: ['720+ Credit Score', '25% Down Payment', 'Strong Assets', 'Investment Experience'],
      processingTime: '21-30 days',
      category: 'residential'
    },
    {
      id: 'commercial-loan',
      name: 'Commercial Investment Loan',
      description: 'Comprehensive financing solutions for commercial real estate investments.',
      interestRate: { min: 6.75, max: 8.50 },
      minDownPayment: 30,
      maxLoanAmount: 10000000,
      termOptions: [20, 25, 30],
      features: ['Non-Recourse Options', 'Interest-Only Periods', 'Assumable Loans', 'Competitive Rates'],
      requirements: ['10+ Years Experience', '30% Down Payment', 'Strong NOI', 'Professional Management'],
      processingTime: '45-60 days',
      category: 'commercial'
    },
    {
      id: 'bridge-loan',
      name: 'Bridge Loan',
      description: 'Fast financing for time-sensitive opportunities and property transitions.',
      interestRate: { min: 8.50, max: 12.00 },
      minDownPayment: 30,
      maxLoanAmount: 3000000,
      termOptions: [1, 2],
      features: ['Fast Approval', 'Interest-Only Payments', 'Exit Strategy Flexible', 'Asset-Based'],
      requirements: ['Exit Strategy', '30% Down Payment', 'Property Value', 'Experience Required'],
      processingTime: '7-14 days',
      category: 'bridge'
    },
    {
      id: 'fix-flip-loan',
      name: 'Fix & Flip Loan',
      description: 'Short-term financing for property renovation and quick resale projects.',
      interestRate: { min: 9.00, max: 13.00 },
      minDownPayment: 25,
      maxLoanAmount: 1500000,
      termOptions: [1, 2],
      features: ['Renovation Funding', 'Fast Closing', 'Interest-Only Options', 'Draw Schedule'],
      requirements: ['Flip Experience', '25% Down Payment', 'Detailed Budget', 'Exit Timeline'],
      processingTime: '10-14 days',
      category: 'bridge',
      popular: true
    },
    {
      id: 'dscr-loan',
      name: 'DSCR Loan',
      description: 'Debt Service Coverage Ratio loans based on property cash flow, not personal income.',
      interestRate: { min: 6.50, max: 8.25 },
      minDownPayment: 20,
      maxLoanAmount: 3000000,
      termOptions: [30],
      features: ['No Income Verification', 'Property Cash Flow Based', 'Fast Processing', 'Investor Friendly'],
      requirements: ['1.25+ DSCR', '20% Down Payment', 'Property Analysis', 'Reserve Requirements'],
      processingTime: '21-30 days',
      category: 'residential'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Loans' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'bridge', label: 'Bridge & Hard Money' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Approval',
      description: 'Get approved in as little as 24 hours with our streamlined process'
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Access the best rates in the market with our lender network'
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Bank-level security with transparent, honest lending practices'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated loan specialists guide you through every step'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? loanProducts 
    : loanProducts.filter(product => product.category === activeCategory);

  // Simple monthly payment calculation
  const calculateMonthlyPayment = (principal: number, rate: number, years: number): number => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    
    if (monthlyRate === 0) return principal / numPayments;
    
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
           (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  const loanAmountAfterDown = loanAmount * (1 - downPayment / 100);
  const estimatedPayment = calculateMonthlyPayment(loanAmountAfterDown, 6.5, term);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Banner Section */}
      <section className="relative h-52 md:h-80 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/properties/house-isolated-field.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financing Options
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Competitive rates and flexible terms for all your investment needs
            </p>
            <div className="w-24 h-0.5 bg-[#FF6000] mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Quick Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-sm shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Payment Calculator
              </h2>
              <p className="text-gray-600">
                Get an instant estimate of your monthly payments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Calculator Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#FF6000] focus:border-transparent"
                      step="10000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment (%)
                  </label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#FF6000] focus:border-transparent"
                    min="10"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (Years)
                  </label>
                  <select
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#FF6000] focus:border-transparent"
                  >
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-[#FF6000] to-orange-500 rounded-sm p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-orange-300 pb-2">
                    <span>Loan Amount:</span>
                    <span className="font-semibold">{formatCurrency(loanAmountAfterDown)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-orange-300 pb-2">
                    <span>Down Payment:</span>
                    <span className="font-semibold">{formatCurrency(loanAmount * downPayment / 100)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-orange-300 pb-2">
                    <span>Interest Rate (Est.):</span>
                    <span className="font-semibold">6.5%</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold pt-4">
                    <span>Monthly Payment:</span>
                    <span>{formatCurrency(estimatedPayment)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="#loan-products"
                    className="w-full bg-white text-[#FF6000] py-3 px-6 rounded-sm font-semibold hover:bg-gray-100 transition-colors duration-200 text-center block"
                  >
                    View Loan Options
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Financing?
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              We make real estate financing simple, fast, and transparent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#FF6000] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section id="loan-products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FFF0E6] text-[#FF6000] px-4 py-2 rounded-sm text-sm font-medium mb-4">
              Loan Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Loan
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              From conventional loans to bridge financing, we have solutions for every investment strategy
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-sm font-medium transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-[#FF6000] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Loan Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-[#FF6000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                      <div className="text-xl font-bold text-gray-900">
                        {product.interestRate.min}% - {product.interestRate.max}%
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Down Payment</div>
                      <div className="text-xl font-bold text-gray-900">
                        {product.minDownPayment}% min
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Max Loan</div>
                      <div className="text-xl font-bold text-gray-900">
                        {formatCurrency(product.maxLoanAmount)}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Processing Time</div>
                      <div className="text-xl font-bold text-gray-900">
                        {product.processingTime}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/loans/apply?product=${product.id}`}
                      className="flex-1 bg-[#FF6000] text-white py-3 px-4 rounded-sm font-semibold hover:bg-orange-600 transition-colors duration-200 text-center"
                    >
                      Apply Now
                    </Link>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-sm font-semibold hover:bg-gray-200 transition-colors duration-200">
                      Learn More
                    </button>
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

export default LoansPage;