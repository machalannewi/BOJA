'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Home, 
  Percent,
  Calendar,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Info,
  Download,
  Share2
} from 'lucide-react';

interface CalculatorInputs {
  purchasePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  monthlyRent: number;
  propertyTaxes: number;
  insurance: number;
  maintenance: number;
  vacancy: number;
  propertyManagement: number;
}

interface CalculationResults {
  loanAmount: number;
  monthlyMortgage: number;
  totalMonthlyExpenses: number;
  monthlyCashFlow: number;
  annualCashFlow: number;
  capRate: number;
  cashOnCashReturn: number;
  totalCashNeeded: number;
  monthlyROI: number;
  breakEvenRent: number;
}

const InvestmentCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    purchasePrice: 300000,
    downPayment: 25,
    interestRate: 6.5,
    loanTerm: 30,
    monthlyRent: 2800,
    propertyTaxes: 3600,
    insurance: 1200,
    maintenance: 1800,
    vacancy: 5,
    propertyManagement: 8
  });

  const [results, setResults] = useState<CalculationResults>({
    loanAmount: 0,
    monthlyMortgage: 0,
    totalMonthlyExpenses: 0,
    monthlyCashFlow: 0,
    annualCashFlow: 0,
    capRate: 0,
    cashOnCashReturn: 0,
    totalCashNeeded: 0,
    monthlyROI: 0,
    breakEvenRent: 0
  });

  const [activeTab, setActiveTab] = useState<'basic' | 'advanced'>('basic');

  // Calculate mortgage payment
  const calculateMortgage = (principal: number, rate: number, years: number): number => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    
    if (monthlyRate === 0) return principal / numPayments;
    
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
           (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  // Update calculations whenever inputs change
  useEffect(() => {
    const downPaymentAmount = (inputs.purchasePrice * inputs.downPayment) / 100;
    const loanAmount = inputs.purchasePrice - downPaymentAmount;
    const monthlyMortgage = calculateMortgage(loanAmount, inputs.interestRate, inputs.loanTerm);
    
    const monthlyPropertyTax = inputs.propertyTaxes / 12;
    const monthlyInsurance = inputs.insurance / 12;
    const monthlyMaintenance = inputs.maintenance / 12;
    const monthlyVacancy = (inputs.monthlyRent * inputs.vacancy) / 100;
    const monthlyPropMgmt = (inputs.monthlyRent * inputs.propertyManagement) / 100;
    
    const totalMonthlyExpenses = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + 
                                monthlyMaintenance + monthlyVacancy + monthlyPropMgmt;
    
    const monthlyCashFlow = inputs.monthlyRent - totalMonthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;
    
    const annualRent = inputs.monthlyRent * 12;
    const annualExpenses = (monthlyPropertyTax + monthlyInsurance + monthlyMaintenance + 
                          monthlyVacancy + monthlyPropMgmt) * 12;
    const netOperatingIncome = annualRent - annualExpenses;
    const capRate = (netOperatingIncome / inputs.purchasePrice) * 100;
    
    const totalCashNeeded = downPaymentAmount + (inputs.purchasePrice * 0.03); // Assume 3% closing costs
    const cashOnCashReturn = (annualCashFlow / totalCashNeeded) * 100;
    
    const monthlyROI = (monthlyCashFlow / totalCashNeeded) * 100;
    const breakEvenRent = totalMonthlyExpenses;

    setResults({
      loanAmount,
      monthlyMortgage,
      totalMonthlyExpenses,
      monthlyCashFlow,
      annualCashFlow,
      capRate,
      cashOnCashReturn,
      totalCashNeeded,
      monthlyROI,
      breakEvenRent
    });
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number): string => {
    return `${percent.toFixed(2)}%`;
  };

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value >= threshold) return 'text-green-600';
    if (value >= threshold * 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  const inputFields = [
    { key: 'purchasePrice', label: 'Purchase Price', icon: Home, isCurrency: true, category: 'basic' },
    { key: 'downPayment', label: 'Down Payment %', icon: Percent, isPercent: true, category: 'basic' },
    { key: 'interestRate', label: 'Interest Rate %', icon: Percent, isPercent: true, category: 'basic' },
    { key: 'loanTerm', label: 'Loan Term (Years)', icon: Calendar, category: 'basic' },
    { key: 'monthlyRent', label: 'Monthly Rent', icon: DollarSign, isCurrency: true, category: 'basic' },
    { key: 'propertyTaxes', label: 'Annual Property Taxes', icon: DollarSign, isCurrency: true, category: 'advanced' },
    { key: 'insurance', label: 'Annual Insurance', icon: DollarSign, isCurrency: true, category: 'advanced' },
    { key: 'maintenance', label: 'Annual Maintenance', icon: DollarSign, isCurrency: true, category: 'advanced' },
    { key: 'vacancy', label: 'Vacancy Rate %', icon: Percent, isPercent: true, category: 'advanced' },
    { key: 'propertyManagement', label: 'Property Management %', icon: Percent, isPercent: true, category: 'advanced' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFF0E6] text-[#FF6000] rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Investment Analysis Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze potential investment properties with our comprehensive calculator. 
            Get instant cash flow, cap rate, and return projections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Calculator Inputs */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex mb-8">
              <button
                onClick={() => setActiveTab('basic')}
                className={`px-6 py-3 rounded-lg font-medium mr-2 transition-all duration-200 ${
                  activeTab === 'basic'
                    ? 'bg-[#FF6000] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#FF6000] hover:bg-white'
                }`}
              >
                Basic Info
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'advanced'
                    ? 'bg-[#FF6000] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#FF6000] hover:bg-white'
                }`}
              >
                Advanced
              </button>
            </div>

            <div className="space-y-6">
              {inputFields
                .filter(field => field.category === activeTab)
                .map((field) => {
                  const IconComponent = field.icon;
                  const value = inputs[field.key as keyof CalculatorInputs];
                  
                  return (
                    <div key={field.key}>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <IconComponent className="w-4 h-4 mr-2 text-[#FF6000]" />
                        {field.label}
                      </label>
                      <div className="relative">
                        {field.isCurrency && (
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            $
                          </span>
                        )}
                        {field.isPercent && (
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            %
                          </span>
                        )}
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => handleInputChange(field.key as keyof CalculatorInputs, Number(e.target.value))}
                          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent ${
                            field.isCurrency ? 'pl-8' : ''
                          } ${field.isPercent ? 'pr-8' : ''}`}
                          step={field.isPercent ? '0.1' : field.isCurrency ? '1000' : '1'}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Quick Presets */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Quick Presets:</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setInputs({...inputs, purchasePrice: 250000, monthlyRent: 2200})}
                  className="p-3 text-sm bg-white border border-gray-300 rounded-lg hover:border-[#FF6000] hover:text-[#FF6000] transition-colors duration-200"
                >
                  Starter Home
                </button>
                <button
                  onClick={() => setInputs({...inputs, purchasePrice: 400000, monthlyRent: 3200})}
                  className="p-3 text-sm bg-white border border-gray-300 rounded-lg hover:border-[#FF6000] hover:text-[#FF6000] transition-colors duration-200"
                >
                  Premium Property
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FF6000] rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-6 h-6 opacity-80" />
                  <span className="text-xs opacity-80">Monthly</span>
                </div>
                <div className="text-2xl font-bold">
                  {formatCurrency(results.monthlyCashFlow)}
                </div>
                <div className="text-sm opacity-90">Cash Flow</div>
              </div>

              <div className="bg-[#003047] rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Percent className="w-6 h-6 opacity-80" />
                  <span className="text-xs opacity-80">Annual</span>
                </div>
                <div className="text-2xl font-bold">
                  {formatPercent(results.cashOnCashReturn)}
                </div>
                <div className="text-sm opacity-90">Cash-on-Cash Return</div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-[#FF6000]" />
                Investment Analysis
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Total Cash Needed</span>
                  <span className="font-semibold">{formatCurrency(results.totalCashNeeded)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Monthly Mortgage</span>
                  <span className="font-semibold">{formatCurrency(results.monthlyMortgage)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Total Monthly Expenses</span>
                  <span className="font-semibold">{formatCurrency(results.totalMonthlyExpenses)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Break-even Rent</span>
                  <span className="font-semibold">{formatCurrency(results.breakEvenRent)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Cap Rate</span>
                  <span className={`font-semibold ${getPerformanceColor(results.capRate, 8)}`}>
                    {formatPercent(results.capRate)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Annual Cash Flow</span>
                  <span className={`font-semibold ${getPerformanceColor(results.annualCashFlow, 5000)}`}>
                    {formatCurrency(results.annualCashFlow)}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-4 h-4 mr-2 text-[#FF6000]" />
                Investment Health Check
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cash Flow</span>
                  <div className="flex items-center">
                    {results.monthlyCashFlow > 0 ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${results.monthlyCashFlow > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.monthlyCashFlow > 0 ? 'Positive' : 'Negative'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cap Rate</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(results.capRate, 8)}`}>
                    {results.capRate >= 8 ? 'Excellent' : results.capRate >= 6 ? 'Good' : 'Below Average'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cash-on-Cash Return</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(results.cashOnCashReturn, 10)}`}>
                    {results.cashOnCashReturn >= 10 ? 'Strong' : results.cashOnCashReturn >= 6 ? 'Fair' : 'Weak'}
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default InvestmentCalculator;