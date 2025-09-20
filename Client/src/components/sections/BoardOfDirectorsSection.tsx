'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, ExternalLink, Award, TrendingUp, Users, Building2 } from 'lucide-react';

interface BoardMember {
  id: number;
  name: string;
  position: string;
  experience: string;
  bio: string;
  avatar: string;
  achievements: string[];
  specialties: string[];
  education: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  yearsExperience: number;
  previousRoles: string[];
}

const BoardOfDirectorsSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: 'Robert Mitchell',
      position: 'Chairman & CEO',
      experience: '25+ Years in Real Estate',
      bio: 'Robert brings over 25 years of real estate investment experience, having built and managed portfolios worth over $2 billion. His strategic vision has positioned RealEstate Pro as the leading investment platform in Texas.',
      avatar: '/board/eoun.jpg',
      achievements: [
        'Built $2B+ real estate portfolio',
        'Featured in Forbes Real Estate Council',
        'Winner of Real Estate Investor of the Year 2022'
      ],
      specialties: ['Commercial Real Estate', 'Portfolio Management', 'Strategic Planning'],
      education: ['MBA - Harvard Business School', 'BS Real Estate - University of Texas'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/robertmitchell',
        twitter: 'https://twitter.com/rmitchell',
        email: 'robert@realestatepro.com'
      },
      yearsExperience: 25,
      previousRoles: ['CEO - Mitchell Properties', 'VP - Blackstone Real Estate']
    },
    {
      id: 2,
      name: 'Maria Santos',
      position: 'Chief Financial Officer',
      experience: '20+ Years in Finance',
      bio: 'Maria oversees all financial operations and risk management. Her expertise in structured finance and investment analysis has been instrumental in maintaining our 98% loan approval success rate.',
      avatar: '/board/joe parys.jpg',
      achievements: [
        'CPA with specialization in real estate',
        'Managed $1.5B in real estate transactions',
        'Built proprietary risk assessment models'
      ],
      specialties: ['Financial Analysis', 'Risk Management', 'Investment Structuring'],
      education: ['CPA - Certified Public Accountant', 'MS Finance - Rice University'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/mariasantos',
        email: 'maria@realestatepro.com'
      },
      yearsExperience: 20,
      previousRoles: ['CFO - Santos Capital', 'Director - Goldman Sachs Real Estate']
    },
    {
      id: 3,
      name: 'Dr. James Wilson',
      position: 'Chief Technology Officer',
      experience: '15+ Years in FinTech',
      bio: 'Dr. Wilson leads our technology innovation, developing cutting-edge platforms for property analysis and investment management. His AI-driven solutions have revolutionized how investors discover opportunities.',
      avatar: '/board/tyrell.jpg',
      achievements: [
        'PhD in Computer Science - MIT',
        '12 patents in financial technology',
        'Built platforms processing $10B+ annually'
      ],
      specialties: ['Artificial Intelligence', 'Financial Technology', 'Data Analytics'],
      education: ['PhD Computer Science - MIT', 'MS Software Engineering - Stanford'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/drjameswilson',
        twitter: 'https://twitter.com/drjwilson',
        email: 'james@realestatepro.com'
      },
      yearsExperience: 15,
      previousRoles: ['CTO - Wilson Technologies', 'Senior Engineer - Google']
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      position: 'Chief Operating Officer',
      experience: '18+ Years in Operations',
      bio: 'Sarah ensures operational excellence across all platforms. Her systematic approach to process optimization has enabled us to scale efficiently while maintaining the highest service standards.',
      avatar: '/board/wylder.jpg',
      achievements: [
        'Scaled operations from 1K to 50K+ users',
        'Implemented ISO 9001 quality standards',
        'Reduced operational costs by 35%'
      ],
      specialties: ['Operations Management', 'Process Optimization', 'Quality Assurance'],
      education: ['MBA Operations Management - Wharton', 'BS Industrial Engineering - Texas A&M'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahthompson',
        email: 'sarah@realestatepro.com'
      },
      yearsExperience: 18,
      previousRoles: ['COO - Thompson Ventures', 'Operations Director - Amazon']
    },
    {
      id: 5,
      name: 'Michael Rodriguez',
      position: 'Head of Investment Relations',
      experience: '22+ Years in Investments',
      bio: 'Michael manages relationships with institutional investors and high-net-worth individuals. His deep market knowledge and client-first approach have resulted in over $3 billion in successful placements.',
      avatar: '/board/eoun.jpg',
      achievements: [
        '$3B+ in successful investment placements',
        'Built relationships with 500+ institutional investors',
        'Consistently achieved 15%+ annual returns'
      ],
      specialties: ['Investor Relations', 'Capital Markets', 'Wealth Management'],
      education: ['MBA Finance - University of Chicago', 'BS Economics - UT Austin'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        twitter: 'https://twitter.com/mrodriguez',
        email: 'michael@realestatepro.com'
      },
      yearsExperience: 22,
      previousRoles: ['Managing Director - Rodriguez Capital', 'VP - Morgan Stanley']
    },
    {
      id: 6,
      name: 'Lisa Chen',
      position: 'Chief Marketing Officer',
      experience: '16+ Years in Marketing',
      bio: 'Lisa drives brand strategy and customer acquisition. Her innovative marketing campaigns have increased our user base by 400% and established RealEstate Pro as the most trusted brand in real estate investment.',
      avatar: '/board/joe parys.jpg',
      achievements: [
        'Grew user base by 400% in 3 years',
        'Winner of Marketing Excellence Award 2023',
        'Built brand valued at $100M+'
      ],
      specialties: ['Brand Strategy', 'Digital Marketing', 'Customer Acquisition'],
      education: ['MBA Marketing - Kellogg', 'BA Communications - UCLA'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/lisachen',
        twitter: 'https://twitter.com/lchen',
        email: 'lisa@realestatepro.com'
      },
      yearsExperience: 16,
      previousRoles: ['CMO - Chen Marketing Group', 'Director - Facebook']
    }
  ];

  const companyStats = [
    { icon: TrendingUp, value: '$2.5B+', label: 'Assets Under Management' },
    { icon: Users, value: '50K+', label: 'Active Investors' },
    { icon: Building2, value: '10K+', label: 'Properties Managed' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFF0E6] text-[#FF6000] px-4 py-2 rounded-lg text-sm font-medium mb-4">
            Leadership Team
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Board of Directors
          </h2>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide RealEstate Pro vision and ensure 
            our continued success in delivering exceptional investment opportunities.
          </p>
        </div>


        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group ${
                selectedMember === member.id ? 'ring-2 ring-[#FF6000]' : ''
              }`}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              {/* Member Photo */}
              <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/api/placeholder/400/400';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-blue-400 hover:bg-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a
                      href={`mailto:${member.socialLinks.email}`}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FF6000] font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.experience}
                </p>
                
                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.slice(0, 2).map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                  {member.specialties.length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{member.specialties.length - 2}
                    </span>
                  )}
                </div>

                <button className="text-[#FF6000] text-sm font-medium flex items-center hover:text-orange-600 transition-colors duration-200">
                  {selectedMember === member.id ? 'Show Less' : 'Learn More'}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Expanded Details */}
              {selectedMember === member.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <p className="text-gray-700 mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#FF6000] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                      <ul className="space-y-1">
                        {member.education.map((edu, index) => (
                          <li key={index} className="text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BoardOfDirectorsSection;