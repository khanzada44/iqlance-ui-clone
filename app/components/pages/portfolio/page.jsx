"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import ContactForm from "../../contactForm/ContactForm";
import { partners } from "../../../../utils/data";
import { categoriesWithPortfolio } from "../../../../services/all-sub-categories";

// API response se list nikalna (dono jagah same logic)
const getList = (res) => res?.response?.data || res?.data || [];

// Ek category ke saare portfolios (subcategory ka naam saath)
const flattenPortfolios = (category) =>
  category?.subcategories?.reduce((acc, subCat) => {
    if (subCat.portfolios && subCat.portfolios.length > 0) {
      return acc.concat(
        subCat.portfolios.map((item) => ({ ...item, subCategoryName: subCat.name }))
      );
    }
    return acc;
  }, []) || [];

// initialCategories server (app/portfolio/page.jsx) se aata hai,
// is liye saare projects build ke waqt hi HTML mein aa jate hain (Google parh sake).
export default function Portfolio({ initialCategories = [] }) {
  const hasInitial = initialCategories.length > 0;

  const [categoriesData, setCategoriesData] = useState(initialCategories);
  const [loading, setLoading] = useState(!hasInitial);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState(initialCategories[0]?.name || "");
  const [activeSubCategory, setActiveSubCategory] = useState("ALL");

  // Fallback: agar server se data nahi aaya to browser mein fetch karo
  useEffect(() => {
    if (hasInitial) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataList = getList(await categoriesWithPortfolio());
        setCategoriesData(dataList);
        if (dataList.length > 0) setActiveTab(dataList[0].name);
      } catch (err) {
        console.error("Error fetching portfolio categories:", err);
        setError("Failed to load portfolio data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [hasInitial]);

  const currentCategoryObj = categoriesData.find((cat) => cat.name === activeTab);

  // Sub-tabs ('ALL' tabhi aayega jab subcategories hongi)
  const subCategoriesList =
    currentCategoryObj?.subcategories?.length > 0
      ? ["ALL", ...currentCategoryObj.subcategories.map((sub) => sub.name)]
      : [];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setActiveSubCategory("ALL");
  };

  const isVisible = (category, item) =>
    category.name === activeTab &&
    (activeSubCategory === "ALL" ||
      item.subCategoryName?.toUpperCase() === activeSubCategory.toUpperCase());

  const renderCard = (item, idx, visible) => (
    <article
      key={item.id || item.slug || idx}
      className={
        visible
          ? `${item.bgColor || "bg-red-50"} p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300`
          : "hidden"
      }
    >
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{item.title}</h3>
        <div
          className="text-sm md:text-base text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        {Array.isArray(item.features) && item.features.length > 0 && (
          <ul className="space-y-3 py-2">
            {item.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-900">
                <ChevronRight size={18} className="text-gray-800 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {Array.isArray(item.techStack) && item.techStack.length > 0 && (
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {item.techStack.map((tech, tIdx) => (
              <div key={tIdx} className="flex flex-col items-center gap-2">
                <img src={tech.icon} alt={tech.name} loading="lazy" className="h-8 w-8 object-contain" />
                <span className="text-xs font-semibold text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4">
          {/* Case study page ban jaye to is button ko <Link href={`/portfolio/${item.slug}`}> bana dein */}
          <button
            type="button"
            className="group mt-8 inline-flex w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold justify-center items-center gap-3 transition cursor-pointer"
          >
            View Case Study
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={item.image_url || item.image || "/images/vr-feature.png"}
          alt={`${item.title} – DevApp Grid project`}
          loading="lazy"
          className="max-w-full h-auto object-contain drop-shadow-xl rounded-md"
        />
      </div>
    </article>
  );

  const activeVisibleCount = flattenPortfolios(currentCategoryObj).filter((item) =>
    isVisible(currentCategoryObj, item)
  ).length;

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <section>
          <img
            src="/images/porfoilo-header-banner.webp"
            alt="DevApp Grid portfolio of apps and websites"
            className="mt-10 w-full object-cover"
          />
          {/* Sirf EK H1 — page ka asal topic */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug text-center mt-10 px-5">
            Portfolio
          </h1>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-5 px-5 font-medium">
            See our wide range of innovative apps and websites built by an award-winning app development agency.
          </p>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-4 px-5">
            As a leading provider of app, web, and mobile app development services, our team works hard to give you the best support at every step.
          </p>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center mt-4 px-5">
            Your idea is more than just a project to us. We take full responsibility for bringing it to life with complete dedication, so you can take your business to new heights.
          </p>
          <div className="text-center">
            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold justify-center items-center gap-3 transition cursor-pointer"
            >
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug text-center px-5">
            A Glimpse of Our Creative Work
          </h2>
          <p className="text-sm md:text-base max-w-4xl mx-auto leading-relaxed text-center text-gray-700 px-5">
            We are strategists. We are innovators. We are a team of full-stack software and mobile app developers, building great, innovative solutions to take your business to the next level.
          </p>
        </section>
        <section className="mt-12">
          <div className="flex justify-center mb-8 overflow-x-auto">
            {categoriesData.map((cat) => (
              <button
                key={cat.id || cat.name}
                type="button"
                aria-pressed={activeTab === cat.name}
                onClick={() => handleTabChange(cat.name)}
                className={`px-8 py-3 text-base font-medium transition-all whitespace-nowrap ${
                  activeTab === cat.name
                    ? "border-b-2 border-red-600 text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-red-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 text-xs md:text-sm font-semibold">
            {subCategoriesList.map((category, index) => (
              <button
                key={index}
                type="button"
                aria-pressed={activeSubCategory.toUpperCase() === category.toUpperCase()}
                onClick={() => setActiveSubCategory(category)}
                className={`px-3 py-1.5 rounded transition uppercase ${
                  activeSubCategory.toUpperCase() === category.toUpperCase()
                    ? "bg-red-700 text-white"
                    : "bg-transparent text-gray-800 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {loading ? (
            <div className="max-w-6xl mx-auto p-4 py-8 animate-pulse space-y-8" aria-label="Loading portfolio">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="h-8 bg-gray-300 rounded-md w-2/5"></div>
                    <div className="space-y-3 pt-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    </div>
                    <div className="h-12 bg-gray-300 rounded-md w-40 mt-4"></div>
                  </div>
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
              {/* Har category ke SAARE projects HTML mein hain; sirf active tab/filter wale nazar aate hain */}
              {categoriesData.map((cat) =>
                flattenPortfolios(cat).map((item, idx) => renderCard(item, `${cat.name}-${idx}`, isVisible(cat, item)))
              )}
              {activeVisibleCount === 0 && (
                <div className="text-center py-16 text-gray-500 font-medium">
                  No projects found for the selected category.
                </div>
              )}
            </div>
          )}
        </section>

        <div className="mb-2.5 pb-2 mt-16">
          <ContactForm />
        </div>
      </div>

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
                  alt={item.alt || "DevApp Grid partner"}
                  loading="lazy"
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