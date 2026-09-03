"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { testimonialsData, testimonials2Data } from "../testimonials/data";
import Link from "next/link";
import Image from "next/image";
import { stats, partners, faqsData } from "../../../../utils/data";
export default function testimonials() {
  const [open, setOpen] = useState(-1);
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <div className="mt-10">
          <img
            src="/images/client-header.jpg"
            alt=""
          />
        </div>
        <section className="py-16 md:py-24 bg-white mt-4">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center leading-tight">
              <span className="text-red-600">Words of Praise</span>{" "}
              <span className="text-red-700">From All The Hard Work</span>
            </h2>
            <p className="max-w-6xl mx-auto mt-8 text-center text-gray-800 text-base sm:text-lg leading-8">
              Few words as the reward of our unique product development process
              and services given by our valuable clients. Team Devapp solutions
              feel pride and appreciated when given reviews and rates as per
              their hardwork.
            </p>
            <p className="max-w-6xl mx-auto mt-8 text-center text-gray-800 text-base sm:text-lg leading-8">
              Devapp solution has always believed that every emerging is the
              client is not only a solution seeker but is our inspiration to
              face challenges and find an amazing solution that can take the
              purpose of development to the next elevating step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              {/* Inquiry Now Link */}
              <Link
                href="/contact"
                className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-4  transition flex items-center justify-center gap-3"
              >
                Inquiry Now
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              {/* See Our Work Link */}
              <Link
                href="/portfolio"
                className="group w-full sm:w-auto border border-red-200 hover:border-red-800 text-black font-semibold px-8 py-4  transition flex items-center justify-center gap-3"
              >
                See Our Work
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
            <h3 className="mt-20 text-3xl md:text-5xl font-bold text-center text-black leading-tight">
              Offshore Web, Mobile & Software Development Company
            </h3>

            <p className="max-w-6xl mx-auto mt-1 text-center text-gray-700 text-base sm:text-lg leading-8">
              Devapp solutions is a leading Software, Web, & Mobile App
              Development Company with a vast area of experience in crafting
              stunning and end-to-end encrypted technology solutions. We offer
              excellent expertise of the industry followed by an exactly planned
              approach to elevate your growth.
            </p>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
              {stats.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative min-h-55 rounded-3xl border border-[#E7E7E7] bg-white px-6 pt-20 pb-8"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-20 h-20 rounded-[20px] border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt="stat icon"
                        className="w-10 h-10 text-[#4B5563]"
                      />
                    </div>

                    <h3 className="text-[40px] font-bold text-[#3B3F4A] leading-none">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-lg leading-[1.6] text-black">
                      {item.line1}
                      <br />
                      {item.line2}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                What Client Say About Us?
              </h2>

              <p className="max-w-5xl mx-auto mt-6 text-lg text-gray-700 leading-9">
                It Provides Immense Satisfaction In Knowing That, We Did Our Job
                To The Highest Level Of Standards. We Like Even More When Our
                Client Takes Time To Acknowledge Their Satisfaction.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 p-6 hover:shadow-lg transition duration-300 bg-white"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>

                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#F59E0B"
                            stroke="#F59E0B"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700 text-sm leading-6">
                    {item.review}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs text-gray-500 mb-2">Verified by</p>

                    <img
                      src={item.verifiedLogo}
                      alt={item.source}
                      className="h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Ready to Get Started?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-400 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>info@DevAppGrid.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className=" transition-colors"
                  >
                    +1 866 978 8570
                  </a>
                  <span>,</span>
                  <span> </span>
                  <a
                    href="tel:+16476379108"
                    className=" transition-colors"
                  >
                      
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Let’s Talk
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials2Data.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 p-6 hover:shadow-lg transition duration-300 bg-white"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>

                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#F59E0B"
                            stroke="#F59E0B"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700 text-sm leading-6">
                    {item.review}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs text-gray-500 mb-2">Verified by</p>

                    <img
                      src={item.verifiedLogo}
                      alt={item.source}
                      className="h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
               <section className="w-full bg-red-50 py-16 px-6 font-sans mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain w-auto h-auto"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Ready to Get Started?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-400 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#1B4B82] transition-colors"
                >
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>info@DevAppGrid.com</span>
                </a>

                <span className="text-gray-500 font-normal">or</span>

                {/* Phone links */}
                <div className="inline-flex items-center gap-1.5 flex-wrap justify-center">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  <span>US :</span>
                  <a
                    href="tel:+14697939837"
                    className=" transition-colors"
                  >
                    +1 866 978 8570
                  </a>
                  <span>,</span>
                  <span> </span>
                  <a
                    href="tel:+16476379108"
                    className=" transition-colors"
                  >
                      
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Let’s Talk
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="w-full px-5">
            <h2 className="text-4xl font-bold text-center">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-center text-[17px] text-gray-600 w-full mx-auto">
              Find answers to common questions about our app and software
              development services and learn how we can help turn your idea into
              a successful digital product.
            </p>

            <div className="mt-12 space-y-4">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex justify-between items-center px-5 py-5 text-left"
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    {open === index ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </button>

                  {open === index && (
                    <div className="px-5 pb-5 text-[16px] leading-8 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-4xl font-bold">
                Have Something in Mind? Let's Talk
              </h3>

              <p className="mt-6 w-full mx-auto text-[17px] leading-8 text-gray-600">
                Have a look at the services and development process of the
                Devapp solution. See what process we follow for mobile app and
                software development. Have a look at how we are praised by our
                clients. Start a conversation to innovate your next great idea
                into reality with us.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-10">
          <ContactForm />
        </div>
      </div>
      <section className="mb-5 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...partners, ...partners].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-35 h-17.5 sm:w-42.5 sm:h-20 md:w-55 md:h-23.75 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-3 shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
