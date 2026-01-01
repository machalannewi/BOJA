'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, ExternalLink, Award, TrendingUp, Users, Building2, MailIcon } from 'lucide-react';

interface BoardMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const BoardOfDirectorsSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: 'Mr Bassey Ibiang Enang',
      position: 'Chairman / Board of Directors',
      bio: 'Mr Bassey Ibiang Enang BSc. MBA is the founding chairman of Basco B Special Nig Ltd. He is a business man and an entrepreneur who has gotten years of experience in the business world system, he have worked with other organizations, build potential team members for huge success stories. He have done many trainings in Business Etiquette, Customer Relation Management (CRM ) and leadership including Credits Management in Nigeria. He is from Cross Rivers state of Nigeria , married with family , with all that , able to manage his work flow with family lives, he is open to new businesses and ideas which have given him momentum in business, working with people have given him an open opportunity to innovation of the 21st Century businesses and hoping to do more for every opportunity giving to him , he is lovely and calm value oriented person.',
      avatar: '/board/chairman.jpg',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        email: 'ibangbassey@gmail.com'
      }
    },
    {
      id: 2,
      name: 'Mark S. Udoaka',
      position: 'CEO / Managing Director',
      bio: 'Mark S Udoaka BSc , MBA, LLB , PMP,  RMMPLR. is a founding chairman of the Leadership & business Management Training Institute. (EBM) Executive Business Management Program. He is a seminar leader who have conducted seminars/ workshops with others professionals including KRC , Smart Adversary , Chartered institute of management and ICAN of Nigeria on credit Management , business management and leadership for 10 years , Author of many books including Maskas nuggets etc. A widely known motivational speaker who have conducted over 140 workshops in Nigeria and outside Nigeria. Now he is the CEO of Basco B Special Nig Ltd with 5 years experience on project management and constructions , he is also begin his distinguished career in business law , he have written many articles on business journals etc. his Focus is in putting the best expertise of the world leading businesses - FoUcS = Best Practices...',
      avatar: '/board/ceo-managing-director.jpg',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        email: 'marksunday800@gmail.com'
      }
    },
    {
      id: 3,
      name: 'Owoshagba Oladeji Moses ACA',
      position: 'Chief Financial Officer',
      bio: 'He is an experienced Chartered Accountant with years of experience in private sectors, banking industries and over 10 years of experience in the hospitality industry. He is also an associate member of the institue of Chartered Accountant of Nigeria (ICAN) and associate student of Chartered institution of Management Accountant (CIMA). Today, he is the (CFO) Chief Financial Officer of Basco B Special Nig Ltd.',
      avatar: '/board/financial-officer.jpg',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        email: ''
      }
    },
    {
      id: 4,
      name: 'Mr Etteh Stephen',
      position: 'Head of Legal Department',
      bio: 'He is the founder and managing partner of Etteh Stephen & Co. . He has over 11 years experience and been acknowledge as an acclaimed litigator and legal practitioner with expertise caring the entire garmut of commercial & corporate practice areas. He has worked and advised a wide range of companies with areas of commercial corporate law practice ranging from financial projects, real estate management and property investment as the supervisor legal department of resort saving loans PLC with sterling achievements. He has also served in that capacity of company for years as an in-house counsel where facilated the National Housing Fund (NHF) scheme for prospective subscribers  of federal mortgage bank  of Nigeria with giant achievements for several years which led to so many (NHF) subscribers becoming home owners with barest minimum of an interest rate from federal mortgage bank. He is a through bred legal practitioner corporate',
      avatar: '/board/head-of-legal-dept.jpg',
      socialLinks: {
        linkedin: '#',
        email: ''
      }
    },
    {
      id: 5,
      name: 'Pastor Ben Ekpe Mbang',
      position: 'Associate Partner',
      bio: 'He abtained his first Diploma Certificate at Eastern Bible College Oguja , Cross Rivers State of Nigeria. Now he is  pastor and he served in Rivers State of Nigeria .. Traveling everywhere with his  ministerial works .. then he later proceed with his educational career where he study marketing with an international school and obtained certificate in marketing. Today he have build hugh potential in different businesses in Nigeria and out of Nigeria . Worked with different organizations . 5 years experience in Real Estate Agency and Marketing. 10 years  experience in Poultry and live Stocks marketing. He is honest and integrity, also passionate in business especially real estate business . Today he is an Associate Partner with Basco B Special Nig Ltd. For More information contact...',
      avatar: '/board/associate-partner-main.jpg', 
      socialLinks: {
        linkedin: '#',
        email: ''
      }
    },
    {
      id: 6,
      name: 'Olanrewaju Taofik Azeez',
      position: 'Project Team Member',
      bio: 'He is a certified and experienced manager in project management and team leadership for the past 8 years. he is worked with different real estate  companies across the globe and still willing to work with more professional for the growth of our company Basco B Special Nig Ltd..',
      avatar: '/board/azeez.jpg', 
      socialLinks: {
        linkedin: '#',
        email: ''
      }
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
          <div className="inline-block bg-[#caf0f8] text-[#023e8a] px-4 py-2 rounded-lg text-sm font-medium mb-4">
            Leadership Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Management Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide Basco B Special Nigeria Limited&apos;s vision and ensure 
            our continued success in delivering exceptional Loan and Real estate Investment opportunities.
          </p>
        </div>


        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group ${
                selectedMember === member.id ? 'ring-2 ring-[#023e8a]' : ''
              }`}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              {/* Member Photo */}
              <div className="relative h-88 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
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
                <p className="text-[#023e8a] font-semibold mb-2">
                  {member.position}
                </p>

                <button className="text-[#023e8a] text-sm font-medium flex items-center hover:text-[#023e8a] transition-colors duration-200">
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
                </div>
              )}

              {selectedMember === member.id && (member.id === 1 || member.id === 2) && (
                <div className='text-center mb-10 flex justify-center gap-2'>
                  <div className='flex justify-center items-center'>
                  <p>Email</p>
                    <Mail className='h-5'/> 
                  </div>
                    <a
                     className='text-blue-500'
                     href={`mailto:${member.socialLinks.email}`}>{member.socialLinks.email}</a>
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