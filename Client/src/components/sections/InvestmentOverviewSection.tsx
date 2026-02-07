"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Building2,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const InvestmentOverviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "breakdown" | "roi">(
    "overview",
  );

  const financialData = {
    liabilities: [
      { item: "Agency Fees", amount: 1000000 },
      { item: "Legal Fee", amount: 1000000 },
      { item: "Advertisement Payable", amount: 1000000 },
      { item: "Staff Salary Payable", amount: 10380000 },
      { item: "Operating Expenses", amount: 500000 },
      { item: "Miscellaneous Expenses", amount: 1000000 },
      { item: "Depreciation", amount: 1120000 },
      { item: "Owners' Equity", amount: 19120000 },
    ],
    assets: [
      { item: "Cash in hand", amount: 1000000 },
      { item: "Cash in hand", amount: 19120000 },
      { item: "Furniture And Fittings", amount: 2000000 },
      { item: "Office equipment", amount: 2000000 },
      { item: "Generator", amount: 5000000 },
      { item: "Motor Vehicle", amount: 4000000 },
      { item: "Rent prepaid", amount: 5000000 },
    ],
    totalLiabilities: 32120000,
    totalAssets: 32120000,
  };

  const equipmentCosts = [
    { item: "Rent - Agency", amount: 5000000, note: "@10% × 2years" },
    { item: "Rent - Legal", amount: 1000000, note: "@10% × 2years" },
    {
      item: "Fixing",
      amount: 2000000,
      note: "Partitions, Tables and Chairs Etc.",
    },
    {
      item: "Equipment",
      amount: 2000000,
      note: "Air Conditions, Photocopy and Laptops Etc.",
    },
    {
      item: "Materials",
      amount: 500000,
      note: "Files, and Other Working Materials Etc.",
    },
    { item: "Power", amount: 3000000, note: "20kva generator - used one" },
    { item: "Mobility", amount: 4000000, note: "USED MINI BUS" },
    {
      item: "Promotions",
      amount: 1000000,
      note: "Promotions and Advertisement",
    },
    {
      item: "Miscellaneous",
      amount: 1000000,
      note: "Miscellaneous for 6 months",
    },
    {
      item: "Working Capital",
      amount: 1000000,
      note: "Working Capital for 6 Months",
    },
  ];

  const staffPayroll = [
    { position: "CEO/Managing Director", salary: 300000 },
    { position: "Director of Operation", salary: 250000 },
    { position: "Executive Director", salary: 250000 },
    { position: "Operational Manager", salary: 150000 },
    { position: "Office Manager/HR", salary: 140000 },
    { position: "Account / Admin", salary: 140000 },
    { position: "Marketing / Sales Manager", salary: 140000 },
    { position: "3 Operational Teams 100,000 × 3", salary: 300000 },
    { position: "Cleaner", salary: 60000 },
  ];

  const totalMonthlyPayroll = staffPayroll.reduce(
    (sum, item) => sum + item.salary,
    0,
  );
  const totalPayrollCost = totalMonthlyPayroll * 6;

  const formatCurrency = (amount: number): string => {
    return `₦${amount.toLocaleString("en-NG")}`;
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
            Join us in expanding our operations with a comprehensive investment
            opportunity offering attractive returns
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-[#023e8a]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">₦6B</div>
            <div className="text-gray-600 text-sm">Capitalization</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-[#023e8a]" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15%</div>
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
            <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
            <div className="text-gray-600 text-sm">Staff Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOverviewSection;
