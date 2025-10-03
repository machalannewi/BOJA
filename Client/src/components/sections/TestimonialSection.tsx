"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Michael Chukwudi",
    location: "Lagos",
    text: "I've tried various investment platforms, but none compare to the professionalism and expertise offered here. Their attention to detail and commitment to client satisfaction sets them apart. Highly recommend! ",
    image: "/testimonial/man-with-arms-crossed.jpg",
  },
  {
    name: "Sarah Etim",
    location: "Calabar",
    text: "This platform has been a game changer. The team is professional and their service is top-notch.",
    image: "/testimonial/smiley-african-woman-wearing-traditional-accessories.jpg",
  },
  {
    name: "Dolapo Faleye",
    location: "Ogun",
    text: "I feel safe investing here. Transparent and reliable service with great customer support.",
    image: "/testimonial/portrait-handsome-man-outdoors.jpg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-20 bg-white h-96">
      {/* Left section */}
      <div>
        <span className="bg-[#caf0f8] text-[#023e8a] px-4 py-1 rounded-md font-medium">
          Investors trust us
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
          Trusted by Over <br /> 3000+ Investors
        </h2>

        {/* Dots indicator */}
        <div className="flex space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-8 h-2 rounded-full ${
                index === i ? "bg-[#023e8a]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right section */}
      <div className="max-w-xl mt-10 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="text-[#023e8a] text-4xl">“</span>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              {testimonials[index].text}
            </p>
            <div className="flex items-center mt-6">
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={150}
                height={150}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[index].location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Floating "Back to Top" Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#023e8a] hover:bg-[#0353a4] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-50"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

    </div>
  );
}
