"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { processSteps } from "../our-process/data";
import ContactForm from "../../contactForm/ContactForm";
import { stats, partners, faqsData } from "../../../../utils/data";

export default function ourProcess() {
  const [open, setOpen] = useState(-1);
  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <div className="mt-10">
          <img
            src="/images/our-process-header.png"
            alt=""
          />
        </div>
        <section className="py-16 bg-white text-center">
          <div className="max-w-6xl mx-auto px-4">
            {/* Top Subtitle */}
            <p className="text-gray-700 text-sm md:text-base font-normal tracking-wide">
              Process-driven Methodology, Result-driven Solutions
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mt-2 mb-6">
              Our Process
            </h2>

            {/* Description Paragraph */}
            <p className="max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed mb-8">
              We at iQlance Solution as a renowned app and software development
              agency follow Process-Driven Methodology, Result-Driven Solutions. To
              acquire expected and desired results it is necessary to follow a
              strict and Simplified process. We ensure our client's 100%
              satisfaction in the development of mobile and software applications.
              To gain our results we are committed to following vigorous methods.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white font-semibold text-sm px-6 py-3 transition-colors flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              {/* See Our Work Button */}
              <Link
                href="/portfolio"
                className="group w-full sm:w-auto border border-gray-200 hover:border-red-600 bg-white text-gray-900 font-semibold text-sm px-6 py-3 transition-all flex items-center justify-center gap-2"
              >
                <span>See Our Work</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>

            {/* Bottom Section */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
                Offshore Web, Mobile & Software Development Company
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                iQlance solutions is a leading Software, Web, & Mobile App
                Development Company with a vast area of experience in crafting
                stunning and end to end encrypted technology solutions. We offer
                excellent expertise of the industry followed by an exactly planned
                approach to elevate your growth.
              </p>
            </div>
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
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
                  What makes our development process stand out of the box?
                </h2>

                <p className="mt-8 text-gray-700 text-base md:text-lg leading-8">
                  iQlancers are inventors of great ideas. To make your idea a
                  reality we are devoted to the creation of the product that
                  follows the favorable and easy to understand method which
                  includes all the aspects of app development without hindering
                  anyone's feeling. We are highly dedicated to the transparent
                  app development process.
                </p>

                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition bg-red-700 hover:bg-red-600 mt-10"
                >
                  Explore Our Process
                  <ArrowRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>

              </div>

              {/* Right Image */}
              <div>
                <img
                  src="/images/our-process-right.jpg"
                  alt="Development Process"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              We Start Here
            </h2>

            <p className="text-center text-gray-600 max-w-4xl mx-auto mt-4">
              Before we convert your great idea into an amazing product, we make
              sure to follow and outline standard process and plan.
            </p>

            <div className="mt-16 space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Card */}
                  <div
                    className={`w-full lg:w-[82%]
                ${index % 2 === 0 ? "mr-auto" : "ml-auto"}
                rounded-xl p-8 lg:p-10`}
                    style={{ background: step.bg }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[70px_90px_1fr_70px] gap-6 items-center">
                      {/* Left Icon */}
                      <div className="flex justify-center">
                        <img
                          src={step.icon}
                          alt=""
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      {/* Number */}
                      <div className="text-center">
                        <h2 className="text-5xl lg:text-6xl font-light">
                          {step.number}
                        </h2>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-gray-700 leading-7">
                          {step.description}
                        </p>
                      </div>
                                        {index !== processSteps.length - 1 && (
                    <img
                      src={step.arrow}
                      alt=""
                      className={`
                    hidden lg:block
                    absolute
                    h-24
                    ${index % 2 === 0
                          ? "right-4 -bottom-14"
                          : "left-4 -bottom-14"
                        }
                  `}
                    />
                  )}
                    </div>
                  </div>

                  {/* Arrow */}

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
                  href="mailto:info@iqlance.com"
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
                  <span>info@iqlance.com</span>
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
                iQlance solution. See what process we follow for mobile app and
                software development. Have a look at how we are praised by our
                clients. Start a conversation to innovate your next great idea
                into reality with us.
              </p>
            </div>
          </div>
        </section>



        <div className="mt-2 pt-2">
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
