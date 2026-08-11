'use client';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';



export default function PortfolioSlider({ slides = [], heading }) {
  // If no data loaded yet
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-[80%] mx-auto">
  <Swiper
    key={slides.map((s, index) => s.id || index).join('-')}
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    loop={slides.length > 1}
    className="portfolio-swiper h-auto! flex"
  >
    {slides.map((slide, index) => {
      let featuresList = slide.features || [];
      let techIconsList = slide.technologies || [];
      let displayDescription = slide.description || '';

      if (typeof window !== 'undefined' && typeof slide.description === 'string' && slide.description.includes('<')) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(slide.description, 'text/html');

        const pTag = doc.querySelector('p');
        if (pTag) displayDescription = pTag.textContent;

        if (featuresList.length === 0) {
          const listItems = doc.querySelectorAll('ul li');
          listItems.forEach((li) => featuresList.push(li.textContent));
        }

        if (techIconsList.length === 0) {
          const imgs = doc.querySelectorAll('.tech-icons img');
          imgs.forEach((img) => {
            if (img.src) {
              techIconsList.push({
                icon: img.src,
                name: img.alt && img.alt !== 'javascript:void(0);' ? img.alt : ''
              });
            }
          });
        }
      }

      return (
        <SwiperSlide key={slide.id || index} className="h-auto!">
          <div className="bg-[#F2F1FF] px-4 sm:px-6 md:px-12 py-8 sm:py-10 h-full flex flex-col justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 h-full items-center">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                    {slide.title}
                  </h3>

                  <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                    {displayDescription}
                  </p>

                  {featuresList.length > 0 && (
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                      {featuresList.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-700 shrink-0 stroke-[2.5]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {techIconsList.length > 0 && (
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                      {techIconsList.map((tech, i) => (
                        <div key={i} className="text-center">
                          <img
                            src={typeof tech === 'string' ? tech : tech.icon}
                            alt={tech.name || 'technology'}
                            className="w-8 h-8 sm:w-10 sm:h-10 mx-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/portfolio/${slide.slug}`}
                    className="inline-block w-full sm:w-auto"
                  >
                    <button className="group w-full sm:w-auto bg-[#184A8B] hover:bg-[#143d74] text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                      View Case Study
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center items-center h-full">
                {(slide.image || slide.image_url) && (
                  <img
                    src={slide.image_url || slide.image}
                    alt={slide.title}
                    className="w-full max-w-xs sm:max-w-sm object-contain max-h-87.5"
                  />
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
</section>
  );
}