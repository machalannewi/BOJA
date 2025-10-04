'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LoanProduct {
  id: string;
  name: string;
  interestRate: {
    max: number;
  };
  unit: number;
  maxLoanAmount: number;
  termOptions: number[];
  duration: string;
  category: 'sme' | 'employee' | 'corporate';
}

const LoansPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('sme');
  const [loanAmount, setLoanAmount] = useState<number>(500000);

  const loanProducts: LoanProduct[] = [
    {
      id: 'sme',
      name: 'SERVICE LINE (S1)',
      interestRate: { max: 30 },
      unit: 40,
      maxLoanAmount: 500000,
      termOptions: [15, 20, 30],
      duration: '3 Months',
      category: 'sme',
    },
    {
      id: 'sme2',
      name: 'SERVICE LINE (S2)',
      interestRate: { max: 30 },
      unit: 30,
      maxLoanAmount: 250000,
      termOptions: [20, 25, 30],
      duration: '3 Months',
      category: 'sme'
    },
    {
      id: 'sme3',
      name: 'SERVICE LINE (S3)',
      interestRate: { max: 30 },
      unit: 20,
      maxLoanAmount: 120000,
      termOptions: [20, 25, 30],
      duration: '3 Months',
      category: 'sme'
    },
    {
      id: 'sme4',
      name: 'SERVICE LINE (S4)',
      interestRate: { max: 30 },
      unit: 10,
      maxLoanAmount: 28000,
      termOptions: [20, 25, 30],
      duration: '3 Months',
      category: 'sme'
    },
    {
      id: 'corporate',
      name: 'SERVICE LINE (S4)',
      interestRate: { max: 30 },
      unit: 10,
      maxLoanAmount: 45000,
      termOptions: [1, 2],
      duration: '3 Months',
      category: 'corporate'
    },
    {
      id: 'employee',
      name: 'SERVICE LINE (S1)',
      interestRate: { max: 30 },
      unit: 60,
      maxLoanAmount: 500000,
      termOptions: [1, 2],
      duration: '3 Months',
      category: 'employee'
    },
    {
      id: 'employee2',
      name: 'SERVICE LINE (S2)',
      interestRate: { max: 30 },
      unit: 40,
      maxLoanAmount: 230000,
      termOptions: [30],
      duration: '3 Months',
      category: 'employee'
    }
  ];

  const categories = [
    { key: 'sme', label: 'Small & Medium Enterprises' },
    { key: 'employee', label: 'Employee' },
    { key: 'corporate', label: 'Corporate' }
  ];


  const filteredProducts = activeCategory === 'sme' || 'employee' || 'corporate'
    ? loanProducts.filter(product => product.category === activeCategory) 
    : loanProducts.filter(product => product.category === 'sme')

  // Simple monthly payment calculation

  // Fixed interest rate and term
  const interestRate = 30; // 30%
  const term = 3; // months

  // Calculate one-time payment after 3 months
  const totalPayback = loanAmount + loanAmount * (interestRate / 100);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
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
            backgroundImage: `url('/loans/finance.jpg')`,
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
            <div className="w-24 h-0.5 bg-[#023e8a] mx-auto mt-6"></div>
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
              Get an instant estimate of your total payback after 3 months
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
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₦
                  </span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term
                </label>
                <input
                  type="text"
                  value={`${term} Months`}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 bg-gray-100 rounded-sm text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate
                </label>
                <input
                  type="text"
                  value={`${interestRate}%`}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 bg-gray-100 rounded-sm text-gray-600"
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-[#023e8a] to-orange-500 rounded-sm p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-orange-300 pb-2">
                  <span>Loan Amount:</span>
                  <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-300 pb-2">
                  <span>Interest (30%):</span>
                  <span className="font-semibold">{formatCurrency(loanAmount * 0.3)}</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold pt-4">
                  <span>Total Payback (after 3 months):</span>
                  <span>{formatCurrency(totalPayback)}</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="#loan-products"
                  className="w-full bg-white text-[#023e8a] py-3 px-6 rounded-sm font-semibold hover:bg-gray-100 transition-colors duration-200 text-center block"
                >
                  View Loan Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section>
        {/* Forecast Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Sales & Loan Forecast
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Based on our strategic segmentation, we’ve projected loanable funds, 
            returns, and ROI across Small & Medium Enterprises (60%), Employees (30%), 
            and Corporate Entities (10%). Below are detailed quarterly and yearly forecasts.
          </p>
        </div>
      </section>

      {/* Forecast Table Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Market Segmentation & Loanable Funds</h3>
          
{/* First Table */}
<div className="overflow-x-auto">
  <table className="w-full border border-gray-200 text-sm text-gray-700">
    <thead className="bg-gray-100 text-gray-900">
      <tr>
        <th className="border p-3">Market</th>
        <th className="border p-3" colSpan={4}>
          Small & Medium Enterprises (60%)
        </th>
        <th className="border p-3" colSpan={2}>
          Employee (30%)
        </th>
        <th className="border p-3">
          Corporate (10%)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-3 font-semibold">Service Line</td>
        <td className="border p-3">S1 (10K-50K)</td>
        <td className="border p-3">S2 (100K-200K)</td>
        <td className="border p-3">S3 (300K-500K)</td>
        <td className="border p-3">S4 (500K-1M)</td>
        <td className="border p-3">S1 (10K-50K)</td>
        <td className="border p-3">S2 (100K-200K)</td>
        <td className="border p-3">S4 (500K-1M)</td>
      </tr>
      <tr className='bg-gray-100'>
        <td className="border p-3 font-bold text-gray-900">Loanable Funds (₦)</td>
        <td className="border p-3 font-bold">4,800</td>
        <td className="border p-3 font-bold">3,600</td>
        <td className="border p-3 font-bold">2,400</td>
        <td className="border p-3 font-bold">1,200</td>
        <td className="border p-3 font-bold">3,600</td>
        <td className="border p-3 font-bold">2,400</td>
        <td className="border p-3 font-bold">2,000</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">Interest Rate</td>
        <td className="border p-3">30%</td>
        <td className="border p-3">30%</td>
        <td className="border p-3">30%</td>
        <td className="border p-3">28%</td>
        <td className="border p-3">30%</td>
        <td className="border p-3">30%</td>
        <td className="border p-3">28%</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">Duration (Month)</td>
        <td className="border p-3">3</td>
        <td className="border p-3">3</td>
        <td className="border p-3">3</td>
        <td className="border p-3">3</td>
        <td className="border p-3">3</td>
        <td className="border p-3">3</td>
        <td className="border p-3">3</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">FQ1 Returns</td>
        <td className="border p-3">1,440</td>
        <td className="border p-3">1,080</td>
        <td className="border p-3">720</td>
        <td className="border p-3">336</td>
        <td className="border p-3">1,080</td>
        <td className="border p-3">720</td>
        <td className="border p-3">560</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">FQ2 Returns</td>
        <td className="border p-3">920</td>
        <td className="border p-3">720</td>
        <td className="border p-3">480</td>
        <td className="border p-3">224</td>
        <td className="border p-3">720</td>
        <td className="border p-3">480</td>
        <td className="border p-3">373.33</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">FQ3 Returns</td>
        <td className="border p-3">480</td>
        <td className="border p-3">360</td>
        <td className="border p-3">240</td>
        <td className="border p-3">112</td>
        <td className="border p-3">360</td>
        <td className="border p-3">240</td>
        <td className="border p-3">186.67</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">FQ Total</td>
        <td className="border p-3">2,880</td>
        <td className="border p-3">2,160</td>
        <td className="border p-3">1,440</td>
        <td className="border p-3">672</td>
        <td className="border p-3">2,160</td>
        <td className="border p-3">1,440</td>
        <td className="border p-3">1,120</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-bold">Retained 50%</td>
        <td className="border p-3 font-bold">1,440</td>
        <td className="border p-3 font-bold">1,080</td>
        <td className="border p-3 font-bold">720</td>
        <td className="border p-3 font-bold">336</td>
        <td className="border p-3 font-bold">1,080</td>
        <td className="border p-3 font-bold">720</td>
        <td className="border p-3 font-bold">560</td>
      </tr>
      <tr className='bg-gray-100 border-t-2 border-black'>
        <td className="border p-3 font-bold text-gray-900">Loanable Funds (₦)</td>
        <td className="border p-3 font-bold">6,240</td>
        <td className="border p-3 font-bold">5,760</td>
        <td className="border p-3 font-bold">3,840</td>
        <td className="border p-3 font-bold">1,872</td>
        <td className="border p-3 font-bold">5,760</td>
        <td className="border p-3 font-bold">3,840</td>
        <td className="border p-3 font-bold">3,120</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">SQ1</td>
        <td className="border p-3">1,872</td>
        <td className="border p-3">1,728</td>
        <td className="border p-3">1,152</td>
        <td className="border p-3">524</td>
        <td className="border p-3">1,728</td>
        <td className="border p-3">1,152</td>
        <td className="border p-3">873.60</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">SQ2</td>
        <td className="border p-3">1,536</td>
        <td className="border p-3">1,152</td>
        <td className="border p-3">768</td>
        <td className="border p-3">349.44</td>
        <td className="border p-3">1,152</td>
        <td className="border p-3">768</td>
        <td className="border p-3">582.40</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">SQ3</td>
        <td className="border p-3">768</td>
        <td className="border p-3">576</td>
        <td className="border p-3">384</td>
        <td className="border p-3">174.72</td>
        <td className="border p-3">576</td>
        <td className="border p-3">384</td>
        <td className="border p-3">291.20</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">SQ Total</td>
        <td className="border p-3">4,176</td>
        <td className="border p-3">3,456</td>
        <td className="border p-3">2,304</td>
        <td className="border p-3">1,048</td>
        <td className="border p-3">3,456</td>
        <td className="border p-3">2,304</td>
        <td className="border p-3">1,747.20</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-bold">Retained 50%</td>
        <td className="border p-3 font-bold">2,088</td>
        <td className="border p-3 font-bold">1,728</td>
        <td className="border p-3 font-bold">1,152</td>
        <td className="border p-3 font-bold">542.2</td>
        <td className="border p-3 font-bold">1,728</td>
        <td className="border p-3 font-bold">1,152</td>
        <td className="border p-3 font-bold">873.60</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">6 Months Return</td>
        <td className="border p-3">3,528</td>
        <td className="border p-3">2,808</td>
        <td className="border p-3">1,872</td>
        <td className="border p-3">860</td>
        <td className="border p-3">2,808</td>
        <td className="border p-3">1,872</td>
        <td className="border p-3">1,433.60</td>
      </tr>
      <tr className='bg-gray-100 border-t-2 border-black'>
        <td className="border p-3 font-bold text-gray-900">Loanable Funds (₦)</td>
        <td className="border p-3 font-bold">8,328</td>
        <td className="border p-3 font-bold">6,408</td>
        <td className="border p-3 font-bold">4,272</td>
        <td className="border p-3 font-bold">2,060</td>
        <td className="border p-3 font-bold">6,408</td>
        <td className="border p-3 font-bold">4,272</td>
        <td className="border p-3 font-bold">3,433.60</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">TQ1 Returns</td>
        <td className="border p-3">2,498.40</td>
        <td className="border p-3">1,922.40</td>
        <td className="border p-3">1,261.60</td>
        <td className="border p-3">576.84</td>
        <td className="border p-3">1,922.40</td>
        <td className="border p-3">1,281.60</td>
        <td className="border p-3">961.41</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">TQ2 Returns</td>
        <td className="border p-3">1,665.60</td>
        <td className="border p-3">1,281.60</td>
        <td className="border p-3">854.40</td>
        <td className="border p-3">384.56</td>
        <td className="border p-3">1,281.60</td>
        <td className="border p-3">854.40</td>
        <td className="border p-3">640.94</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">TQ3 Returns</td>
        <td className="border p-3">832.80</td>
        <td className="border p-3">640.80</td>
        <td className="border p-3">427.20</td>
        <td className="border p-3">192.28</td>
        <td className="border p-3">640.80</td>
        <td className="border p-3">427.20</td>
        <td className="border p-3">320.47</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">TQ Total</td>
        <td className="border p-3">4,996.80</td>
        <td className="border p-3">3,844.80</td>
        <td className="border p-3">2,563.20</td>
        <td className="border p-3">1,153.69</td>
        <td className="border p-3">3,884.80</td>
        <td className="border p-3">2,563.20</td>
        <td className="border p-3">1,922.82</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-bold">Retained 50%</td>
        <td className="border p-3 font-bold">2,498.40</td>
        <td className="border p-3 font-bold">1,922.40</td>
        <td className="border p-3 font-bold">1,281.60</td>
        <td className="border p-3 font-bold">576.84</td>
        <td className="border p-3 font-bold">1,922.40</td>
        <td className="border p-3 font-bold">1,281.60</td>
        <td className="border p-3 font-bold">961.41</td>
      </tr>
       <tr className='bg-gray-100 border-t-2 border-black'>
        <td className="border p-3 font-bold text-gray-900">Loanable Funds (₦)</td>
        <td className="border p-3 font-bold">10,826.40</td>
        <td className="border p-3 font-bold">8,330.40</td>
        <td className="border p-3 font-bold">5,553.60</td>
        <td className="border p-3 font-bold">2,637.00</td>
        <td className="border p-3 font-bold">8,330.40</td>
        <td className="border p-3 font-bold">5,553.60</td>
        <td className="border p-3 font-bold">4,395.01</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">LQ1 Returns</td>
        <td className="border p-3">3,247.92</td>
        <td className="border p-3">2,499.12</td>
        <td className="border p-3">1,666.08</td>
        <td className="border p-3">738.36</td>
        <td className="border p-3">2,499.12</td>
        <td className="border p-3">1,666.08</td>
        <td className="border p-3">1,230.60</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">LQ2 Returns</td>
        <td className="border p-3">2,165.28</td>
        <td className="border p-3">1,666.08</td>
        <td className="border p-3">1,110.72</td>
        <td className="border p-3">492.24</td>
        <td className="border p-3">1,666.08</td>
        <td className="border p-3">1,110.72</td>
        <td className="border p-3">820.40</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">LQ3 Returns</td>
        <td className="border p-3">1,082.64</td>
        <td className="border p-3">833.04</td>
        <td className="border p-3">555.36</td>
        <td className="border p-3">246.12</td>
        <td className="border p-3">833.04</td>
        <td className="border p-3">555.36</td>
        <td className="border p-3">410.20</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-semibold">LQ Total</td>
        <td className="border p-3">6495.84</td>
        <td className="border p-3">4,998.24</td>
        <td className="border p-3">3,332.16</td>
        <td className="border p-3">1,476.72</td>
        <td className="border p-3">4,998.24</td>
        <td className="border p-3">3,332.16</td>
        <td className="border p-3">2,461.20</td>
      </tr>
      <tr className="">
        <td className="border p-3 font-bold">Retained 50%</td>
        <td className="border p-3 font-bold">3,247.92</td>
        <td className="border p-3 font-bold">2,499.12</td>
        <td className="border p-3 font-bold">1,666.08</td>
        <td className="border p-3 font-bold">738.36</td>
        <td className="border p-3 font-bold">2,499.12</td>
        <td className="border p-3 font-bold">1,666.08</td>
        <td className="border p-3 font-bold">1,230.60</td>
      </tr>
      <tr className="">
        <td className="border p-3">6 Months Returns</td>
        <td className="border p-3">5,746.32</td>
        <td className="border p-3">4,421.52</td>
        <td className="border p-3">2,947.68</td>
        <td className="border p-3">1,315.21</td>
        <td className="border p-3">4,421.52</td>
        <td className="border p-3">2,947.68</td>
        <td className="border p-3">2,192.01</td>
      </tr>
      <tr className='bg-gray-100 border-t-2 border-black'>
        <td className="border p-3 font-bold text-gray-900">Loanable Funds (Year 2)</td>
        <td className="border p-3 font-bold">14,074.32</td>
        <td className="border p-3 font-bold">10,829.52</td>
        <td className="border p-3 font-bold">7,219.68</td>
        <td className="border p-3 font-bold">3,375.37</td>
        <td className="border p-3 font-bold">10,829.52</td>
        <td className="border p-3 font-bold">7,219.68</td>
        <td className="border p-3 font-bold">5,625.61</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
      </section>

      {/* ROI Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Returns & ROI at Year 1</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm text-gray-700">
              <thead className="bg-gray-100 text-gray-900">
                <tr>
                  <th className="border p-3">Market</th>
                  <th className="border p-3" colSpan={4}>
                    Small & Medium Enterprises (60%)
                  </th>
                  <th className="border p-3" colSpan={2}>
                    Employee (30%)
                  </th>
                  <th className="border p-3">
                    Corporate (10%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold"> Returns</td>
                  <td className="border p-3">9,274.32</td>
                  <td className="border p-3">7,229.52</td>
                  <td className="border p-3">4,819.68</td>
                  <td className="border p-3">2,175.37</td>
                  <td className="border p-3">7,229.52</td>
                  <td className="border p-3">4,819.68</td>
                  <td className="border p-3">3,625.61</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">ROI @ Year 1</td>
                  <td className="border p-3">1.93</td>
                  <td className="border p-3">2.01</td>
                  <td className="border p-3">2.01</td>
                  <td className="border p-3">1.81</td>
                  <td className="border p-3">2.01</td>
                  <td className="border p-3">2.01</td>
                  <td className="border p-3">1.81</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-[#FF6000] to-orange-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Grow with Us?
        </h2>
        <p className="text-lg mb-8">
          Explore our loan packages, forecasted growth, and secure your financial future today.
        </p>
        <button className="bg-white text-[#FF6000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Apply for a Loan
        </button>
      </section> */}
</section>

      {/* Loan Products Section */}
      <section id="loan-products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#caf0f8] text-[#023e8a] px-4 py-2 rounded-sm text-sm font-medium mb-4">
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
                    ? 'bg-[#023e8a] text-white shadow-md'
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
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                      <div className="text-xl font-bold text-gray-900">
                        {product.interestRate.max}%
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Unit</div>
                      <div className="text-xl font-bold text-gray-900">
                        {product.unit}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Max Loan</div>
                      <div className="text-xl font-bold text-gray-900">
                        {formatCurrency(product.maxLoanAmount)}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-sm p-4">
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="text-xl font-bold text-gray-900">
                        {product.duration}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/loans/apply?product=${product.id}`}
                      className="flex-1 bg-[#023e8a] text-white py-3 px-4 rounded-sm font-semibold hover:bg-[#023e8a] transition-colors duration-200 text-center"
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