"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowLeft, Mail, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen text-gray-800 font-sans flex flex-col justify-between">

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8">
          
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
            

            <div className="p-6 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Success Content */}
                <div className="md:col-span-7 space-y-5 text-center md:text-left">
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-2">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                      Thank You!
                    </h1>
                    <p className="text-lg font-semibold text-red-600">
                      We have received your project inquiry.
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our technical lead is currently reviewing your details. We will evaluate your project requirements and prepare an actionable scope & roadmap for our discovery call.
                  </p>

                  {/* Trust Highlights */}
                  <div className="pt-2 grid grid-cols-2 gap-3 text-left">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                      {/* <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" /> */}
                      <span>100% Confidential (NDA)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                      {/* <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" /> */}
                      <span>Free Technical Consultation</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href="/"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md shadow-red-600/20 active:scale-95 text-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Return to Home
                    </Link>
                  </div>

                </div>

                {/* Right Side: Quick Contact Sidebar */}
                <div className="md:col-span-5  p-6  space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Directly reach out to our strategy experts.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <a 
                      href="mailto:info@devappgrid.com" 
                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200/60 hover:border-red-300 transition-colors group"
                    >
                     <div
                    className="h-6 w-6 shrink-0 bg-red-600"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  />
                      <div className="overflow-hidden">
                        <p className="text-xs font-medium text-gray-500">Email Us</p>
                        <p className="font-semibold text-gray-800 text-xs sm:text-sm truncate">
                          info@devappgrid.com
                        </p>
                      </div>
                    </a>

                    <a 
                      href="tel:+18669788570" 
                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200/60 hover:border-red-300 transition-colors group"
                    >
                      <div
                    className="h-6 w-6 shrink-0 bg-red-600"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  />
                      <div>
                        <p className="text-xs font-medium text-gray-500">Call Us (US)</p>
                        <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                          +1 (866) 978-8570
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pt-2 text-center border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Want to check our previous builds?
                    </p>
                    <Link 
                      href="/portfolio" 
                      className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 mt-1"
                    >
                      <span>Explore Our Work</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}