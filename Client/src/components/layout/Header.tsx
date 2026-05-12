"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/loans", label: "Loans" },
    { href: "/about", label: "About" },
    { href: "/investments", label: "Investment" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-mulish">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/navbar/basco-main.png"}
                alt="BBS"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 border border-gray-300 rounded-full h-11 px-6">
            {navigationLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "flex items-center text-sm font-medium transition-colors duration-200"
                  }
                >
                  <Button
                    className={`hover:bg-[#023e8a] cursor-pointer text-black bg-white hover:text-white ${
                      pathname === link.href
                        ? "bg-[#023e8a] border-2 rounded-full border-[#023e8a] text-white"
                        : "rounded-full"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium transition-colors duration-200"
            >
              <Button className="bg-[#023e8a]">Sign In</Button>
            </Link>

            <Link
              href="/register"
              className="text-sm font-medium transition-colors duration-200"
            >
              <Button className="bg-[#023e8a]">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#023e8a] p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-[#023e8a] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              {/* Mobile Auth Links */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-[#023e8a] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="block bg-[#023e8a] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#023e8a] transition-colors duration-200 mt-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
