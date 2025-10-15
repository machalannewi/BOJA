'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

const AccordionSection: React.FC = () => {
  const [open, setOpen] = useState<number>(1);

  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: 'OVERVIEW',
      content: "BASCO B SPECIAL NIGERIA LIMITED is an established lending and real estate investment company focused on providing a diverse range of financial solutions to individuals and businesses in Nigeria with a strong emphasis on tailored, accessible, and reliable services, leveraging a team of experienced financial professionals, the company aims to generate consistent return for investors while simultaneously supporting the growth of local enterprises through flexible real estate and lending options.",
      image: '/accordion/overview.jpg',
      imageAlt: 'Mining Hardware'
    },
    {
      id: 2,
      title: 'MISSION STATEMENT',
      content: 'To give an excellence, prompt and convenient solutions to the financial needs of our dear customers at all time.',
      image: '/accordion/mission.jpg',
      imageAlt: 'mission'
    },
    {
      id: 3,
      title: "VISION STATEMENT",
      content: 'To reach out to all customers who are in need of investing in Real Estate and also getting facility to do businesses including personal loans, and which we also aim to encourage our dear customers to become an enterpreneurs most especially in the Small & Medium Enterprises (SMEs) and Corporate Entity in the society.',
      image: '/accordion/vision.jpg',
      imageAlt: 'Hosting Facilities'
    }
  ];

  const images = [
    '/accordion/overview.jpg',
    '/accordion/mission.jpg',
    '/accordion/vision.jpg'
  ];

  return (
    <section className="bg-blue-50 text-black py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
        Executive Overview
      </h2>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Image Container (Desktop changes dynamically) */}
        <div className="hidden lg:block">
          <Image
            src={images[open - 1]}
            alt="Accordion Image"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Accordion */}
        <div className="space-y-6 w-full">
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-black pb-4">
              {/* Accordion Button */}
              <button
                onClick={() => setOpen(item.id)}
                className="flex justify-between w-full text-left text-xl font-bold"
              >
                {item.title}
                <span
                  className={`transition-transform ${
                    open === item.id ? 'rotate-180' : ''
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* Accordion Content */}
              {open === item.id && (
                <div className="mt-3 text-black">
                  <p>{item.content}</p>
                  
                  {/* Mobile Image */}
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    className="mt-4 rounded-lg shadow-lg lg:hidden"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;