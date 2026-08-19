"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
// import { faqsData } from "../faqs/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { stats, partners ,faqsData } from "../../../../utils/data";
import Link from "next/link";
import Image from "next/image";

export default function faqs() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <div className="mt-4">
          <img
            src="/images/faqs-header-photo.jpg"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>

        <section className="py-10">
          <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-red-700 leading-tight">
            FAQs
          </h1>
          <p className="flex items-center justify-center text-xl font-bold text-black leading-tight mt-1">
            Got questions?
          </p>
          <p className="flex items-center justify-center text-xl font-bold text-black leading-tight">
            We have got answers!
          </p>
          <p className="flex items-center justify-center text-center text-black text-[18px] mt-2">
            At Devapp Solutions, no two mobile initiatives get the same cookie-cutter treatment.
            We're driven by ideas, and our job is turning yours into an application built exclusively
            for your business. That process starts the moment we clear up any confusion or doubts you
            have about app development.

          </p>
          <p className="flex items-center justify-center text-center text-black  text-[18px] mt-5">
            Your questions matter to us just as much as your ideas do. We're here to consult,
            answer, and guide you through anything
            related to app and software development. Get in touch today,
            and let's collaborate on making your success the next big step forward.{" "}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 bg-red-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
            >
              Contact Us
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 bg-[#eef0f2] px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-200"
            >
              See Our Work
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </section>

        <section className="bg-white">
          <div className="w-full px-5">
            {/* Heading */}
            <h2 className="text-center text-[32px] md:text-[40px] font-bold text-black">
              A Trusted Offshore Partner for Web, Mobile & Software Development
            </h2>

            {/* Description */}
            <p className="mt-6 text-center text-[18px] leading-8 text-black">
              Devapp Solutions has built a name for itself as a leading software, web,
              and mobile app development company, with deep experience crafting technology
              solutions that are as secure as they are impressive, backed by end-to-end encryption
              from the ground up. We bring genuine industry expertise
              together with a carefully planned approach, all built to elevate your business growth.
            </p>

            {/* Cards */}
            <section>
              <div className="flex flex-wrap justify-center gap-7 mt-24 mb-10">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-full sm:w-70 lg:w-35 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-10 pb-6"
                  >
                    {/* Floating Icon */}
                    <div className="absolute -top-8 right-0 w-15.5 h-15.5 rounded-2xl border border-[#E7E7E7] bg-white flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-11 h-11 object-contain"
                      />
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-black leading-none">
                        {item.value}
                      </h3>

                      <p className="text-sm leading-tight text-black">
                        {item.line1}
                        <br />
                        {item.line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Heading */}
            <div className="mt-12 mb-4 text-center">
              <h2 className="text-[32px] md:text-[42px] font-bold text-black">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-[18px] leading-8 text-[#444]">
                Have Questions related to our app developers Canada or about the
                cost of development? Here are Answers to some common questions
                rising in your mind!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="w-full px-4">
            <div className="space-y-3">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex items-center justify-between px-5 py-5 text-left"
                  >
                    <span className="text-[18px] font-medium text-black">
                      {faq.question}
                    </span>

                    {open === index ? (
                      <ChevronUp className="w-5 h-5 text-red-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-600" />
                    )}
                  </button>

                  {open === index && (
                    <div className="px-5 pb-5 text-[17px] leading-8 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
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
              Let's Bring Your Idea to Life. Talk to Our Technical Experts Today.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Send your requirements to:
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-400 py-4 px-6 mb-8 shadow-xs">
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
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className=" transition-colors"
                  >
                    +1 647 637 9108
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
                Let’s Discuss
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-4 bg-white">
          <div className="w-full px-5 text-center">
            <h2 className="text-3xl md:text-[44px] font-bold text-black">
              Curious How We Work? Take a Look Inside.
            </h2>

            <p className="mt-2 text-[18px] leading-8 text-[#333]">
              Take a look at what Devapp Solutions brings to the table: our services,
              our step-by-step development process for mobile apps and software,
              and what clients have to say after working with us. When you're ready,
              let's start a conversation and build your next great idea into something real.
            </p>
          </div>
        </section>

        <div className="mb-3.5">
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
