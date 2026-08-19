"use client";
import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import { submitContactForm } from "@/services/send-call-request";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  portfolioSlides,
  bottomFeatures,
  slides,
  ServiceSectionData,
} from "../real-estate/data";
import {
  partners,
  technologies,
  stats,
  industries,
  services,
  faqsData,
  testimonials,
} from "../../../../utils/data";
import Image from "next/image";

export default function realEstate() {
  const [activeTab, setActiveTab] = useState("driver");
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    service_category: "",
    file: null,
    sendNda: false,
  });

  const [loading, setLoading] = useState(false);

  const [statusMessage, setStatusMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED");
    console.log("FORM DATA:", formData);

    setLoading(true);

    setStatusMessage({
      type: "",
      text: "",
    });

    try {
      // --------------------------------
      // CREATE FORMDATA
      // --------------------------------

      const payload = new FormData();

      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());

      payload.append(
        "is_nda",
        formData.sendNda ? "1" : "0"
      );

      payload.append(
        "service",
        formData.service || ""
      );

      payload.append(
        "service_category",
        formData.service_category || ""
      );

      // --------------------------------
      // FILE
      // --------------------------------

      if (formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      // --------------------------------
      // DEBUG PAYLOAD
      // --------------------------------

      console.log("FORM PAYLOAD:");

      for (const [key, value] of payload.entries()) {
        console.log(key, value);
      }

      // --------------------------------
      // API CALL
      // --------------------------------

      const response = await submitContactForm(payload);

      console.log("API SUCCESS:", response);

      // --------------------------------
      // SUCCESS MESSAGE
      // --------------------------------

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // --------------------------------
      // RESET FORM
      // --------------------------------

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        service_category: "",
        file: null,
        sendNda: false,
      });

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("API ERROR:", error);
      console.error(
        "API RESPONSE:",
        error?.response?.data
      );

      let errorMessage =
        "Failed to send message. Please try again later.";

      if (error?.response?.data?.errors?.file) {
        errorMessage =
          error.response.data.errors.file.join(" ");
      } else if (error?.response?.data?.message) {
        errorMessage =
          error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setStatusMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
                Real Estate App Development
                <br className="hidden sm:block" />
                That Turns Browsers Into Buyers
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                The way people search for their next home has changed for good. Today's buyers don't wait for open houses; they scroll, swipe, and shortlist properties from their phones before they ever step through a front door. As a trusted real estate app development company, we help brokerages, agents, and PropTech startups meet that shift head-on with mobile and web platforms built to convert interest into closed deals.

              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                From MLS and IDX integration to AI-driven property recommendations and immersive virtual tours, we build custom real estate apps that keep you ahead of an industry moving faster than ever. Whether you're a solo agent looking to modernize your listings or an enterprise brokerage overhauling legacy systems, our team delivers real estate software development backed by real technical depth not just a pretty interface.

              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                We also offer Virtual CTO support alongside our development services, so you get strategic technology guidance from day one not just code delivered on a deadline.

              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-gray-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                >
                  See Our Work
                  <ArrowRight className="w-4 h-4 text-gray-600 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 relative pt-6 pr-4">
              <div className="relative bg-[#F7F8FA] border border-blue-100/60  p-6 md:p-8 w-full shadow-lg">
                {/* Top Right Ribbon Badge */}
                <div className="absolute -top-6 -right-3 z-10 w-24 md:w-28 drop-shadow-md">
                  <img
                    src="/images/contact-form-logo.png"
                    alt="Same Day Response Guaranteed"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Form Heading */}
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
                  Request a Free Quote
                </h2>
                <p className="text-xs md:text-sm text-gray-600 font-medium mb-8">
                  Guaranteed Response within One Business Day!
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="flex items-center gap-2 text-xs md:text-sm text-black pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-black">
                      <Paperclip className="w-4 h-4 text-black" />
                      <span>Upload file:</span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-gray-500 truncate max-w-45">
                      {formData.file ? formData.file.name : "No file chosen."}
                    </span>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="nda"
                      checked={formData.sendNda}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          sendNda: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 border-gray-400 text-[#1E40AF] focus:ring-[#1E40AF] accent-gray-600 cursor-pointer"
                    />
                    <label
                      htmlFor="nda"
                      className="text-xs md:text-sm font-semibold text-black cursor-pointer select-none"
                    >
                      Please Send NDA
                    </label>
                  </div>

                  {statusMessage.text && (
                    <div
                      className={`p-3 rounded-md text-xs md:text-sm font-medium transition-all ${statusMessage.type === "success"
                        ? "bg-green-100 border border-green-400 text-green-800"
                        : "bg-red-100 border border-red-400 text-red-800"
                        }`}
                    >
                      {statusMessage.text}
                    </div>
                  )}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Schedule a free consultation"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Custom Real Estate App Development Built Around Your Business
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                No two real estate businesses look the same so your app shouldn&apos;t
                either. Our real estate app developers start with deep research into your
                specific market, your customers, and your competitors before writing a
                single line of code. Whether you run a boutique brokerage, manage a
                portfolio of rental properties, or operate one of the country&apos;s top
                real estate firms, a well-engineered real estate app development service
                isn&apos;t optional anymore; it&apos;s the difference between growing your
                business and losing leads to competitors who got there first.
              </p>

              <br />

              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Here&apos;s what makes our approach different:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
              {bottomFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <ChevronRight className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    <strong className="font-bold text-gray-900">
                      {item.title}
                    </strong>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mb-10">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="w-full h-64 sm:h-80 md:h-96  overflow-hidden shadow-sm">
            <img
              src="/images/custom-app-re.jpg"
              alt="Cost Calculation & Financial Planning"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="w-full bg-red-50 py-16 px-6 font-sans mt-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Looking to Hire Dedicated Team?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              We are team of talented, experienced, and certified designers and
              developers. Let us build something extraordinary.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-600 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
                  className="inline-flex items-center gap-1.5 transition-colors"
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
                  <a href="tel:+14697939837" className=" transition-colors">
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a href="tel:+16476379108" className=" transition-colors">
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Hire Dedicated Developers
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center mb-10 mt-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Delivery Of Unrivaled Solutions Is Our Prime Objective
            </h1>
            <p className="text-sm md:text-base text-black max-w-4xl mx-auto leading-relaxed">
              We can help you digitalize your real estate business with the best
              real estate mobile app. We are the leading mobile app development
              company that strives to fulfill your every desire through
              end-to-end solutions. We even have a family of qualified experts
              who constantly try to push their boundaries for you to reach new
              heights.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="mx-auto max-w-7xl">
            <style>{`
                .portfolio-swiper .swiper-pagination-bullet {
                  background-color: #cbd5e1 !important;
                  opacity: 1 !important;
                }
                .portfolio-swiper .swiper-pagination-bullet-active {
                  background-color: #dc2626 !important; /* Red color */
                }
              `}</style>
            <Swiper
              className="portfolio-swiper pb-12"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-125 object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                        {slide.title}
                      </h2>

                      <p className="text-gray-600 leading-7 lg:leading-8 mb-6 lg:mb-8">
                        {slide.description}
                      </p>

                      <div className="space-y-3 lg:space-y-4">
                        {slide.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex gap-3 items-baseline"
                          >
                            <ChevronRight size={16} />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-24">
          {ServiceSectionData.map((item, index) => {
            // Checking if index is odd to reverse layout dynamically
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dynamic Feature List */}
                  <ul className="space-y-4 pt-2">
                    {item.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-gray-900 font-semibold text-sm md:text-base"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-700 shrink-0 stroke-[3.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 min-h-87.5 sm:min-h-112.5 relative overflow-hidden shadow-sm">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <section className="w-full bg-red-50 py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp" // Update this path to match your icon asset
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
            <div className="w-full max-w-2xl bg-red-50 border border-red-600 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
                  className="inline-flex items-center gap-1.5 transition-colors"
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
                  <a href="tel:+14697939837" className=" transition-colors">
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a href="tel:+16476379108" className=" transition-colors">
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-16 text-center font-sans">
          {/* Heading & Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Features of Wellness and Fitness App Development
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
            The next-gen real estate app we provide will surely boost your
            everyday operation by the use of top features like:
          </p>

          {/* Main 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/doctor-patient-profile-icn.png"
                alt="Login & Profile Creation"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Social Media & User Profile
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/ril-icn.png"
                alt="Push Notification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Property List
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/search-h-icn.png"
                alt="Social Sharing"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Search
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/filter-h-icn.png"
                alt="Filter"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Filter
              </h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/categeory-icn.png"
                alt="Category"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Categories
              </h3>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/fav-icn.png"
                alt="Food and Calorie Tracker"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Favourite
              </h3>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/settings-h-icn.png"
                alt="Schedules and Calendar"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Settings
              </h3>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/map-h-icn.png"
                alt="Gamification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Map
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/upcoming-h-icn.png"
                alt="Gamification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                History
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/recommended-h-icn.png"
                alt="Gamification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Recommendation
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/push-h-icn.png"
                alt="Gamification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Push Notification
              </h3>
            </div>

            {/* Card 9 */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/revnues-h-icn.png"
                alt="Online Sessions"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Cost Calculator
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/calender-icn-new.png"
                alt="Chat"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Calendar
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/cm-icon.png"
                alt="Chat"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Call or Message
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/vtr-icon.png"
                alt="Chat"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Virtual Tour Request
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/view-icon.png"
                alt="Chat"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Viewing Request
              </h3>
            </div>
          </div>
        </section>

        <section className="w-full bg-red-50 py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              So, We Guess You want to talk about your Project
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-600 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
                  className="inline-flex items-center gap-1.5 transition-colors"
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
                  <a href="tel:+14697939837" className=" transition-colors">
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a href="tel:+16476379108" className=" transition-colors">
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Image Side */}
            <div className="w-full h-full min-h-87.5 sm:min-h-112.5 relative overflow-hidden shadow-sm">
              <img
                src="/images/our-developers.jpg"
                alt="Expert Logistics App Developers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content Side */}
            <div className="space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                We Turn Real Estate Ideas Into Apps People Actually Use
              </h2>

              <p>
                A great real estate app does more than display property listings. It helps
                buyers discover the right property, gives agents better ways to reach
                prospects, and turns complicated property searches into simple digital
                experiences. That&apos;s where our real estate app development expertise
                comes in.
              </p>

              <p>
                Our developers, designers, and strategists work together to build property
                apps around real user behavior and real business goals. From advanced
                property search and interactive maps to user profiles, property listings,
                lead management, and secure communication, we bring every essential piece
                together under one roof.
              </p>

              <p>
                Whether you&apos;re launching a property marketplace, building a platform
                for real estate agents, or taking an existing idea mobile, we create
                scalable real estate solutions designed to compete, convert, and grow with
                your business.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
          {/* Top Text Content */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              How Much Does It Cost to Build a Real Estate App?
            </h2>

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                There&apos;s no one-size-fits-all price for real estate app development.
                The investment depends on what you want your app to accomplish, from a
                straightforward property listing platform to a feature-rich marketplace
                with advanced search, maps, user accounts, chat, payments, and property
                management tools.
              </p>

              <p>
                The more functionality you add, the more development time, technology,
                and infrastructure your app may require. That&apos;s why we start with
                what matters most: your target audience, business model, core features,
                and the experience you want to deliver. This helps you invest in the
                features that create real value instead of paying for unnecessary
                complexity.
              </p>

              <p>
                Ready to turn your real estate app idea into a market-ready product?
                Share your requirements with our development team, and we&apos;ll help
                you define the right features, technology, and budget for your project.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/request-a-quote"
              className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
            >
              Get a Quotation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Banner Image */}
          <div className="w-full h-64 sm:h-80 md:h-96  overflow-hidden shadow-sm">
            <img
              src="/images/healthcare-app-built.jpg"
              alt="Cost Calculation & Financial Planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Success Stories Heading Section */}
          <div className="text-center max-w-4xl mx-auto space-y-3 pt-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Endeavors That Make Us Proud
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Devapp solutions has always been honored with valuable words for
              the efforts given on mobile app development that are efficiently
              unique and user centric. Here are some of the best examples for
              this.
            </p>
          </div>
        </section>
        <section className="w-full">
          {/* Custom styles to override Swiper pagination bullet colors to red */}
          <style>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background-color: #dc2626 !important; /* Red color */
        }
      `}</style>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="portfolio-swiper pb-12"
          >
            {portfolioSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                {/* Fixed height container for uniformity across slides */}
                <div className="bg-red-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10 h-auto lg:h-155 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold  mb-6 sm:mb-8">
                    {slide.heading}
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                        {slide.title}
                      </h3>

                      <p className="text-gray-700 leading-6 sm:leading-7 mb-4 text-sm sm:text-base line-clamp-3">
                        {slide.description}
                      </p>

                      <ul className="space-y-2 mb-4 text-sm sm:text-base">
                        {slide.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2 text-[#184A8B] font-bold">
                              ›
                            </span>{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
                        {slide.technologies.map((tech, i) => (
                          <div key={i} className="text-center">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-7 h-7 sm:w-8 sm:h-8 mx-auto object-contain"
                            />
                            <p className="text-xs sm:text-sm mt-1">
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <button className="group sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 py-3 font-semibold flex justify-center items-center gap-3 transition cursor-pointer ">
                          View Case Study
                          <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Fixed dimensions container for slide image to ensure equal sizing */}
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="w-full max-w-7xl mx-auto px-4 py-12 space-y-16">
          {/* Top CTA Banner Box */}
          <div className="bg-red-50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Check How We turn Your Idea into Innovative Product
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our rich portfolio justifies that we are one of the best
                logistics app development companies in the USA.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm py-3.5 px-6 transition-colors shrink-0"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Technology Stack Heading Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Technology Stack for Custom Logistics App Development
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our team of developers leave stones unturned in their quest to
              create usable apps with advanced features for companies, drivers,
              and consumers. We are equipped to handle different types of
              technology, and justly utilize them for our app development
              solutions.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 ">
            {/* Tabs */}
            <div className="flex justify-center mb-10 ">
              <div className="flex flex-wrap gap-8 border-b border-gray-300">
                {technologies.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActivetechnologies(index)}
                    className={`relative py-4 text-lg transition-all duration-200 cursor-pointer ${activetechnologies === index
                      ? "text-red-600 font-semibold"
                      : "text-gray-500 hover:text-red-600"
                      }`}
                  >
                    {tab.category}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 -bottom-px h-0.5 bg-red-700 transition-all duration-300 ${activetechnologies === index ? "w-full" : "w-0"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
              {technologies[activetechnologies].items.map((item, index) => (
                <div
                  key={index}
                  className="w-[49%] sm:w-[31%] md:w-[23%] lg:w-37.5 bg-white shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />

                  <h3 className="mt-3 text-sm sm:text-base font-medium text-center">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-red-50 py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp" // Update this path to match your icon asset
                alt="Custom Logistics App Support"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              We are Team of Talented, Experienced, and Certified Designers and
              Developers.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Let us Build Something Extraordinary.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-600 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                {/* Email link */}
                <a
                  href="mailto:info@DevAppGrid.com"
                  className="inline-flex items-center gap-1.5 transition-colors"
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
                  <a href="tel:+14697939837" className=" transition-colors">
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a href="tel:+16476379108" className=" transition-colors">
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Hire Dedicated Developers
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-3 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black mt-5">
              {" "}
              Offshore Web, Mobile & Software Development Company
            </h1>
            <p>
              Devapp solutions is a leading Software, Web, & Mobile App
              Development Company with a vast area of experience in crafting
              stunning and end to end encrypted technology solutions. We offer
              excellent expertise of the industry followed by an exactly planned
              approach to elevate your growth.
            </p>
          </div>
        </section>
        <section>
          <div className="flex flex-wrap justify-center gap-7 mt-24">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative w-full sm:w-70 lg:w-55 h-55 rounded-3xl border border-[#E7E7E7] bg-white px-6 pt-24 pb-8"
              >
                {/* Floating Icon */}
                <div className="absolute -top-8 right-0 w-25.5 h-25.5 rounded-[20px] border border-[#E7E7E7] bg-white flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-11 h-11 object-contain"
                  />
                </div>

                <h3 className="text-lg font-bold text-black leading-none">
                  {item.value}
                </h3>

                <p className="mt-3 text-lg leading-none text-black">
                  {item.line1}
                  <br />
                  {item.line2}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-10 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              Industries We Serve
            </h1>
            <p>
              Our real estate app offering a feature-rich experience and
              unmatched performance has connected us with real estate tycoons.
              We have been with them their entire journey, and it was a
              beautiful experience with them.
            </p>
          </div>
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
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-10 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              Why Choose Us?
            </h1>
            <p>
              Devapp is the dominant real estate mobile app development company
              that provides multiple support to users, has tech-infused
              offerings, agile methodology, and whatnot. We are dedicated to
              enhancing the experience of the buyers and real estate firms by
              incorporating every need and mixing it with a perfect blend:{" "}
            </p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-red-200 p-6 sm:p-8 transition-all duration-300 hover:border-red-600 hover:shadow-lg"
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
        <section>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Client Testimonials
            </h1>
            <p>
              Our top priority from the beginning has always been customer
              satisfaction, and it feels good when the clients feel the same. So
              here are the words of some of our clients who have enjoyed working
              with us:
            </p>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
          <style>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background-color: #dc2626 !important; /* Red color */
        }
      `}</style>
          {/* Outer Card Wrapper with Fixed Border & Accent */}
          <div className="relative bg-white border border-red-300 p-8 md:p-10  shadow-sm hover:border-red-600 transition-all duration-300">
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
                      <div className="w-16 h-16 rounded-full border border-gray-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain rounded-full"
                          onError={(e) => {
                            e.target.src =
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
                          e.target.src =
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
                className="custom-prev bg-red-700 hover:bg-red-600 text-white p-3 rounded-none transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                className="custom-next bg-red-700 hover:bg-red-600 text-white p-3 rounded-none transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
        <section>
          {/* Heading */}
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-4 mt-2">
              Frequently Asked Questions
            </h1>

            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
              We deal with some common questions about real estate web
              applications every day. If you too have questions relating to
              them, you can refer to it below:
            </p>
          </div>

          {/* FAQ */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="space-y-4">
                {faqsData.map((faq, index) => (
                  <div
                    key={index}
                    className={`border bg-white transition-all duration-300 ${open === index
                      ? "border-gray-200 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpen(open === index ? -1 : index)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="text-lg font-medium text-black">
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${open === index
                          ? "rotate-180 text-black"
                          : "rotate-0 text-black"
                          }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${open === index
                        ? "max-h-150 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-6 pb-5 pt-4 border-t border-gray-100">
                        <p className="text-[17px] leading-8 text-gray-600">
                          {faq.answer}
                        </p>

                        {faq.points && (
                          <ul className="mt-5 space-y-4">
                            {faq.points.map((point, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[17px] leading-8 text-gray-700 items-center m-0"
                              >
                                <ChevronRight
                                  size={18}
                                  className="mt-1 text-black shrink-0"
                                />

                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-4 mt-3 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              Have Something in Mind? Let's Talk
            </h1>
            <p>
              Have a look at the services and development process of the Devapp
              solution. See What process we follow for mobile app and software
              development. Have a look at how we are praised by our clients
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
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
