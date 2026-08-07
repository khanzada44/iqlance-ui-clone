"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useState } from 'react';
import Link from 'next/link';
import { partners } from "../portfolio/data";


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Domain');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL',
    'BUSINESS',
    'E-COMMERCE',
    'FITNESS',
    'GPS TRACKING',
    'LIFE-STYLE',
    'MARKET PLACE',
    'MUSIC',
    'NUTRITION',
    'ONLINE FOOD ORDERING',
    'REAL ESTATE',
    'SOCIAL NETWORKING',
  ];

  // Portfolio items ka complete data list
  const portfolioData = [
    {
      id: 1,
      category: 'BUSINESS',
      tab: 'Domain',
      title: 'Event Booking App',
      description:
        'iQlance Solutions built a fully connected Event application that transforms how partygoers discover venues and how clubs manage their bookings. The app eliminates the usual booking hassle by giving users instant access to nearby clubs, pubs, lounges, and live events, along with the ability to host their own parties effortlessly. You can also host a party using this app. So, no more booking issues; this is what the Event App ensures.',
      features: [
        'Explore Nearby Clubs and Events',
        'Venue Management Dashboard',
        'Instant Booking and Payments',
        'Notifications and Updates',
      ],
      techStack: [
        { name: 'React Native', icon: '/images/React.png.webp' },
        { name: 'AWS', icon: '/images/Aws.png' },
        { name: 'Node.js', icon: '/images/nodejs-nav-iq-act.png' },
        { name: 'MongoDB', icon: '/images/mongodb-iq-tech.svg' },
      ],
      bgColor: 'bg-[#E6DEFF]',
      image: '/images/vr-feature.png',
      link: '/case-study/event-booking-app',
    },
    {
      id: 2,
      category: 'E-COMMERCE',
      tab: 'Domain',
      title: 'Multi-Vendor Marketplace',
      description:
        'A comprehensive e-commerce ecosystem connecting buyers and multiple vendors. Features real-time order tracking, seamless payment gateway integrations, and personalized recommendations driven by intelligent user behavior analytics.',
      features: [
        'Multi-Storefront Management',
        'Integrated Payment Gateways',
        'Real-time Order & Inventory Tracking',
        'Custom Vendor Dashboard',
      ],
      techStack: [
        { name: 'React Native', icon: '/images/React.png.webp' },
        { name: 'AWS', icon: '/images/Aws.png' },
        { name: 'Node.js', icon: '/images/nodejs-nav-iq-act.png' },
        { name: 'MongoDB', icon: '/images/mongodb-iq-tech.svg' },
      ],
      bgColor: 'bg-[#E3F2FD]',
      image: '/images/Moving-Force-Feature.png',
      link: '/case-study/e-commerce-app',
    },
    {
      id: 3,
      category: 'FITNESS',
      tab: 'Domain',
      title: 'Fitness & Workout Tracker',
      description:
        'An interactive fitness companion offering personalized workout routines, live trainer sessions, macro tracking, and seamless integration with smartwatches and wearables.',
      features: [
        'Personalized Workout Plans',
        'Wearable Device Integration',
        'Calorie & Meal Planner',
        'Community Activity Leaderboards',
      ],
      techStack: [
        { name: 'React Native', icon: '/images/React.png.webp' },
        { name: 'AWS', icon: '/images/Aws.png' },
        { name: 'Node.js', icon: '/images/nodejs-nav-iq-act.png' },
        { name: 'MongoDB', icon: '/images/mongodb-iq-tech.svg' },
      ],
      bgColor: 'bg-[#E8F5E9]',
      image: '/images/LocShark-feature.png',
      link: '/case-study/fitness-tracker-app',
    },
    {
      id: 4,
      category: 'ONLINE FOOD ORDERING',
      tab: 'Domain',
      title: 'Food Delivery Platform',
      description:
        'A fast and reliable food delivery application connecting hungry customers with local restaurants. Features real-time GPS tracking for delivery drivers, automated dispatch, and reward programs.',
      features: [
        'Live GPS Order Tracking',
        'Automated Driver Dispatch',
        'In-App Promo Codes & Wallet',
        'Restaurant Menu Customizer',
      ],
      techStack: [
        { name: 'React Native', icon: '/images/React.png.webp' },
        { name: 'AWS', icon: '/images/Aws.png' },
        { name: 'Node.js', icon: '/images/nodejs-nav-iq-act.png' },
        { name: 'MongoDB', icon: '/images/mongodb-iq-tech.svg' },
      ],
      bgColor: 'bg-[#FFF3E0]',
      image: '/images/highburnation-feature-imag.png',
      link: '/case-study/food-delivery-app',
    },
  ];

  // Selected category / tab ke basis par items filter karne ka function
  const filteredData = portfolioData.filter((item) => {
    const matchesCategory =
      activeCategory === 'ALL' || item.category === activeCategory;
    return matchesCategory;
  });
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto max-w-full overflow-hidden">
        {/* Banner Section */}
        <section>
          <img
            src="/images/porfoilo-header-banner.jpg"
            alt="Portfolio Banner"
            className="mt-10 w-full object-cover"
          />
          <h1 className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-10">
            See Our Wide Range Of Innovative Apps & Websites Award-Winning App Development Agency
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug text-center mt-5">
            Portfolio
          </p>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-4">
            As a market leader in providing the best app, web and mobile app development services, iQlance team is striving hard to offer you the best assistance. satisfaction.
          </p>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-4">
            Your dreams are not only a project for us, it's our responsibility to fulfill it with full dedication so that you can take your business to the new heights.
          </p>
          <div className="text-center">
            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold justify-center items-center gap-3 transition rounded-md cursor-pointer"
            >
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Intro Section */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug text-center">
            The Glimpse of our Creative Works
          </h2>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center text-gray-700">
            We are strategists. We are innovators. We are a team of full-stack software and mobile app developers, which doesn’t get settled for good but work for great and innovative solutions to take your business to the next level. iQlance has developed over 150+ iOS and Android mobile applications for many enterprise clients.
          </p>
        </section>

        {/* Domain / Tech Filter Tabs */}
        <section className="mt-12">
          <div className="flex justify-center border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('Domain')}
              className={`px-8 py-3 text-base font-medium transition-all ${activeTab === 'Domain'
                  ? 'border-b-2 border-[#184A8B] text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Domain
            </button>
            <button
              onClick={() => setActiveTab('Technology')}
              className={`px-8 py-3 text-base font-medium transition-all ${activeTab === 'Technology'
                  ? 'border-b-2 border-[#184A8B] text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Technology
            </button>
          </div>

          {/* Categories Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 text-xs md:text-sm font-semibold">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded transition ${activeCategory === category
                    ? 'bg-[#184A8B] text-white'
                    : 'bg-transparent text-gray-800 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dynamic Portfolio Cards Mapping */}
          <div className="space-y-10">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className={`${item.bgColor} p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300`}
                >
                  {/* Left Column Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 py-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-900">
                          <ChevronRight size={18} className="text-gray-800 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap items-center gap-6 pt-4">
                      {item.techStack.map((tech, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                          <span className="text-xs font-semibold text-gray-800">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Case Study Link Button */}
                    <div className="pt-4">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 bg-[#184A8B] hover:bg-[#143b72] text-white font-medium px-6 py-3 transition"
                      >
                        View Case Study
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column App Mockup */}
                  <div className="flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full h-auto object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-500 font-medium">
                No projects found for the selected category.
              </div>
            )}
          </div>
        </section>

        <div className="mb-2.5 pb-2">
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
