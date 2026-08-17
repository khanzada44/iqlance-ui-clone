"use client";
import { ArrowLeft, ArrowRight, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  blogs,
  servicesData,
  processSteps,
  portfolioSlides,
  slides,
  services,
} from "../home/services-data";
import {
  partners,
  stats,
  industries,
  testimonials,
} from "../../../../utils/data";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -4,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  } as any,
};
export default function Home() {
  const icons = [
    "/icons/linkedin-icn.svg",
    "/icons/twitter-icon.svg",
    "/icons/email-icon.svg",
    "/icons/hubspot.svg",
  ];
  const img_services = [
    { id: 1, src: "/images/Screenshot_1.jpg", alt: "Machine Learning" },
    { id: 2, src: "/images/Screenshot_2.jpg", alt: "Mobile Development" },
    { id: 3, src: "/images/Screenshot_3.jpg", alt: "Microsoft 365" },
    { id: 4, src: "/images/Screenshot_4.jpg", alt: "Microsoft .NET" },
    { id: 5, src: "/images/Screenshot_5.jpg", alt: "Flutter App Development" },
    { id: 6, src: "/images/Screenshot_6.jpg", alt: "Artificial Intelligence" },
    {
      id: 7,
      src: "/images/Screenshot_7.jpg",
      alt: "React Native App Development",
    },
    { id: 8, src: "/images/Screenshot_8.jpg", alt: "Python Development" },
    { id: 9, src: "/images/Screenshot_9.jpg", alt: "Web Development" },
  ];
  return (
    <>
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 px-2 sm:px-4 py-6 sm:py-8 font-sans">
            <p className="text-black text-base sm:text-lg font-medium mb-1">
              Let's turn your ideas into digital products
            </p>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
            Leading Mobile App
            <br className="hidden sm:block" />
            and Software Development Company
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

            {/* FEATURES */}
            <div>
              <div className="flex items-center gap-2 pt-4 md:pt-6">
                <ChevronRight
                  size={14}
                  className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                />

                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Industry Specific Dedicated Developers
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 md:pt-6">
                <ChevronRight
                  size={14}
                  className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                />

                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Customized App with Affordable Price
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 md:pt-6">
                <ChevronRight
                  size={14}
                  className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                />

                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Provide Risk-Free Trial for 1 Week
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 md:pt-6">
                <ChevronRight
                  size={14}
                  className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-1"
                />

                <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  Flexible Engagement Models
                </p>
              </div>

              <div>
                {/* Links List - Ek line mein rakhne ke liye whitespace-nowrap aur items-center */}
                <div className="pt-6 px-1 sm:px-4">
                  <ul className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 font-bold">
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

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-6">
                  <Link href="/contact-us" className="w-full sm:w-auto">
                    <button className="group w-full bg-red-700 hover:bg-red-600 text-white px-6 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer whitespace-nowrap">
                      Schedule Your Free Consultation
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                      />
                    </button>
                  </Link>

                  <Link href="/portfolio" className="w-full sm:w-auto">
                    <button className="group w-full sm:w-auto border border-gray-300 hover:border-red-700 px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer whitespace-nowrap">
                      Our work
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
        IMAGE GRID
    ========================================================= */}

          <div className="w-full lg:w-1/2 flex px-4">
            <section className="w-full py-10 px-0">
              <div className="w-full">
                <motion.div
                  className="grid grid-cols-3 gap-0 overflow-hidden w-full"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {img_services.map((item, index) => {
                    const redCards = [1, 3, 5, 7];

                    const isRed = redCards.includes(index);

                    return (
                      <motion.div
                        key={item.id}
                        variants={cardVariants}
                        whileHover={{
                          scale: 1.04,
                          zIndex: 10,
                          transition: {
                            duration: 0.25,
                          },
                        }}
                        className={`
                    group
                    relative
                    aspect-square
                    overflow-hidden
                    flex
                    items-center
                    justify-center
                    border
                    border-white
                    ${isRed ? "bg-linear-to-b from-white" : "bg-white"}
                  `}
                      >
                        <motion.div
                          className="relative w-[75%] h-[75%]"
                          whileHover={{
                            scale: 1.08,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 33vw, 16vw"
                            className="object-contain"
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </section>
          </div>
        </div>

        {/* =========================================================
      STATS BAR
  ========================================================= */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 px-2 sm:px-4 py-6 sm:py-8 mt-10 mb-10">
          {/* CLIENT RETENTION */}
          <div className="text-center flex flex-col items-center justify-center">
            <div className="flex items-end gap-1">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                96
              </p>

              <span>%</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Client Retention
            </p>
          </div>

          {/* SAAS */}
          <div className="text-center flex flex-col items-center justify-center">
            <div className="flex items-end gap-1">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                19
              </p>

              <span>+</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              SaaS Built
            </p>
          </div>

          {/* NORTH DALLAS */}
          <div className="flex items-center justify-center">
            <img
              className="max-w-25 sm:max-w-32.5 lg:max-w-40 w-full h-auto object-contain"
              src="/images/North-Dallas-Chamber-Logo.png"
              alt="North Dallas Chamber Logo"
            />
          </div>

          {/* ISO */}
          <div className="flex items-center justify-center">
            <img
              className="w-14 sm:w-16 md:w-20 lg:w-24 h-auto object-contain"
              src="/images/iso-1080x675-1.png"
              alt="ISO Certification"
            />
          </div>

          {/* CLUTCH */}
          <div className="flex items-center justify-center">
            <img
              className="max-w-22.5 sm:max-w-27.5 lg:max-w-35 w-full h-auto object-contain"
              src="/images/clutch-logo-update.png.webp"
              alt="Clutch Logo"
            />
          </div>

          {/* INDUSTRIES */}
          <div className="text-center flex flex-col items-center justify-center">
            <div className="flex items-end gap-1">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                15
              </p>

              <span>+</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Industries
            </p>
          </div>

          {/* PROJECT START */}
          <div className="text-center flex flex-col items-center justify-center col-span-2 sm:col-span-1">
            <div className="flex items-end gap-1">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                24
              </p>

              <span>Hrs</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Project Start
            </p>
          </div>
        </div>

        <div className="mt-10 mb-10 w-full">
          <Swiper
            className="portfolio-swiper"
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 300000,
            }}
            loop={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 items-start gap-8 px-1 lg:grid-cols-2 lg:gap-12">
                  {/* LEFT */}
                  <div>
                    <h2 className="mt-8 text-2xl font-bold leading-snug">
                      {slide.title}
                    </h2>

                    <p className="mt-3 text-xs leading-6 text-black sm:text-sm">
                      {slide.description1}
                    </p>

                    <p className="mt-3 mb-6 text-xs leading-6 text-black sm:mb-10 sm:text-sm sm:leading-8">
                      {slide.description2}
                    </p>

                    <div className="space-y-5">
                      {slide.services.map((service, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-1 gap-1 md:grid-cols-[30%_70%] md:gap-8 m-0"
                        >
                          <span className="text-xl font-extrabold text-red-700">
                            {service.title}
                          </span>

                          <ul className="list-disc space-y-2 pl-5 text-sm">
                            {service.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-center lg:items-start">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
                    />

                    <div className="mt-6 w-full text-center sm:mt-8 lg:text-left">
                      <h3 className="text-lg font-bold leading-snug text-red-700 sm:text-xl">
                        {slide.consultation}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        (We sign NDA)
                      </p>

                      <Link
                        href="/lets-talk"
                        className="group mt-2 flex w-full items-center justify-center gap-3 bg-red-700 px-8 py-4 font-semibold text-white transition hover:bg-red-600 sm:w-fit"
                      >
                        Let's Talk
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
    .portfolio-swiper .swiper-pagination-bullet {
      background-color: #cbd5e1 !important;
      opacity: 1 !important;
    }

    .portfolio-swiper .swiper-pagination-bullet-active {
      background-color: #dc2626 !important;
    }
  `}</style>
        </div>

        <div className="w-full px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/travis_h.png"
                alt="Travis H"
                className="w-48 sm:w-64 md:w-72 lg:w-85 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 leading-tight">
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
                <button className="border border-red-600 px-4 sm:px-6 py-3 text-base sm:text-xl font-semibold transition flex gap-1.5 items-center w-full sm:w-auto justify-center">
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
                  />
                  US : +1 469 793 9837
                </button>
              </div>

              <div className="mt-4 sm:mt-5 flex justify-center lg:justify-start">
                <Link
                  href="/lets-talk"
                  className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer"
                >
                  Schedule a Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 text-2xl sm:text-3xl text-[#184A8B] justify-center lg:justify-start">
                <i className="ri-linkedin-fill"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-mail-fill"></i>
                <i className="ri-share-line"></i>
              </div>
            </div>
          </div>

          {/* ICONS */}
          <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 text-xl sm:text-2xl text-[#184A8B] justify-center">
            <div className="flex gap-4">
              {icons.map((src, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
                  style={{
                    maskImage: `url(${src})`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskImage: `url(${src})`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                  }}
                />
              ))}
            </div>
          </div>

          {/* SERVICES INTRO */}
          <div className="w-full mt-8 sm:mt-5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Services We Offer
            </h2>

            <p className="mt-4 sm:mt-6 w-full text-sm sm:text-base md:text-lg text-black leading-5 sm:leading-9">
              From custom software and mobile app development to AI solutions,
              cloud consulting, and IT staff augmentation, iQlance delivers
              technology services that help businesses innovate, improve
              efficiency, and speed up growth. Our experts build secure,
              scalable, and future-ready digital solutions customized to your
              business goals and industry needs.
            </p>
          </div>
        </div>

        <section className="w-full px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-12 sm:w-16 sm:h-16 object-contain mb-4 sm:mb-6"
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

        <div className="w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="portfolio-swiper"
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 300000,
            }}
            loop={true}
          >
            {portfolioSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-red-100 px-4 py-8 sm:px-6 sm:py-10 md:px-12">
                  <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* LEFT */}
                    <div className="flex flex-col">
                      <h2 className="mb-6 text-center text-xl font-bold sm:mb-10 sm:text-2xl md:text-4xl">
                        {/* {slide.heading} */}
                      </h2>

                      <h3 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-4xl">
                        {slide.title}
                      </h3>

                      <p className="mb-8 text-lg leading-8 text-black sm:mb-10 sm:text-xl">
                        {slide.description}
                      </p>

                      <ul className="mb-6 space-y-3 text-sm sm:mb-8 sm:space-y-4 sm:text-base">
                        {slide.features.map((feature, i) => (
                          <li key={i} className="flex gap-2">
                            <ChevronRight
                              size={14}
                              className="mt-1 h-4 w-4 shrink-0 text-black md:h-5 md:w-5"
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* TECHNOLOGIES */}
                      <div className="mb-6 flex flex-wrap gap-6 sm:mb-8 sm:gap-8">
                        {slide.technologies.map((tech, i) => (
                          <div key={i} className="text-center">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="mx-auto h-8 w-8 object-contain sm:h-9 sm:w-9"
                            />

                            <p className="mt-2 text-xs sm:text-sm">
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <button className="group flex w-full cursor-pointer items-center justify-center gap-3 bg-red-700 px-8 py-4 font-semibold text-white transition hover:bg-red-600 sm:w-fit">
                        View Case Study
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full">
                      <div className="h-70 w-full sm:h-95 md:h-112.5 lg:h-full lg:min-h-125">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="block h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* SWIPER PAGINATION */}
          <style>{`
    .portfolio-swiper .swiper-pagination-bullet {
      background-color: #cbd5e1 !important;
      opacity: 1 !important;
    }

    .portfolio-swiper .swiper-pagination-bullet-active {
      background-color: #dc2626 !important;
    }
  `}</style>
        </div>

        <div className="w-full bg-red-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10 mt-10 mb-10">
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
              <Link
                href="/contact-us"
                className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
              >
                Schedule a free consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full text-center pt-2 mt-10 mb-10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight px-2">
            Driving Innovation with AI & Emerging Tech
          </h1>
        </div>

        <div className="mt-10 mb-15 w-full pt-2">
          <div className="overflow-hidden bg-red-50">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
              {/* IMAGE */}
              <div className="h-full min-h-75 lg:min-h-125">
                <img
                  src="/images/AI_Development_Company-2.png"
                  alt="AI Development Company"
                  className="block h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex items-center p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-base leading-relaxed text-black sm:text-lg md:text-xl">
                    We help businesses accelerate digital transformation by
                    building intelligent, secure, and future-ready solutions
                    powered by next-generation technologies.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-700 sm:leading-9">
                    From artificial intelligence (AI), generative AI (GenAI),
                    agentic AI, and machine learning (ML) to cloud computing,
                    data science & analytics, and cybersecurity, our experts
                    craft innovative solutions that solve complex business
                    challenges.
                  </p>

                  <p className="mt-2 text-sm leading-7 text-gray-700 sm:leading-9">
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

        <section className="w-full bg-red-50 py-10 sm:py-12 px-4 sm:px-6 md:px-12 mt-5 pt-2">
          <div className="w-full mx-auto text-center">
            <img
              src="/images/letdiscuss-icon.png.webp"
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
            <div className="flex justify-center">
              <div className="w-full max-w-165 md:w-[80%] mt-6 sm:mt-8 border border-red-300 px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row justify-center items-center gap-3 text-sm sm:text-base md:text-lg">
                {/* EMAIL */}
                <span className="font-semibold flex gap-1 items-center">
                  <div
                    className="w-6 h-6 bg-red-600 shrink-0"
                    style={{
                      maskImage: "url(/icons/email-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/email-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  />
                  info@iqlance.com
                </span>

                <span className="block">or</span>

                {/* PHONE */}
                <span className="flex flex-wrap gap-1 items-center justify-center">
                  <div
                    className="w-6 h-6 bg-red-600 shrink-0"
                    style={{
                      maskImage: "url(/icons/phone-icon.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/phone-icon.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  />
                  US :<strong>+1 469 793 9837</strong>, CA :
                  <strong>+1 647 637 9108</strong>
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/lets-talk"
                className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
              >
                Let's Discuss
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto text-center mt-10 sm:mt-14 px-3 mb-10">
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
        <section className="mb-10 max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={24}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id} className="h-auto!">
                {/* Sirf Hover Par Border Dikhega */}
                <div className="border border-transparent hover:border-red-600 hover:shadow-lg transition-all duration-300 rounded-none p-6 sm:p-8 h-full bg-white flex flex-col justify-between cursor-pointer">
                  <div>
                    {/* Icon */}
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10 object-contain mb-6"
                    />

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex">
                    <Link
                      href="/lets-talk"
                      className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
                    >
                      <span>{service.button || "Hire Now"}</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* APPROACH HEADER */}
        <div className="px-3 mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-10">
            Our Design and Development Approach
          </h1>
          <p className="max-w-5xl mx-auto text-center text-black mt-5 sm:mt-6 leading-5 sm:leading-8 text-sm sm:text-base font-semibold">
            Every successful digital solution starts with a clear strategy and a
            structured process. Whether you're building a mobile app, custom
            software, web application, or AI-powered solution, we follow a
            proven development approach that minimizes risk, streamlines
            delivery, and ensures the final product aligns with your business
            goals.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="group relative border border-gray-100 rounded-3xl sm:rounded-[30px] bg-white pt-16 sm:pt-20 pb-6 sm:pb-8 px-5 sm:px-8 hover:shadow-xl transition-all duration-300 mb-10"
                >
                  {/* Floating Icon */}
                  <div className="absolute -top-8 sm:-top-10 right-5 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24  border-2 border-gray-300  rounded-2xl flex items-center justify-center transition-all duration-300">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 object-contain"
                    />
                  </div>

                  <div className="flex items-start gap-3 sm:gap-5">
                    {/* Number Box */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 group-hover:bg-red-600 rounded-tr-2xl rounded-br-2xl flex items-center justify-center shrink-0 transition-all duration-300">
                      <span className=" group-hover:text-white text-xl sm:text-2xl font-bold">
                        {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold leading-tight text-black transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-5 sm:mt-8 text-sm sm:text-base text-[#555] leading-7 sm:leading-8 font-semibold transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              Client Testimonials
            </h1>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
          {/* Outer Card Wrapper with Fixed Border & Accent */}
          <div className="relative bg-white border border-red-200 p-8 md:p-10  shadow-sm hover:border-red-600 transition-all duration-300">
            {/* Left Blue Accent Line (Static) */}
            <div className="absolute top-0 left-0 bottom-0  z-10" />

            {/* Swiper Slider Component */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              className="w-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    {/* Top User Info & Rating Section */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Avatar Circle */}
                      <div className="w-16 h-16  border border-gray-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain "
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
                          }}
                        />
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {item.name}
                        </h4>
                        {/* Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(item.review)].map((_, index) => (
                            <Star
                              key={index}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 max-w-4xl font-normal">
                      {item.review}
                    </p>

                    {/* Google Verified Branding */}
                    <div className="space-y-1 pb-2 md:pb-0">
                      <span className="text-xs text-gray-500 font-medium block">
                        verified
                      </span>
                      <img
                        src={item.verifiedImage}
                        alt="Google Logo"
                        className="h-7 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* STATIC NAVIGATION BUTTONS (Outside Swiper, inside Outer Card) */}
            <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 flex items-center gap-2 z-20">
              <button
                className="custom-prev bg-red-700 hover:bg-red-600 text-white p-3  transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="custom-next bg-red-700 hover:bg-red-600 text-white p-3  transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
        {/* INDUSTRIES */}
        <section>
          <div className="text-center max-w-xl mx-auto space-y-5 mt-10 mb-10">
            <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-gray-900">
              Why Businesses Trust Us
            </h1>
            <p className="text-xl text-gray-900">
              We help businesses of all sizes turn ideas into high-performance
              digital solutions. Our developers use cutting-edge technologies to
              deliver measurable results, on time and within budget.
            </p>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap justify-center gap-7 mt-24 mb-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative w-full sm:w-70 lg:w-45 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-10 pb-6"
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
        <section className="w-full bg-red-50 py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.png.webp" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Get Started?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-300  py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
                  className="inline-flex items-center gap-1.5 hover:text-red-600  transition-colors"
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

                <span className="text-gray-900 font-normal">or</span>

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
                    className="hover:text-red-600 transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="hover:text-red-600 transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}

            <div className="flex justify-center">
              <Link
                href="/lets-talk"
                className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
              >
                Let's Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              Industries We Serve
            </h2>

            <p className="max-w-6xl mx-auto text-center text-gray-600 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
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
            <div className="bg-red-100 p-6 sm:p-8 md:p-12 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Schedule an interview and Get 7 Days Free Trial
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6">
                Ready to Hire Top Rated Dedicated Developers to Build your Next
                Great Idea?
              </p>

              <div className="flex justify-center lg:justify-start mt-8">
                <Link
                  href="/lets-talk"
                  className="group mt-6 sm:mt-8 bg-white text-black px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-50 transition w-full sm:w-auto"
                >
                  Hire Developers
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>

            <div className="bg-red-300 p-6 sm:p-8 md:p-12 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Can't find a service you are looking for?
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6">
                Our rich portfolio justifies that, we are one of the best
                software development and app development company in USA and
                Canada.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/lets-talk"
                  className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
                >
                  Let's Discuss
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="py-4">
          <div className="bg-red-50 overflow-hidden">
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

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/globe-vector.png.webp"
                  alt="Globe"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-130 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL DISCUSS CTA */}
        <section className="bg-red-50 py-10 sm:py-12 px-4 sm:px-6 md:px-12 mt-5 pt-2">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/images/letdiscuss-icon.png.webp"
              alt="Hire Team"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 object-contain"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Let's Discuss with our Technical Expert to Bring your Idea into
              Reality.
            </h2>

            <p className="mt-4 sm:mt-5 text-gray-700 text-base sm:text-lg">
              Send your Requirements on
            </p>

            <div className="mt-6 sm:mt-8 border border-red-300 px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row justify-center items-center gap-3 text-sm sm:text-base md:text-lg">
              <span className="font-semibold flex gap-1 items-center">
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
                info@iqlance.com
              </span>

              <span className="hidden md:block">or</span>

              <span className="flex flex-wrap gap-1 items-center justify-center">
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
                US :<strong> +1 469 793 9837</strong>, CA :
                <strong> +1 647 637 9108</strong>
              </span>
            </div>

            <div className="flex justify-center">
              <Link
                href="/lets-talk"
                className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
              >
                Let's Discuss
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* BLOGS */}
        <div className="px-3 mt-10">
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

                    <h3 className="text-base sm:text-[20px] leading-7 sm:leading-8 font-medium text-gray-900 hover:text-red-500 cursor-pointer transition">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="/blog"
                className="group mt-6 sm:mt-8 bg-red-700 text-white px-6 py-3 font-semibold flex items-center justify-center gap-3 hover:bg-red-600 transition w-full sm:w-auto"
              >
                All Blogs
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
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
