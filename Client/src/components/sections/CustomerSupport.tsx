import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const CustomerSupport: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-24 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            width={150}
            height={250}
            src="/support/support.jpg"
            alt="Customer Support"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            365 Days Customer Support
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our dedicated support team is always available to assist you.
            Whether you have a question, need help with your account, or want
            to learn more about our services, we’re just a message away.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
                <Mail />
              Email: info@bascobspecialnigltd@gmail.com
            </li>
            <li className="flex items-center gap-2">
                <Phone />
              Phone: +234-909 428 2668
            </li>
          </ul>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
