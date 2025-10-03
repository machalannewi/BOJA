'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Send
} from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement newsletter subscription
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '#0', label: 'Contact' },
    { href: '#1', label: 'Careers' },
    { href: '#2', label: 'Blog' },
  ];

  const serviceLinks = [
    { href: '/properties', label: 'Buy Properties' },
    { href: '/loans', label: 'Get Financing' },
    { href: '#3', label: 'Investment Guide' },
    { href: '#4', label: 'Market Analysis' },
  ];

  const supportLinks = [
    { href: '#5', label: 'Help Center' },
    { href: '/about', label: 'FAQ' },
    { href: '#6', label: 'Documentation' },
    { href: '#7', label: 'Contact Support' },
  ];

  const legalLinks = [
    { href: '#8', label: 'Privacy Policy' },
    { href: '#9', label: 'Terms of Service' },
    { href: '#10', label: 'Cookie Policy' },
    { href: '#11', label: 'Disclaimer' },
  ];

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-40 md:mt-10 font-mulish">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src={"/navbar/basco-real.png"} alt='BBS' width={150} height={150} />
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in real estate investment and financing. 
              We help you find the perfect properties and secure the best loans 
              for your investment goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-[#023e8a]" />
                <span>+234-909 428 2668</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-[#023e8a]" />
                <span>bascobspecialnigltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-[#023e8a]" />
                <span>29, TBS West Pavilion, Lagos Island, Lagos</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#023e8a] transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#023e8a] transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#023e8a] transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest property listings and investment opportunities delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#023e8a] text-white rounded-md hover:bg-[#023e8a] transition-colors duration-200 flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </form>
            
            {isSubscribed && (
              <p className="text-green-400 text-sm mt-2">
                ✓ Successfully subscribed to our newsletter!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Basco B Special. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#023e8a] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-[#023e8a] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;