"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import {
  services,
  industries,
  blogs,
  partners,
  servicesData,
  processSteps,
  processSteps2,
} from "../home/services-data";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <>
      <div className="w-[92%] sm:w-[90%] mx-auto">
        {/* HERO */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-8 font-sans lg:w-1/2">
            <p className="text-black text-base sm:text-lg font-medium mb-1">
              Let's turn your ideas into digital products
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-3 leading-snug">
              Leading Mobile App and <br className="hidden sm:block" />
              <span className="text-blue-500">Software Development</span>{" "}
              Company
            </h1>
            <p className="text-black text-sm sm:text-base md:text-lg">
              As a top software and mobile app development company in Canada and
              the USA, we build solutions that help optimize your business
              processes.
            </p>

            <p className="text-black text-sm sm:text-base md:text-lg mt-4">
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

              <div className="pt-6 px-1 sm:px-4">
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-bold">
                  <li>
                    <Link
                      href="/mobile-app"
                      className="underline hover:no-underline transition-all text-sm sm:text-base md:text-lg"
                    >
                      Mobile App
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/software-development"
                      className="underline hover:no-underline transition-all text-sm sm:text-base md:text-lg"
                    >
                      Software Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hire-developer"
                      className="underline hover:no-underline transition-all text-sm sm:text-base md:text-lg"
                    >
                      Hire Developer
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-6">
                <button className="flex items-center justify-center gap-3 bg-[#184A8C] hover:bg-[#143d74] text-white font-semibold text-sm sm:text-base px-5 sm:px-4 py-2 rounded-lg transition-all duration-300 w-full sm:w-auto">
                  <span>Schedule Your Free Consultation</span>
                  <ArrowRight size={20} />
                </button>

                <button className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-[#184A8C] hover:text-[#184A8C] text-black font-semibold text-sm sm:text-base px-4 sm:px-4 py-2 rounded-lg transition-all duration-300 w-full sm:w-auto">
                  <span>Our work</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center px-4 w-full">
            <img
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2024/10/iq-tech.webp"
              alt="IQLance Tech"
            />
          </div>
        </div>

        {/* STATS BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 px-2 sm:px-4 py-6 sm:py-8 border-y border-gray-200">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              96%
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Client Retention
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              19+
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              SaaS Built
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="max-w-25 sm:max-w-32.5 lg:max-w-40 w-full h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2026/04/North-Dallas-Chamber-Logo.png"
              alt="North Dallas Chamber Logo"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              className="w-14 sm:w-16 md:w-20 lg:w-24 h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2024/10/iso-1080x675-1.webp"
              alt="ISO Certification"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              className="max-w-22.5 sm:max-w-27.5 lg:max-w-35 w-full h-auto object-contain"
              src="https://www.iqlance.com/wp-content/uploads/2024/10/clutch-logo-update.png.webp"
              alt="Clutch Logo"
            />
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              15+
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Industries
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center col-span-2 sm:col-span-1">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              24+
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Project Start
            </p>
          </div>
        </div>

        {/* SWIPER 1 */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 30000 }}
          loop
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start px-1">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-5">
                  Deliver Mobile App and Software Development Services Across
                  the USA
                </h2>

                <p className="text-gray-700 leading-6 text-xs sm:text-sm">
                  iQlance delivers innovative software development and app
                  development services all over the USA. We offer design-led
                  agile development solutions for customers in North America,
                  including startups, SMEs, established corporations, and
                  non-profit organizations.
                </p>

                <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-10 mt-3 text-xs sm:text-sm">
                  By partnering with iQlance, clients can expect to work with a
                  staff that pays close attention to detail. Together, we
                  transform your app idea into a scalable, user-focused
                  solution.
                </p>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Mobile App Development
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li className="m-0">iOS App Development</li>
                      <li className="m-0">Android App Development</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Website Development
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">
                        React, Angular, WordPress, and more
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Software Development
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">
                        .NET, Java, PHP, Node.js, and more
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Cloud Consulting
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">Unity, Cocos 2D, Virtual Reality</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      AI Development
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">
                        OpenAI, Azure AI, Generative AI, AI Agents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <img
                  src="https://www.iqlance.com/wp-content/uploads/2024/10/app-development-comapny-canada.png.webp"
                  alt=""
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                />

                <div className="mt-6 sm:mt-8 w-full text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#184A8B] leading-snug">
                    Schedule a free consultation today with Project Manager.
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    (We sign NDA)
                  </p>
                  <button className="mt-4 bg-[#184A8B] text-white px-6 py-2 rounded-md hover:bg-[#133b70] transition justify-center items-center gap-1.5 flex mx-auto lg:mx-0 w-full sm:w-auto">
                    Let's Talk <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start px-1">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-5">
                  Deliver Mobile App and Software Development Services Across
                  the USA
                </h2>

                <p className="text-gray-700 leading-6 text-xs sm:text-sm">
                  iQlance delivers innovative software development and app
                  development services all over the USA. We offer design-led
                  agile development solutions for customers in North America,
                  including startups, SMEs, established corporations, and
                  non-profit organizations.
                </p>

                <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-10 mt-3 text-xs sm:text-sm">
                  By partnering with iQlance, clients can expect to work with a
                  staff that pays close attention to detail. Together, we
                  transform your app idea into a scalable, user-focused
                  solution.
                </p>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Mobile App Development
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li className="m-0">iOS App Development</li>
                      <li className="m-0">Android App Development</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Website Development
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">
                        React, Angular, WordPress, and more
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Software Development
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">
                        .NET, Java, PHP, Node.js, and more
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8 m-0">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      Cloud Consulting
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">Unity, Cocos 2D, Virtual Reality</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-8">
                    <h3 className="font-bold text-[#184A8B] text-sm">
                      AI Development
                    </h3>
                    <ul className="list-disc pl-5 text-sm">
                      <li className="m-0">
                        OpenAI, Azure AI, Generative AI, AI Agents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <img
                  src="https://www.iqlance.com/wp-content/uploads/2024/10/app-development-comapny-canada.png.webp"
                  alt=""
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                />

                <div className="mt-6 sm:mt-8 w-full text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#184A8B] leading-snug">
                    Schedule a free consultation today with Project Manager.
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    (We sign NDA)
                  </p>
                  <button className="mt-4 bg-[#184A8B] text-white px-6 py-2 rounded-md hover:bg-[#133b70] transition justify-center items-center gap-1.5 flex mx-auto lg:mx-0 w-full sm:w-auto">
                    Let's Talk <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* TRAVIS SECTION */}
        <div className="max-w-6xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/travis_h.png"
                alt="Travis H"
                className="w-48 sm:w-64 md:w-72 lg:w-85 object-contain"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#184A8B] leading-tight">
                Book a Free Strategy Call with Our Local US-based IT Project
                Specialist
              </h2>

              <h3 className="mt-5 sm:mt-6 text-2xl sm:text-3xl font-bold">
                Travis H
              </h3>

              <p className="text-gray-600 text-base sm:text-lg mt-1">
                IT Project Specialist, USA
              </p>

              <p className="mt-5 sm:mt-6 text-gray-700 leading-7 sm:leading-8 text-base sm:text-lg">
                Want a custom app for your business to get 2X ROI? Share your
                vision and technical requirements with our specialist.
              </p>

              <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
                <button className="border border-black rounded-md px-4 sm:px-6 py-3 text-base sm:text-xl font-semibold hover:bg-gray-100 transition flex gap-1.5 items-center w-full sm:w-auto justify-center">
                  <img
                    src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                    alt=""
                  />
                  US : +1 469 793 9837
                </button>
              </div>

              <div className="mt-4 sm:mt-5 flex justify-center lg:justify-start">
                <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[#123b72] transition justify-center items-center gap-1.5 flex w-full sm:w-auto">
                  Schedule a Free Consultation <ArrowRight size={16} />
                </button>
              </div>

              <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 text-2xl sm:text-3xl text-[#184A8B] justify-center lg:justify-start">
                <i className="ri-linkedin-fill"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-mail-fill"></i>
                <i className="ri-share-line"></i>
              </div>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 text-xl sm:text-2xl text-[#184A8B] justify-center">
            <FaLinkedinIn />
            <FaXTwitter />
            <FaEnvelope />
            <FiShare2 />
          </div>

          <div className="mt-8 sm:mt-5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Services We Offer
            </h2>
            <p className="mt-4 sm:mt-6 max-w-5xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 leading-7 sm:leading-9">
              From custom software and mobile app development to AI solutions,
              cloud consulting, and IT staff augmentation, iQlance delivers
              technology services that help businesses innovate, improve
              efficiency, and speed up growth. Our experts build secure,
              scalable, and future-ready digital solutions customized to your
              business goals and industry needs.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-4 sm:mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SWIPER 2 - CASE STUDIES */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 30000 }}
          loop
        >
          <SwiperSlide>
            <div className="bg-[#F2F1FF] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
                Endeavors that Make us Proud
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Supply Chain Management App
                  </h3>

                  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                    Embark on a transformative journey with the chain supply
                    management app, an advanced application designed to
                    modernize operations and streamline B2B transactions.
                    Overcoming challenges of data integration and user-friendly
                    design, this app redefines efficiency and security in B2B
                    platforms.
                  </p>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                    <li>› Global Chemical Procurement Hub</li>
                    <li>› Diverse Industry Representation</li>
                    <li>› Innovation and Experience</li>
                  </ul>

                  <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/themes/iqlance/img/technologies-ios-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">iOS</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/themes/iqlance/img/android-technologies-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">Android</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/uploads/2024/08/microsoft-sql-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">SQL</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/uploads/2024/08/Flutter.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">Flutter</p>
                    </div>
                  </div>

                  <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#123c73] transition flex items-center gap-2 w-full sm:w-auto justify-center">
                    View Case Study <ArrowRight size={22} />
                  </button>
                </div>

                <div className="flex justify-center">
                  <img
                    src="https://www.iqlance.com/wp-content/uploads/2024/08/chain-supply-management.png.webp"
                    alt=""
                    className="w-full max-w-xs sm:max-w-sm"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#F2F1FF] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
                Endeavors that Make us Proud
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Supply Chain Management App
                  </h3>

                  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                    Embark on a transformative journey with the chain supply
                    management app, an advanced application designed to
                    modernize operations and streamline B2B transactions.
                    Overcoming challenges of data integration and user-friendly
                    design, this app redefines efficiency and security in B2B
                    platforms.
                  </p>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                    <li>› Global Chemical Procurement Hub</li>
                    <li>› Diverse Industry Representation</li>
                    <li>› Innovation and Experience</li>
                  </ul>

                  <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/themes/iqlance/img/technologies-ios-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">iOS</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/themes/iqlance/img/android-technologies-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">Android</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/uploads/2024/08/microsoft-sql-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">SQL</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/themes/iqlance/img/laravel-technologies-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">laravel</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/uploads/2024/08/React.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">React Native</p>
                    </div>
                  </div>

                  <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#123c73] transition flex items-center gap-2 w-full sm:w-auto justify-center">
                    View Case Study <ArrowRight size={22} />
                  </button>
                </div>

                <div className="flex justify-center">
                  <img
                    src="https://www.iqlance.com/wp-content/uploads/2024/08/image_2024_08_05T07_26_10_247Z.png.webp"
                    alt=""
                    className="w-full max-w-xs sm:max-w-sm"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#F2F1FF] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
                Endeavors that Make us Proud
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Supply Chain Management App
                  </h3>

                  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                    Embark on a transformative journey with the chain supply
                    management app, an advanced application designed to
                    modernize operations and streamline B2B transactions.
                    Overcoming challenges of data integration and user-friendly
                    design, this app redefines efficiency and security in B2B
                    platforms.
                  </p>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                    <li>› Global Chemical Procurement Hub</li>
                    <li>› Diverse Industry Representation</li>
                    <li>› Innovation and Experience</li>
                  </ul>

                  <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/uploads/2024/08/microsoft-sql-icn.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">SQL</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://www.iqlance.com/wp-content/uploads/2024/07/Azure.png.webp"
                        className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                        alt=""
                      />
                      <p className="text-xs sm:text-sm mt-2">Azur</p>
                    </div>
                  </div>

                  <button className="bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#123c73] transition flex items-center gap-2 w-full sm:w-auto justify-center">
                    View Case Study <ArrowRight size={22} />
                  </button>
                </div>

                <div className="flex justify-center">
                  <img
                    src="https://www.iqlance.com/wp-content/uploads/2024/05/erp1.png.webp"
                    alt=""
                    className="w-full max-w-xs sm:max-w-sm"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* CHECK PRODUCT SECTION */}
        <div className="bg-[#F4F8FC] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight">
                Check How We turn Your Idea into
                <br className="hidden sm:block" />
                Innovative Product
              </h2>

              <p className="mt-4 sm:mt-5 text-black text-base sm:text-lg leading-6 max-w-xl mx-auto lg:mx-0">
                Our rich portfolio justifies that, we are one of the best
                software development and app development company in USA and
                Canada.
              </p>
            </div>

            <div className="flex justify-center">
              <button className="bg-[#184A8B] hover:bg-[#143d74] transition text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md flex items-center gap-3 w-full sm:w-auto justify-center">
                Schedule a free consultation
                <span className="text-xl">
                  <ArrowRight size={22} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 pt-2">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight px-2">
            Driving Innovation with AI & Emerging Tech
          </h1>
        </div>

        {/* AI SECTION */}
        <div className="mt-5 pt-2">
          <div className="bg-[#F7F8FA]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <img
                  src="https://www.iqlance.com/wp-content/uploads/2026/07/AI_Development_Company-2.png"
                  alt="Travis"
                  className="object-cover w-full h-auto"
                />
              </div>

              <div className="flex items-center p-6 sm:p-8">
                <div>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black">
                    We help businesses accelerate digital transformation by
                    building intelligent, secure, and future-ready solutions
                    powered by next-generation technologies.
                  </p>

                  <p className="text-gray-700 text-sm leading-7 sm:leading-9 mt-4">
                    From artificial intelligence (AI), generative AI (GenAI),
                    agentic AI, and machine learning (ML) to cloud computing,
                    data science & analytics, and cybersecurity, our experts
                    craft innovative solutions that solve complex business
                    challenges.
                  </p>

                  <p className="text-gray-700 text-sm leading-7 sm:leading-9 mt-2">
                    Backed by more than a decade of industry experience, our
                    multidisciplinary team of consultants, designers, engineers,
                    and technology specialists turns bold ideas into impactful
                    digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIRE TEAM CTA */}
        <section className="bg-[#F4F8FC] rounded-lg py-10 sm:py-12 px-4 sm:px-6 md:px-12 mt-5 pt-2">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
              alt="Hire Team"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 object-contain"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Looking to Hire Dedicated Team?
            </h2>

            <p className="mt-4 sm:mt-5 text-gray-700 text-base sm:text-lg">
              We are team of talented, experienced, and certified designers and
              developers. Let us build something extraordinary.
            </p>

            <div className="mt-6 sm:mt-8 border border-gray-400 rounded-md px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row justify-center items-center gap-3 text-sm sm:text-base md:text-lg">
              <span className="font-semibold flex gap-1 items-center">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                  alt=""
                />
                info@iqlance.com
              </span>

              <span className="hidden md:block">or</span>

              <span className="flex flex-wrap gap-1 items-center justify-center">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                  alt=""
                />
                US :<strong> +1 469 793 9837</strong>, CA :
                <strong> +1 647 637 9108</strong>
              </span>
            </div>

            <button className="mt-6 sm:mt-8 bg-[#184A8B] text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-[#143B72] transition w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2.5">
                Let's Talk <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </section>

        <div className="max-w-5xl mx-auto text-center mt-10 sm:mt-14 px-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Hire Mobile App and Software Developers
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
            We provide you with an experienced dev team, whether you need a
            single developer or a dedicated team. Our developers seamlessly
            integrate with your business and development processes. From mobile
            apps and custom software to AI-powered solutions and enterprise
            platforms, our experts deliver reliable, scalable, and
            high-performing applications customized to your business goals.
          </p>
        </div>

        {/* SWIPER 3 - SERVICES */}
        <section>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="border border-gray-200 p-6 sm:p-8 md:p-10 h-full bg-white">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />

                  <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-9 mt-4 sm:mt-6 text-gray-700">
                    {service.description}
                  </p>

                  <button className="mt-6 sm:mt-8 bg-[#184A8B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-[#123b72] transition w-full sm:w-auto">
                    {service.button}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* APPROACH HEADER */}
        <div className="px-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Our Design and Development Approach
          </h1>
          <p className="max-w-5xl mx-auto text-center text-gray-600 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
            Every successful digital solution starts with a clear strategy and a
            structured process. Whether you're building a mobile app, custom
            software, web application, or AI-powered solution, we follow a
            proven development approach that minimizes risk, streamlines
            delivery, and ensures the final product aligns with your business
            goals.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 pt-14 sm:pt-8 hover:shadow-lg transition"
                >
                  <div className="absolute -top-5 right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white border border-[#184A8B] rounded-2xl flex items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-9 h-9 sm:w-14 sm:h-14 object-contain"
                    />
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5 mt-4 sm:mt-8">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 border border-[#184A8B] rounded-xl flex items-center justify-center text-lg sm:text-2xl font-bold shrink-0">
                      {step.id}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-6 sm:mt-10 text-gray-700 text-sm sm:text-lg md:text-xl leading-7 sm:leading-10">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS 2 */}
        <section className="relative py-4 sm:py-5 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 relative">
            <img
              src="https://www.iqlance.com/wp-content/uploads/2024/10/line-grey-2.png.webp"
              alt=""
              className="hidden xl:block absolute top-0 left-1/2 -translate-x-1/2 w-[95%] -z-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {processSteps2.map((step) => (
                <div
                  key={step.id}
                  className="relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 pt-14 sm:pt-16 hover:shadow-lg transition"
                >
                  <div className="absolute -top-5 right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white border border-[#184A8B] rounded-2xl flex items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-9 h-9 sm:w-14 sm:h-14 object-contain"
                    />
                  </div>

                  <div className="flex gap-4 sm:gap-5 items-start">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 border border-[#184A8B] rounded-xl flex items-center justify-center text-lg sm:text-2xl font-bold shrink-0">
                      {step.id}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-5 sm:mt-8 text-gray-700 text-sm sm:text-lg leading-7 sm:leading-9">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              Industries We Serve
            </h2>

            <p className="max-w-5xl mx-auto text-center text-gray-600 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
              At iQlance, we serve a wide range of industries by delivering
              custom solutions tailored to their unique business needs. Backed
              by extensive industry experience, we develop high-quality web
              applications, mobile apps, and custom software solutions for
              businesses across the following industries
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-8 sm:mt-12">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="relative h-40 sm:h-56 md:h-72 overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 text-white font-bold text-sm sm:text-lg md:text-xl text-center w-full px-2">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO PANEL CTA */}
        <section className="py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#F8F9FC] p-6 sm:p-8 md:p-12 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Schedule an interview and Get 7 Days Free Trial
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6">
                Ready to Hire Top Rated Dedicated Developers to Build your Next
                Great Idea?
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="mt-6 sm:mt-8 bg-white border border-gray-200 px-6 py-3 rounded-md font-semibold flex items-center gap-3 hover:bg-gray-100 transition w-full sm:w-auto justify-center">
                  Hire Developers
                  <span className="text-xl">
                    <ArrowRight size={22} />
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-[#EEF5FF] p-6 sm:p-8 md:p-12 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Can't find a service you are looking for?
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6">
                Our rich portfolio justifies that, we are one of the best
                software development and app development company in USA and
                Canada.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="mt-6 sm:mt-8 bg-[#184A8B] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-3 hover:bg-[#143B72] transition w-full sm:w-auto justify-center">
                  Let's Discuss
                  <span className="text-xl">
                    <ArrowRight size={22} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="py-4">
          <div className="bg-[#F5FAFF] rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="px-4 sm:px-8 md:px-14 py-8 sm:py-12 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 sm:mb-8">
                  Who We Work With
                </h2>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 max-w-lg mx-auto lg:mx-0">
                  We are proud to work with some of the best clients including
                  Fortune 500 companies. Our clients trust us in delivering
                  innovative solutions that has resulted in success.
                </p>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0">
                  We have developed the best digital solutions for clients
                  across the globe.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end px-4">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/globe-vector.png.webp"
                  alt="Globe"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-130 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL DISCUSS CTA */}
        <section className="py-4">
          <div className="mx-auto bg-[#F5FAFF] rounded-lg px-4 sm:px-6 md:px-12 py-8 sm:py-12">
            <div className="flex justify-center">
              <img
                src="https://www.iqlance.com/wp-content/themes/iqlance/img/letdiscuss-icon.png.webp"
                alt="Discuss"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>

            <h2 className="mt-4 text-center text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-black">
              Let's Discuss with our Technical Expert to Bring your Idea into
              <br className="hidden md:block" />
              Reality.
            </h2>

            <p className="mt-4 sm:mt-6 text-center text-base sm:text-lg md:text-xl text-gray-700">
              Send your Requirements on
            </p>

            <div className="mt-6 sm:mt-8 max-w-4xl mx-auto border border-gray-400 bg-white px-4 sm:px-6 py-4 sm:py-5 rounded flex flex-col md:flex-row items-center justify-center gap-3 text-sm sm:text-lg md:text-xl">
              <span className="font-semibold flex items-center gap-1">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/email-icon.svg"
                  alt=""
                />
                info@iqlance.com
              </span>

              <span className="hidden md:inline">or</span>

              <span className="flex flex-wrap items-center justify-center gap-1">
                <img
                  src="https://www.iqlance.com/wp-content/themes/iqlance/img/phone-icon.svg"
                  alt=""
                />
                <strong> +1 469 793 9837</strong>, CA :
                <strong> +1 647 637 9108</strong>
              </span>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <button className="bg-[#184A8B] hover:bg-[#123B73] transition text-white font-semibold px-6 sm:px-8 py-3 rounded-md flex items-center gap-3 w-full sm:w-auto justify-center">
                Request a Quote
                <span className="text-xl">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* BLOGS */}
        <div className="px-3">
          <h1 className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight text-center">
            Insights and News
          </h1>
          <p className="flex items-center justify-center text-center mt-3 sm:mt-4 text-sm sm:text-base">
            Stay updated with the current trends, latest tools and technologies,
            and industrial concepts to get an in-depth idea of your project.
          </p>
        </div>

        <section className="py-10 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition duration-300"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />

                  <div className="p-4 sm:p-6">
                    <p className="text-gray-500 text-sm sm:text-lg mb-2 sm:mb-3">
                      {blog.date}
                    </p>

                    <h3 className="text-base sm:text-[20px] leading-7 sm:leading-8 font-medium text-gray-900 hover:text-blue-700 cursor-pointer transition">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-12">
              <button className="bg-[#0C4A8A] hover:bg-[#083b70] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md text-base sm:text-xl font-semibold flex items-center gap-3 transition w-full sm:w-auto justify-center">
                All Blogs
                <span className="text-2xl">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <div className="mt-2 px-3">
          <h1 className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight text-center">
            Have Something in Mind? Let's Talk
          </h1>
          <p className="flex items-center justify-center text-center mt-3 sm:mt-4 text-sm sm:text-base">
            Have a look at the services and development process of the iQlance
            solution. See what process we follow for mobile app and software
            development. Here a look at how we are praised by our client Start a
            conversation to innovate your next great idea into reality with us.
          </p>
        </div>

        <ContactForm />
      </div>

      {/* PARTNERS - outside main container */}
      <section className="py-8 sm:py-10">
        <div className="px-3 sm:px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {partners.map((item) => (
              <div
                key={item.id}
                className="w-32.5 h-16.25 sm:w-40 sm:h-17.5 md:w-55 md:h-23.75 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-10 sm:max-h-12 md:max-h-14 max-w-25 sm:max-w-32.5 md:max-w-42.5 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
