"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <div className="max-w-6xl mx-auto px-4 py-8 font-sans lg:w-1/2">
            <p className="text-black text-lg font-medium mb-1">
              Let's turn your ideas into digital products
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-3">
              Leading Mobile App and <br />
              <span className="text-blue-500">Software Development</span>{" "}
              Company
            </h1>
            <p className="text-black text-base sm:text-lg">
              As a top software and mobile app development company in Canada and
              the USA, we build solutions that help optimize your business
              processes.
            </p>

            <p className="text-black text-base sm:text-lg mt-4">
              From startups to enterprises, we have delivered more than 1,500
              projects across the globe giving us deep insight into the
              complexities that arise and deliver results that meet your
              expectations.
            </p>
            <div>
              <div className="flex items-start gap-2 pt-4 md:pt-6">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1" />
                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Industry Specific Dedicated Developers
                </p>
              </div>

              <div className="flex items-start gap-2 pt-4 md:pt-6">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1" />
                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Customized App with Affordable Price
                </p>
              </div>

              <div className="flex items-start gap-2 pt-4 md:pt-6">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1" />
                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Provide Risk-Free Trial for 1 Week
                </p>
              </div>

              <div className="flex items-start gap-2 pt-4 md:pt-6">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1" />
                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Flexible Engagement Models
                </p>
              </div>

              <div className="pt-6 px-4 overflow-x-auto">
                <ul className="flex gap-4 sm:gap-6 font-bold min-w-max">
                  <li>
                    <Link
                      href="/mobile-app"
                      className="underline hover:no-underline transition-all text-sm sm:text-base md:text-lg whitespace-nowrap"
                    >
                      Mobile App
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/software-development"
                      className="underline hover:no-underline transition-all text-sm sm:text-base md:text-lg whitespace-nowrap"
                    >
                      Software Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hire-developer"
                      className="underline hover:no-underline transition-all text-sm sm:text-base md:text-lg whitespace-nowrap"
                    >
                      Hire Developer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                {/* Primary Button */}
                <button className="flex items-center justify-center gap-3 bg-[#184A8C] hover:bg-[#143d74] text-white font-semibold text-base px-6 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto">
                  <span>Schedule Your Free Consultation</span>
                  <ArrowRight size={22} />
                </button>

                {/* Secondary Button */}
                <button className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-[#184A8C] hover:text-[#184A8C] text-black font-semibold text-base px-6 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto">
                  <span>Our work</span>
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center px-4">
            <img
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2024/10/iq-tech.webp"
              alt="IQLance Tech"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 px-4 py-8 border-y border-gray-200">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              96%
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Client Retention
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              19+
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              SaaS Built
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="max-w-30 sm:max-w-35 lg:max-w-40 w-full h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2026/04/North-Dallas-Chamber-Logo.png"
              alt="North Dallas Chamber Logo"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              className="w-16 sm:w-20 md:w-24 h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2024/10/iso-1080x675-1.webp"
              alt="ISO Certification"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              className="max-w-25 sm:max-w-30 lg:max-w-35 w-full h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2024/10/clutch-logo-update.png.webp"
              alt="Clutch Logo"
            />
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              15+
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Industries
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              24+
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Project Start
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 30000 }}
          loop
        >
          <SwiperSlide>
            <div className="flex">
              <div className="">
                <h1 className="text-black text-lg font-medium mb-1">
                  Top App Development Company in Canada
                </h1>
                <p>
                  iQlance is a one-stop provider of custom web, mobile app, and
                  software development services in Canada. Having hands-on
                  experience in delivering and deploying cutting-edge mobile
                  applications and games, we create customer-centric product
                  designs and deliver seamless experiences that genuinely
                  impress users.
                </p>
                <p>
                  Our team of passionate developers and designers transforms
                  your ideas into successful digital products by solving
                  real-world business challenges for businesses and their users.
                  Having delivered more than 1500 apps for respected brands, we
                  leave no stone unturned when it comes to security and
                  transparency.
                </p>
              </div>
              <img
                className="w-[40%]"
                src="https://www.iqlance.com/wp-content/uploads/2024/10/app-development-comapny-canada.png.webp"
                alt="Banner 1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <div className="">
                <h1 className="text-black text-lg font-medium mb-1">
                  Deliver Mobile App and Software Development Services Across
                  the USA
                </h1>
                <p>
                  iQlance delivers innovative software development and app
                  development services all over the USA. We offer design-led
                  agile development solutions for customers in North America,
                  including startups, SMEs, established corporations, and
                  non-profit organizations. We bring real-world experience to
                  every engagement so we can better understand your business
                  needs.
                </p>
                <p>
                  By partnering with iQlance, clients can expect to work with a
                  staff that pays close attention to detail. Together, we
                  transform your app idea into a scalable, user-focused solution
                  that stands out in today's competitive app marketplace.
                </p>
                <div className="space-y-1 pt-5">
                  {/* Mobile App Development */}
                  <div className="grid md:grid-cols-[200px_1fr] ">
                    <h3 className="text-xs font-bold text-blue-900 leading-snug">
                      Mobile App <br className="hidden md:block" />
                      Development
                    </h3>

                    <ul className="list-disc text-sm">
                      <li>iOS App Development</li>
                      <li>Android App Development</li>
                    </ul>
                  </div>

                  {/* Cross Platform Development */}
                  <div className="grid md:grid-cols-[200px_1fr]">
                    <h3 className="text-xs font-bold text-blue-900 leading-snug">
                      Cross Platform <br className="hidden md:block" />
                      Development
                    </h3>

                    <ul className="list-disc text-sm">
                      <li>React Native Development Services</li>
                      <li>Flutter App Development Services</li>
                    </ul>
                  </div>

                  {/* Software Development */}
                  <div className="grid md:grid-cols-[200px_1fr]">
                    <h3 className="text-xs font-bold text-blue-900 leading-snug">
                      Software Development
                    </h3>

                    <ul className="list-disc text-sm">
                      <li>
                        Microsoft .NET, Node JS, Python, React, Laravel, Angular
                      </li>
                    </ul>
                  </div>

                  {/* AI Development */}
                  <div className="grid md:grid-cols-[200px_1fr]">
                    <h3 className="text-xs font-bold text-blue-900 leading-snug">
                      AI Development
                    </h3>

                    <ul className="list-disc text-sm">
                      <li>Generative AI, Agentic AI, AI Agents, and more</li>
                    </ul>
                  </div>

                  {/* Cloud & DevOps */}
                  <div className="grid md:grid-cols-[200px_1fr]">
                    <h3 className="text-xs font-bold text-blue-900 leading-snug">
                      Cloud & DevOps
                    </h3>

                    <ul className="list-disc text-sm">
                      <li>AWS, Microsoft Azure, Google Cloud</li>
                    </ul>
                  </div>

                  {/* IT Staff Augmentation */}
                  <div className="grid md:grid-cols-[200px_1fr]">
                    <h3 className="text-xs font-bold text-blue-900 leading-snug">
                      IT Staff <br className="hidden md:block" />
                      Augmentation
                    </h3>

                    <ul className="list-disc text-sm">
                      <li>
                        Hire Dedicated Developers, Software Engineers, and
                        Development Teams
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className="w-[40%] h-[40%]"
                src="https://www.iqlance.com/wp-content/uploads/2024/10/app-development-comapny-canada.png.webp"
                alt="Banner 1"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
