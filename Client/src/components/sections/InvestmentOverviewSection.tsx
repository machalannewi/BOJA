'use client';

import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Building2, ChevronDown, CheckCircle } from 'lucide-react';

const InvestmentOverviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'roi'>('overview');

  const financialData = {
    liabilities: [
      { item: 'Agency Fees', amount: 1000000 },
      { item: 'Legal Fee', amount: 1000000 },
      { item: 'Advertisement Payable', amount: 1000000 },
      { item: 'Staff Salary Payable', amount: 10380000 },
      { item: 'Operating Expenses', amount: 500000 },
      { item: 'Miscellaneous Expenses', amount: 1000000 },
      { item: 'Depreciation', amount: 1120000 },
      { item: "Owners' Equity", amount: 19120000 }
    ],
    assets: [
      { item: 'Cash in hand', amount: 1000000 },
      { item: 'Cash in hand', amount: 19120000 },
      { item: 'Furniture And Fittings', amount: 2000000 },
      { item: 'Office equipment', amount: 2000000 },
      { item: 'Generator', amount: 5000000 },
      { item: 'Motor Vehicle', amount: 4000000 },
      { item: 'Rent prepaid', amount: 5000000 }
    ],
    totalLiabilities: 32120000,
    totalAssets: 32120000
  };

  const equipmentCosts = [
    { item: 'Rent - Agency', amount: 5000000, note: '@10% × 2years' },
    { item: 'Rent - Legal', amount: 1000000, note: '@10% × 2years' },
    { item: 'Fixing', amount: 2000000, note: 'Partitions, Tables and Chairs Etc.' },
    { item: 'Equipment', amount: 2000000, note: 'Air Conditions, Photocopy and Laptops Etc.' },
    { item: 'Materials', amount: 500000, note: 'Files, and Other Working Materials Etc.' },
    { item: 'Power', amount: 3000000, note: '20kva generator - used one' },
    { item: 'Mobility', amount: 4000000, note: 'USED MINI BUS' },
    { item: 'Promotions', amount: 1000000, note: 'Promotions and Advertisement' },
    { item: 'Miscellaneous', amount: 1000000, note: 'Miscellaneous for 6 months' },
    { item: 'Working Capital', amount: 1000000, note: 'Working Capital for 6 Months' }
  ];

  const staffPayroll = [
    { position: 'CEO/Managing Director', salary: 300000 },
    { position: 'Director of Operation', salary: 250000 },
    { position: 'Executive Director', salary: 250000 },
    { position: 'Operational Manager', salary: 150000 },
    { position: 'Office Manager/HR', salary: 140000 },
    { position: 'Account / Admin', salary: 140000 },
    { position: 'Marketing / Sales Manager', salary: 140000 },
    { position: '3 Operational Teams 100,000 × 3', salary: 300000 },
    { position: 'Cleaner', salary: 60000 }
  ];

  const totalMonthlyPayroll = staffPayroll.reduce((sum, item) => sum + item.salary, 0);
  const totalPayrollCost = totalMonthlyPayroll * 6;

  const formatCurrency = (amount: number): string => {
    return `₦${amount.toLocaleString('en-NG')}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#caf0f8] text-[#023e8a] px-4 py-2 rounded-lg font-medium mb-4">
            Investment Opportunity
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Business Expansion Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in expanding our operations with a comprehensive investment opportunity offering attractive returns
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-[#023e8a]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">₦50M</div>
            <div className="text-gray-600 text-sm">Capitalization</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-[#023e8a]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">20%</div>
            <div className="text-gray-600 text-sm">ROI Return</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[#023e8a]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">70/30</div>
            <div className="text-gray-600 text-sm">Equity Split</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-[#023e8a]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10</div>
            <div className="text-gray-600 text-sm">Staff Members</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 bg-white rounded-xl shadow-md p-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'overview'
                ? 'bg-[#023e8a] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Financial Overview
          </button>
          <button
            onClick={() => setActiveTab('breakdown')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'breakdown'
                ? 'bg-[#023e8a] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Cost Breakdown
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'roi'
                ? 'bg-[#023e8a] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Investment Terms
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          
          {/* Financial Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Statement of Affairs as at 31/03/2025
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Liabilities */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 bg-yellow-100 px-4 py-2 rounded-lg">
                    Liabilities
                  </h4>
                  <div className="space-y-3">
                    {financialData.liabilities.map((item, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between py-3 bg-yellow-100 px-4 rounded-lg font-bold">
                      <span>Total</span>
                      <span>{formatCurrency(financialData.totalLiabilities)}</span>
                    </div>
                  </div>
                </div>

                {/* Assets */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 bg-yellow-100 px-4 py-2 rounded-lg">
                    Assets
                  </h4>
                  <div className="space-y-3">
                    {financialData.assets.map((item, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between py-3 bg-yellow-100 px-4 rounded-lg font-bold">
                      <span>Total</span>
                      <span>{formatCurrency(financialData.totalAssets)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Capital Section */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Working Capital on Expansion</h4>
                <div className="space-y-2">
                  <p className="text-lg">
                    <span className="font-semibold">Capitalization:</span> ₦50,000,000.00 
                    <span className="text-red-600 font-bold"> (50 MILLION NAIRA)</span>
                  </p>
                  <p className="text-gray-700 bg-yellow-100 px-4 py-3 rounded-lg">
                    The capital needed is to expand our company to ensure that our profitability 
                    radio will be excellent and growing increase over the next five years
                  </p>
                </div>
              </div>

              {/* Lease Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-2">
                  Lease property for 2 years @ the rate of <span className="font-bold">₦5,000,000.00</span> per year 
                  and the total of two years is <span className="font-bold">₦10,000,000.00</span> only
                </p>
                <p className="text-gray-700">
                  Agreement and legal are <span className="font-bold">10%</span> each which is 
                  <span className="font-bold"> ₦500,000.00 = ₦1,000,000.00</span> only.
                </p>
              </div>
            </div>
          )}

          {/* Cost Breakdown Tab */}
          {activeTab === 'breakdown' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Equipment, Devices, Fixing and Materials
              </h3>
              
              <div className="space-y-3 mb-8">
                {equipmentCosts.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">{item.item}</span>
                      {item.note && (
                        <span className="text-sm text-gray-600 ml-2">- {item.note}</span>
                      )}
                    </div>
                    <span className="font-bold text-gray-900 ml-4">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Staff Payroll (10 Persons)
              </h3>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Monthly Payment per Staff:</h4>
                <div className="space-y-2">
                  {staffPayroll.map((staff, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-blue-200">
                      <span className="text-gray-700">{staff.position}</span>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(staff.salary)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t-2 border-blue-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">Total Monthly:</span>
                    <span className="font-bold text-xl text-blue-900">
                      {formatCurrency(totalMonthlyPayroll)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">6 Months Operation:</span>
                    <span className="font-bold text-xl text-blue-900">
                      {formatCurrency(totalPayrollCost)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-xl font-bold text-red-700">
                    <span>TOTAL:</span>
                    <span>₦30,880,000.00</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-red-700">
                    <span>BALANCE:</span>
                    <span>₦19,120,000.00 for operations</span>
                  </div>
                  <div className="text-lg text-gray-700 pt-3 border-t border-red-200">
                    <span>Additions to our present </span>
                    <span className="font-bold">₦15,000,000.00</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold text-red-700">
                    <span>Ground Total:</span>
                    <span>₦34,120,000.00 for operations</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Investment Terms Tab */}
          {activeTab === 'roi' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Investment Terms & Returns
              </h3>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Capitalization: <span className="text-yellow-600">₦50,000,000</span>
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  (Fifty Million Naira Only)
                </p>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-xl font-semibold text-red-600 mb-2">
                    Equity Contributions: 20% ROI
                  </p>
                  <p className="text-lg text-gray-700">
                    @ Radios Of <span className="font-bold text-red-600">70/30</span> Break-Down Analysis
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Purpose of Investment</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The purpose of this plan is to secure additional funding from an investors for one 
                  year to five years repayment plan with quality dividend which the business dedicated 
                  to providing an excellence and quality services in Nigeria.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Mr. BASSY IBIANG ENANG</span> is the owner, have provided 
                  the bulk of start-up financing in the amounts of <span className="font-bold text-red-600">20%</span> Equity 
                  contribution as <span className="font-bold text-red-600">70/30</span> share capital.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-8 mb-8">
                <h4 className="text-xl font-bold text-green-900 mb-4">Repayment Structure</h4>
                <p className="text-gray-700 leading-relaxed">
                  The remaining for capital loan is to be paying it back base on the investor(s) by 
                  agreement&apos;s procedure. The investors and the owner are welcome to participate in 
                  the company&apos;s capital investment for the amount of 
                  <span className="font-bold text-green-700"> Sixty five million naira only. ₦65,000,000</span>
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOverviewSection;