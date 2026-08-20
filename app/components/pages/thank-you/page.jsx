import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from "next/link";

export default function ThankYouPageRed() {
  return (
    <div className="relative w-full h-screen bg-[#FDF8F8] overflow-hidden flex flex-col items-center justify-center font-sans">

      {/* Top-Left Diagonal Red Accent Shape */}
      <div className="absolute -top-40 -left-40 w-145 h-150 bg-red-600 transform rotate-45 pointer-events-none opacity-90" />

      {/* Bottom-Right Diagonal Darker Red/Maroon Shape */}
      <div className="absolute -bottom-40 -right-40 w-150 h-150 bg-red-600 transform rotate-45 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">

        {/* Checkmark Icon */}
        <div className="mb-6 text-red-600">
          <CheckCircle className="w-16 h-16 fill-red-600 text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Thank you!
        </h1>

        {/* Subtitle */}
        <p className="text-black text-sm md:text-base mb-10 max-w-lg leading-relaxed">
          We've sent your free report to your inbox so it's easy to access. You can find more information on our website.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full max-w-xl">

          {/* Card 2: Visit Our Website */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center justify-center border border-red-50">
            <h3 className="font-bold text-black text-lg mb-6">Visit Our Website</h3>
            <Link
              href="/"
              className="bg-red-700 hover:bg-red-600 text-white font-medium px-6 py-2.5  transition shadow-sm"
            >
              Visit Website
              
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}