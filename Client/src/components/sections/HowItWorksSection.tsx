'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  Calculator, 
  FileText, 
  CheckCircle, 
  Key,
  ArrowRight,
  Shield,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  timeframe: string;
}

interface ProcessTab {
  id: 'buying' | 'financing';
  label: string;
  steps: Step[];
}

const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buying' | 'financing'>('buying');
  const [activeStep, setActiveStep] = useState<number>(1);

  const processes: ProcessTab[] = [
    {
      id: 'buying',
      label: 'Property Investment',
      steps: [
        {
          id: 1,
          title: 'Search & Discover',
          description: 'Browse our curated selection of investment properties using advanced filters.',
          icon: Search,
          details: [
            'Access exclusive off-market deals',
            'Filter by location, price, and ROI potential',
            'View detailed property analytics',
            'Compare multiple properties side-by-side'
          ],
          timeframe: '1-7 days'
        },
        {
          id: 2,
          title: 'Analyze Investment',
          description: 'Use our built-in tools to evaluate potential returns and cash flow.',
          icon: Calculator,
          details: [
            'Cash flow projections and cap rate analysis',
            'Rental income estimates based on market data',
            'ROI calculations with different scenarios',
            'Market trend analysis and comparable sales'
          ],
          timeframe: '2-3 days'
        },
        {
          id: 3,
          title: 'Secure Financing',
          description: 'Get pre-approved for investment loans with competitive rates.',
          icon: FileText,
          details: [
            'Fast pre-approval process',
            'Multiple loan products available',
            'Competitive rates for investors',
            'Dedicated loan specialist support'
          ],
          timeframe: '3-7 days'
        },
        {
          id: 4,
          title: 'Close & Invest',
          description: 'Complete your purchase and start building wealth through real estate.',
          icon: Key,
          details: [
            'Streamlined closing process',
            'Professional property management options',
            'Ongoing investment performance tracking',
            'Portfolio growth recommendations'
          ],
          timeframe: '15-30 days'
        }
      ]
    },
    {
      id: 'financing',
      label: 'Loan Process',
      steps: [
        {
          id: 1,
          title: 'Application',
          description: 'Complete our simple online application in just minutes.',
          icon: FileText,
          details: [
            'Quick 5-minute online form',
            'Secure document upload',
            'Instant preliminary qualification',
            'No impact on credit score initially'
          ],
          timeframe: '5 minutes'
        },
        {
          id: 2,
          title: 'Documentation',
          description: 'Submit required documents through our secure portal.',
          icon: Shield,
          details: [
            'Bank-level security encryption',
            'Digital document management',
            'Real-time application status updates',
            'Dedicated loan officer assigned'
          ],
          timeframe: '1-3 days'
        },
        {
          id: 3,
          title: 'Underwriting',
          description: 'Our team reviews your application and property details.',
          icon: CheckCircle,
          details: [
            'Comprehensive financial review',
            'Property appraisal coordination',
            'Risk assessment and approval',
            'Transparent communication throughout'
          ],
          timeframe: '7-14 days'
        },
        {
          id: 4,
          title: 'Funding',
          description: 'Receive your loan approval and close on your investment.',
          icon: TrendingUp,
          details: [
            'Final loan terms confirmation',
            'Closing coordination with all parties',
            'Funds disbursement at closing',
            'Ongoing customer support'
          ],
          timeframe: '3-5 days'
        }
      ]
    }
  ];

  const currentProcess = processes.find(p => p.id === activeTab);
  const currentStep = currentProcess?.steps.find(s => s.id === activeStep);


  return (
    <section className="py-20 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
        <div className="flex flex-col align-items items-center gap-7">
            <p className="text-center px-4 py-2 bg-[#FFF0E6] text-[#FF6000] rounded-sm font-medium">
                How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Investment and loan process
            </h2>
        </div>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            From property discovery to closing, we have streamlined the entire process 
            to make real estate investment simple, fast, and profitable.
          </p>
        </div>

        {/* Process Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {processes.map((process) => (
              <button
                key={process.id}
                onClick={() => {
                  setActiveTab(process.id);
                  setActiveStep(1);
                }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === process.id
                    ? 'bg-[#FF6000] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#FF6000] hover:bg-[#FFF0E6]'
                }`}
              >
                {process.label}
              </button>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Steps Navigation */}
          <div className="space-y-4">
            {currentProcess?.steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = step.id === activeStep;
              const isCompleted = step.id < activeStep;
              
              return (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < currentProcess.steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                      isActive
                        ? 'border-[#FF6000] bg-[#FFF0E6] shadow-lg'
                        : isCompleted
                        ? 'border-[#003047] bg-[#FFF0E6]'
                        : 'border-gray-200 bg-white hover:border-[#FFF0E6] hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive
                          ? 'bg-[#FF6000] text-white'
                          : isCompleted
                          ? 'bg-[#003047] text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <IconComponent className="w-6 h-6" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`text-lg font-semibold ${
                            isActive ? 'text-[#542000]' : 'text-gray-900'
                          }`}>
                            Step {step.id}: {step.title}
                          </h3>
                          <span className={`text-sm px-3 py-1 rounded-full ${
                            isActive
                              ? 'bg-[#FFF0E6] text-[#542000]'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {step.timeframe}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            {currentStep && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#FF6000] rounded-full flex items-center justify-center">
                    <currentStep.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentStep.title}
                    </h3>
                    <p className="text-[#FF6000] font-medium">
                      Typical timeframe: {currentStep.timeframe}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {currentStep.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What is included:
                  </h4>
                  {currentStep.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#542000] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href={"/register"}>
                  <button className="w-full bg-[#FF6000] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Get Started with This Step</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  </Link>

                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorksSection;