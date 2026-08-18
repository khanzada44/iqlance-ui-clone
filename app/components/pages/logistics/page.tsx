"use client";

import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../contactForm/ContactForm";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Mail,
  Paperclip,
  Phone,
  Star,
} from "lucide-react";
import {
  ServiceSectionData,
  featuresTabsData,
  portfolioSlides,
  slides,
  testimonials,
  services
} from "../logistics/data";
import {
  partners,
  technologies,
  stats,
  industries,
  faqsData,
} from "../../../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { submitContactForm } from "@/services/send-call-request";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getBlogs } from "@/services/blog";

export default function Logistic() {
  const [activeTab, setActiveTab] = useState<string>("driver");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState<number>(-1);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const currentTab =
    featuresTabsData.find((tab) => tab.id === activeTab) || featuresTabsData[0];
  // Form State
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
    service: string;
    service_category: string;
    file: File | null;
    sendNda: boolean;
  }>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    service_category: "",
    file: null,
    sendNda: false,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = new FormData();
      payload.append("name", formData.name || "");
      payload.append("email", formData.email || "");
      payload.append("phone", formData.phone || "");
      payload.append("message", formData.message || "");
      payload.append("is_nda", formData.sendNda ? "1" : "0");
      payload.append("service", formData.service || "");
      payload.append("service_category", formData.service_category || "");

      // File ko tabhi payload me append karein jab ye valid File instance ho
      if (formData.file && formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      await submitContactForm(payload);

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      // Reset Form State
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

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error: any) {
      console.error("API Error Response:", error?.response?.data);

      // Backend Error response handling
      let errorMsg = "Failed to send message. Please try again later.";
      if (error?.response?.data?.errors?.file) {
        errorMsg = error.response.data.errors.file.join(" ");
      } else if (error?.response?.data?.message) {
        errorMsg = error.response.data.message;
      }

      setStatusMessage({
        type: "error",
        text: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (statusMessage.text) {
      const timer = setTimeout(() => {
        setStatusMessage({ type: "", text: "" });
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount or state change
    }
  }, [statusMessage.text]);

  // Section 1 Bullet Points
  const topBulletPoints = [
    "On-demand transportation and courier apps",
    "Fleet management and route optimization apps",
    "Warehouse and inventory tracking apps",
    "Real-time shipment tracking and delivery apps",
    "Freight and cargo management apps",
  ];

  // Section 2 Feature Items
  const bottomFeatures = [
    {
      title: "Real-time tracking and route optimization:",
      description:
        "Reduce delays and fuel costs with real-time vehicle tracking and intelligent route optimization.",
    },
    {
      title: "Seamless system integration:",
      description:
        "Connect your logistics app with existing fleet and warehouse management systems for smooth and efficient operations.",
    },
    {
      title: "Automated dispatch and scheduling:",
      description:
        "Improve operational efficiency with automated dispatching, scheduling, and task management.",
    },
    {
      title: "Secure and scalable architecture:",
      description:
        "Build a secure and scalable logistics solution that can adapt and grow alongside your business needs.",
    },
  ];

  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
                Logistics App
                <br className="hidden sm:block" />
                Development Company
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Whether it's building an all-in-one logistics management platform or a
                specialized transportation solution, our team of experienced developers is
                ready to bring your project to life. We craft custom apps designed to
                simplify logistics operations and make transportation management more efficient than ever.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                By combining the latest technologies with proven development practices,
                we deliver logistics apps that
                streamline processes and improve everyday operations for businesses like yours.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Our logistics app development services include:
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 pt-2">
                {topBulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap- font-semibold text-gray-800 text-base md:text-lg"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md cursor-pointer"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-red-100 font-semibold px-6 py-3 transition duration-200 shadow-sm cursor-pointer"
                >
                  See Our Work
                  <ArrowRight className="w-4 h-4 text-gray-600 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 relative pt-6 pr-4">
              <div className="relative bg-[#F7F8FA] border border-blue-100/60 rounded-2xl p-6 md:p-8 w-full shadow-lg">
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
                  Book a Free Consultation
                </h2>
                <p className="text-xs md:text-sm text-gray-600 font-medium mb-8">
                  Guaranteed Response within One Business Day!
                </p>

                {/* Form Inputs */}
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

        <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 border-t border-gray-100">
          {/* Top Heading */}
          <div className="text-center max-w-6xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Transportation and Logistics App Development Company for Western
              Businesses
            </h2>

            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed text-center">
              <p>
                For companies across the West, we develop custom software solutions built
                for the transportation and logistics industry. Our apps are designed to
                make operations run more smoothly, improve overall efficiency, and cut
                down on delays across the supply chain, all while giving businesses
                better visibility and control over their logistics processes.
              </p>

              <p>
                We take the time to understand what makes each company unique, tailoring
                our approach so that every app we build reflects the specific goals and
                operational needs of the business we&apos;re working with.
              </p>
            </div>
          </div>

          {/* Middle Banner Image */}
          <div className="w-full my-12 overflow-hidden">
            <Image
              src="/images/logistics-fullwidth.jpg" // Put your image in /public/images/
              alt="Transportation and Logistics Modes"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Bottom Heading & 2-Column Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Logistics App Development Solutions for Modern Transportation
                Challenges
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Developing user-friendly apps for businesses in the transportation and
                logistics sector is what we specialize in. From concept through
                deployment, we manage the complete process, taking care of every stage so
                businesses can concentrate on running their operations while we handle
                the technical side of building an effective logistics management
                solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
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
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-12 md:mt-20 bg-red-50 rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Build a Custom Logistics App for Your Business?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Partner with our logistics app development company to create
                scalable, feature-rich logistics mobile applications tailored to
                your needs.
              </p>

              {/* Contact Box */}
              <div className="flex justify-center">
                <div className="w-[80%] mt-8 border border-red-500 bg-red-50 p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                  <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
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
                    <span className="font-medium text-sm sm:text-base">
                      info@DevAppGrid.com
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                    <div
                      className="w-6 h-6 bg-red-600"
                      style={{
                        maskImage: "url(/icons/phone-icon.svg)",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: "url(/icons/phone-icon.svg",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    ></div>
                    <span className="font-medium text-sm sm:text-base leading-6">
                      US: +1 469 793 9837
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline"> | </span>
                      CA: +1 647 637 9108
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Request a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-7xl">
            {/* Custom CSS for red pagination dots */}
            <style>{`
              .portfolio-swiper .swiper-pagination-bullet {
                background-color: #cbd5e1 !important;
                opacity: 1 !important;
              }
              .portfolio-swiper .swiper-pagination-bullet-active {
                background-color: #dc2626 !important; /* Red Color */
              }
            `}</style>

            <Swiper
              className="portfolio-swiper pb-12"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 30000,
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
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-155 object-cover"
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
                            <ChevronRight size={18} />
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
                        <ChevronRight className="w-4 h-4 text-gray-700 shrink-0 stroke-[2.5]" />
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

        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-12 md:mt-20 bg-red-50 rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Build a Custom Logistics App?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Partner with our logistics app development company to streamline
                fleet management, delivery tracking, and supply chain
                operations.
              </p>

              {/* Contact Box */}
              <div className="flex justify-center">
                <div className="w-[80%] mt-8 border border-red-500 bg-red-50 p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                  <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
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
                    <span className="font-medium text-sm sm:text-base">
                      info@DevAppGrid.com
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                    <div
                      className="w-6 h-6 bg-red-600"
                      style={{
                        maskImage: "url(/icons/phone-icon.svg)",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: "url(/icons/phone-icon.svg",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    ></div>
                    <span className="font-medium text-sm sm:text-base leading-6">
                      US: +1 469 793 9837
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline"> | </span>
                      CA: +1 647 637 9108
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Let’s Discuss Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
          {/* Section Header */}
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Key Features of Logistics and Transportation App Development
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Our logistics app solutions come packed with powerful features that
              help you manage every aspect of your operations in a streamlined, organized way.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center  mb-10 overflow-x-auto">
            <div className="flex gap-8 border-b border-red-200">
              {featuresTabsData.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-sm md:text-base font-semibold transition-all relative cursor-pointer whitespace-nowrap ${isActive
                      ? "text-red-900 border-b-2 border-red-600 font-bold"
                      : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentTab.features.map((feature) => (
              <div
                key={feature.id}
                className="border border-gray-200 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow bg-white min-h-35"
              >
                {/* Feature Icon */}
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                    // Fallback icon placeholder if image missing
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/48?text=Icon";
                    }}
                  />
                </div>
                {/* Feature Title */}
                <h3 className="text-sm md:text-base font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-12 md:mt-20 bg-red-50 rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Build a Custom Logistics App?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Partner with our logistics app development company to streamline
                fleet management, delivery tracking, and supply chain
                operations.
              </p>

              {/* Contact Box */}
              <div className="flex justify-center">
                <div className="w-[80%] mt-8 border border-red-500 bg-red-50 p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                  <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
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
                    <span className="font-medium text-sm sm:text-base">
                      info@DevAppGrid.com
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                    <div
                      className="w-6 h-6 bg-red-600"
                      style={{
                        maskImage: "url(/icons/phone-icon.svg)",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: "url(/icons/phone-icon.svg",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    ></div>
                    <span className="font-medium text-sm sm:text-base leading-6">
                      US: +1 469 793 9837
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline"> | </span>
                      CA: +1 647 637 9108
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Let’s Discuss Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
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
                Trusted Logistics App Development Company with Proven Technical Expertise
              </h2>

              <p>
                Our team brings extensive, hands-on experience across a broad spectrum of
                technologies, positioning us as a reliable logistics app development
                partner for businesses of every size.
              </p>

              <p>
                We follow a client-first development process, taking the time to fully
                understand your business objectives before a single line of code is
                written. This ensures every logistics software solution we deliver is
                custom-built around your operational needs, never a one-size-fits-all
                template.
              </p>

              <p>
                Innovation drives everything we do. Our developers stay at the forefront of
                emerging technologies, refining our development methodologies and adapting
                to shifting industry standards to deliver future-ready logistics app
                solutions that keep your business competitive.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
          {/* Top Text Content */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              How Much Does It Cost to Build a Custom Logistics App?
            </h2>

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                The cost to develop a logistics app depends on multiple factors: the
                features you require, your preferred technology stack, third-party
                integrations, and overall project scope. For an accurate, tailored
                estimate, schedule a free consultation with our logistics app development
                experts.
              </p>

              <p>
                There&apos;s no fixed price for logistics app development; every project
                is scoped around your business&apos;s unique operational demands,
                scalability requirements, and long-term growth goals. Our transparent
                pricing model ensures you invest only in the features that drive real
                value for your business.
              </p>
            </div>
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
          <div className="text-center max-w-5xl mx-auto space-y-3 pt-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Explore Our Logistics App Development Success Stories
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our portfolio reflects our commitment to delivering high-performance
              logistics software solutions.
              Take a look at some of the projects that showcase our expertise in action.
            </p>
          </div>
        </section>
        <section className="py-10">
          {/* Custom style for red pagination dots */}
          <style>{`
            .portfolio-swiper .swiper-pagination-bullet {
              background-color: #cbd5e1 !important;
              opacity: 1 !important;
            }
            .portfolio-swiper .swiper-pagination-bullet-active {
              background-color: #dc2626 !important; /* Red Color */
            }
          `}</style>

          <div className="mx-auto max-w-7xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 300000 }}
              loop={true}
              className="portfolio-swiper w-full h-162.5 sm:h-150 pb-12 [&_.swiper-slide]:h-full!"
            >
              {portfolioSlides.map((slide, index) => (
                <SwiperSlide key={index} className="h-full!">
                  <div className="bg-red-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10 h-full flex flex-col justify-between overflow-hidden">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4 shrink-0">
                      {slide.heading}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center flex-1 overflow-hidden">
                      <div className="flex flex-col justify-between h-full py-2">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 line-clamp-2">
                            {slide.title}
                          </h3>

                          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                            {slide.description}
                          </p>

                          <ul className="space-y-2 mb-4 text-sm sm:text-base">
                            {slide.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-gray-600 shrink-0" />
                                <span className="truncate">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 items-center">
                            {slide.technologies.map((tech, i) => (
                              <div key={i} className="text-center">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="h-6 sm:w-7 sm:h-7 mx-auto"
                                />
                                <p className="text-xs mt-1">{tech.name}</p>
                              </div>
                            ))}
                          </div>

                          <button className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 py-3 font-semibold flex justify-center items-center gap-3 transition cursor-pointer self-start text-sm sm:text-base">
                            View Case Study
                            <ArrowRight
                              size={18}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="hidden lg:flex justify-center items-center h-full max-h-87.5">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="object-contain w-[70%]"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
              className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm py-3.5 px-6 transition-colors shrink-0 cursor-pointer"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Technology Stack Heading Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Power Your Logistics Business with Next-Gen Mobile App Development
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Team up with a logistics app development company that turns complex transportation challenges into scalable, results-driven mobile solutions built to move your business forward.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 ">
            {/* Tabs */}
            <div className="flex justify-center mb-10 ">
              <div className="flex flex-wrap gap-8 border-b border-red-200">
                {technologies.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActivetechnologies(index)}
                    className={`relative py-4 text-lg transition-all duration-200 cursor-pointer ${activetechnologies === index
                      ? "text-black font-semibold"
                      : "text-gray-500 hover:text-red-500"
                      }`}
                  >
                    {tab.category}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 -bottom-px h-0.5 bg-red-600 transition-all duration-300 ${activetechnologies === index ? "w-full" : "w-0"
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
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-12 md:mt-20 bg-red-50  px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Transform Your Transportation and Logistics Mobile Apps
                Development
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Partner with our logistics app development company to build
                custom logistics mobile applications that streamline operations
                and drive growth.
              </p>

              {/* Contact Box */}
              <div className="flex justify-center">
                <div className="w-[80%] mt-8 border border-red-500 bg-red-50 p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                  <div className="flex items-center justify-center gap-2 text-center lg:text-left break-all">
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
                    <span className="font-medium text-sm sm:text-base">
                      info@DevAppGrid.com
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-center lg:text-left">
                    <div
                      className="w-6 h-6 bg-red-600"
                      style={{
                        maskImage: "url(/icons/phone-icon.svg)",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: "url(/icons/phone-icon.svg",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    ></div>
                    <span className="font-medium text-sm sm:text-base leading-6">
                      US: +1 469 793 9837
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline"> | </span>
                      CA: +1 647 637 9108
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Hire Dedicated Developer
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-3 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              America's Go-To Partner for Logistics App Innovation
            </h1>
            <p>
              Devapp Solutions isn't just another software development company;
              we're a full-stack technology partner specializing in web, mobile,
              and logistics-driven app development for businesses across the globe.
              Our team blends deep technical expertise with real industry insight to engineer
              solutions that don't just work they scale, adapt, and win.
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
              Industries We Serve with Custom Logistics App Development
            </h1>
            <p>
              Over the years, we have collaborated with multiple companies, both
              large firms with big teams and small-scale businesses, across
              several industries.
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
              Why Businesses Choose Our Logistics App Development Company
            </h1>
            <p>
              Devapp Solutions specializes in developing scalable, feature-rich
              mobile applications for different operating systems, like Android
              and iPhone. Our experts deliver a centralized workflow for every
              client and offer dedicated service at all times.{" "}
            </p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-red-200 p-6 sm:p-8 transition-all duration-300 hover:border-red-500 hover:shadow-lg"
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
              What Sets Our Logistics App Development Apart
            </h1>
            <p>
              At Devapp Solutions, we don't build apps, we build competitive advantages. From the first strategy call to post-launch support, every step of our process is engineered around one goal: helping your logistics business outperform.
            </p>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
          {/* Outer Card Wrapper with Fixed Border & Accent */}
          <div className="relative bg-white border border-red-100 p-8 md:p-10  shadow-sm hover:border-red-600 transition-all duration-300">
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
              Here you will find the answers you are looking for because we know
              what’s in our client’s mind.
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
