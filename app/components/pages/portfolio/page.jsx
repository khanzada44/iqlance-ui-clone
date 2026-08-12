"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { partners } from "../portfolio/data";
import { categoriesWithPortfolio } from '../../../../services/all-sub-categories';

export default function Portfolio() {
  const [categoriesData, setCategoriesData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState('');
  const [activeSubCategory, setActiveSubCategory] = useState('ALL');


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await categoriesWithPortfolio();

        // Handle response layout securely
        const dataList = res?.response?.data || res?.data || [];
        console.log('dataList', dataList);

        setCategoriesData(dataList);

        if (dataList.length > 0) {
          setActiveTab(dataList[0].name);
        }
      } catch (err) {
        console.error("Error fetching portfolio categories:", err);
        setError("Failed to load portfolio data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2. Extract Active Category object
  const currentCategoryObj = categoriesData.find(cat => cat.name === activeTab);

  // 3. Subcategories list for Sub-tabs Filter
  const subCategoriesList = [
    'ALL',
    ...(currentCategoryObj?.subcategories?.map(sub => sub.name) || [])
  ];

  // 4. Flatten all portfolios inside current active main category
  const allPortfolios = currentCategoryObj?.subcategories?.reduce((acc, subCat) => {
    if (subCat.portfolios && subCat.portfolios.length > 0) {
      const itemsWithSub = subCat.portfolios.map(item => ({
        ...item,
        subCategoryName: subCat.name
      }));
      return acc.concat(itemsWithSub);
    }
    return acc;
  }, []) || [];

  // 5. Filter portfolios by active subcategory
  const filteredPortfolios = activeSubCategory === 'ALL'
    ? allPortfolios
    : allPortfolios.filter(
      item => item.subCategoryName.toUpperCase() === activeSubCategory.toUpperCase()
    );

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setActiveSubCategory('ALL');
  };

  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        {/* Header & Hero Section */}
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
            As a market leader in providing the best app, web and mobile app development services, our team is striving hard to offer you the best assistance.
          </p>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-4">
            Your dreams are not only a project for us, it's our responsibility to fulfill it with full dedication so that you can take your business to new heights.
          </p>
          <div className="text-center">
            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold justify-center items-center gap-3 transition cursor-pointer"
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
            We are strategists. We are innovators. We are a team of full-stack software and mobile app developers, working for great and innovative solutions to take your business to the next level.
          </p>
        </section>

        {/* Dynamic Category & Subcategory Filters */}
        <section className="mt-12">
          {/* Main Category Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-8 overflow-x-auto">
            {categoriesData.map((cat) => (
              <button
                key={cat.id || cat.name}
                onClick={() => handleTabChange(cat.name)}
                className={`px-8 py-3 text-base font-medium transition-all whitespace-nowrap ${activeTab === cat.name
                  ? 'border-b-2 border-[#184A8B] text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dynamic Subcategory Pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 text-xs md:text-sm font-semibold">
            {subCategoriesList.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveSubCategory(category)}
                className={`px-3 py-1.5 rounded transition uppercase ${activeSubCategory.toUpperCase() === category.toUpperCase()
                  ? 'bg-[#184A8B] text-white'
                  : 'bg-transparent text-gray-800 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dynamic Portfolio Items Rendering */}
          {loading ? (
            <div className="max-w-6xl mx-auto p-4 py-8 animate-pulse space-y-8">
              {/* Top Nav Tabs Skeleton (Domain / Technology) */}
              <div className="flex justify-center gap-8 border-b pb-3">
                <div className="h-6 bg-gray-300 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-24"></div>
              </div>

              {/* Sub-Category Pills Skeleton */}
              <div className="flex flex-wrap justify-center gap-3 py-2">
                <div className="h-8 bg-gray-300 rounded-md w-16"></div>
                <div className="h-8 bg-gray-200 rounded-md w-28"></div>
                <div className="h-8 bg-gray-200 rounded-md w-24"></div>
                <div className="h-8 bg-gray-200 rounded-md w-32"></div>
                <div className="h-8 bg-gray-200 rounded-md w-20"></div>
                <div className="h-8 bg-gray-200 rounded-md w-28"></div>
              </div>

              {/* Main Portfolio Feature Card Skeleton */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Side Text & Button */}
                  <div className="space-y-6">
                    <div className="h-8 bg-gray-300 rounded-md w-2/5"></div>
                    <div className="space-y-3 pt-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    </div>
                    <div className="h-12 bg-gray-300 rounded-md w-40 mt-4"></div>
                  </div>

                  {/* Right Side Phone / App Showcase Placeholder */}
                  <div className="flex justify-center items-center">
                    <div className="w-64 h-105 bg-gray-200 rounded-[40px] border-8 border-gray-300 shadow-inner"></div>
                  </div>

                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-16 text-red-500 font-medium">{error}</div>
          ) : (
            <div className="space-y-10">
              {filteredPortfolios.length > 0 ? (
                filteredPortfolios.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className={`${item.bgColor || 'bg-[#F4F6F8]'
                      } p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300`}
                  >
                    {/* Left Details */}
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      {/* Description with HTML support */}
                      <div
                        className="text-sm md:text-base text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />

                      {/* Features List */}
                      {item.features && Array.isArray(item.features) && item.features.length > 0 && (
                        <ul className="space-y-3 py-2">
                          {item.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-900">
                              <ChevronRight size={18} className="text-gray-800 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack Icons */}
                      {item.techStack && Array.isArray(item.techStack) && item.techStack.length > 0 && (
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                          {item.techStack.map((tech, tIdx) => (
                            <div key={tIdx} className="flex flex-col items-center gap-2">
                              <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                              <span className="text-xs font-semibold text-gray-800">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="pt-4">
                        <Link
                          href={`/single-portfolio?slug=${item.slug}`}
                          className="group mt-8 inline-flex w-full sm:w-auto bg-[#184A8B] hover:bg-[#143b72] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold justify-center items-center gap-3 transition cursor-pointer"
                        >
                          View Case Study
                          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Mockup Image */}
                    <div className="flex justify-center items-center">
                      <img
                        src={item.image_url || item.image || '/images/vr-feature.png'}
                        alt={item.title}
                        className="max-w-full h-auto object-contain drop-shadow-xl rounded-md"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 text-gray-500 font-medium">
                  No projects found for the selected category.
                </div>
              )}
            </div>
          )}
        </section>

        {/* Contact Form */}
        <div className="mb-2.5 pb-2 mt-16">
          <ContactForm />
        </div>
      </div>

      {/* Partners Marquee */}
      <section className="mb-5 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content flex gap-4">
            {[...partners, ...partners].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-35 h-17.5 sm:w-42.5 sm:h-20 md:w-55 md:h-23.75 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-3 shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.alt || 'Partner'}
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

