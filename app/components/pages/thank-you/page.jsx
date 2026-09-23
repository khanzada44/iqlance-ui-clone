import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from "next/link";

export default function ThankYouPageRed() {
 return (
    <div className="relative w-full min-h-screen bg-[#FDF8F8] overflow-hidden flex flex-col items-center justify-center font-sans py-12 px-4">
      {/* Top Left Background Shape */}
      <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 md:-top-40 md:-left-40 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-red-600 transform rotate-45 pointer-events-none opacity-90 transition-all" />

      {/* Bottom Right Background Shape */}
      <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 md:-bottom-40 md:-right-40 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-red-600 transform rotate-45 pointer-events-none transition-all" />

      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full mx-auto">
        {/* Success Icon */}
        <div className="mb-4 sm:mb-6 text-red-600">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 fill-red-600 text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          Thank you!
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base mb-8 sm:mb-10 max-w-lg leading-relaxed px-2 thank-p">
          We've sent your free report to your inbox so it's easy to access. You can find more information on our website.
        </p>

        {/* Action Card */}
        <div className="w-full max-w-md sm:max-w-xl">
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center border border-red-100">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-5 sm:mb-6">
              Visit Our Website
            </h3>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-red-700 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-all shadow-md active:scale-95 text-sm sm:text-base"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>
 )
}