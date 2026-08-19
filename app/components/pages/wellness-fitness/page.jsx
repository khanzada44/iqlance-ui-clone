"use client";
import { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { submitContactForm } from "@/services/send-call-request";
import {
  bottomFeatures,
  slides,
  ServiceSectionData,
  portfolioSlides,
  faqsData,
  tabs,
  appData,
  caseStudies,
  services
} from "./data";
import {
  partners,
  technologies,
  stats,
  industries,
  testimonials,
} from "../../../../utils/data";
import Image from "next/image";

export default function wellnessFitness() {
  const [activeTab, setActiveTab] = useState("driver");
  const [open, setOpen] = useState(-1);
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // ADD THIS LINE: formData state yahan add karein
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
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const [blogs, setBlogs] = useState([]);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
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
    } catch (error) {
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

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-red-700 leading-tight">
                Wellness & Fitness
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                The wellness and fitness industry is undergoing a major digital shift,
                and forward-thinking business leaders are increasingly turning to mobile solutions
                to stay ahead. At Devapp, we recognize this shift and bring a
                team of seasoned experts ready to craft the perfect digital solution for your brand.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Our fitness app development services are built to help your business
                unlock new growth opportunities, think broader audience reach, reduced
                stress levels for users, higher productivity, and lower healthcare costs,
                among other benefits.

              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                As a leading health and fitness app development company, we ensure every fitness
                app we build is loaded with the features today's fitness enthusiasts actually need from custom
                diet planning to connecting with fitness experts and scheduling workouts with ease.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                {/* Contact Us Link */}
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md cursor-pointer"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
                </Link>

                {/* See Our Work Link */}
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 bg-white text-gray-800 border border-red-300 hover:red-gray-400 font-semibold px-6 py-3 transition duration-200 shadow-sm cursor-pointer"
                >
                  See Our Work
                  <ArrowRight className="w-4 h-4 text-gray-600 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
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

        <section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                Connect Gym Trainers and Nutritionists with Clients Instantly Through
                Custom Fitness App Development
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Devapp, we&apos;re committed to delivering the most effective fitness
                solutions in the industry. That&apos;s why we&apos;ve built a diverse
                portfolio of innovative wellness and fitness app development solutions,
                helping fitness enthusiasts get their questions answered in record time.
              </p>

              <br />

              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We help gym trainers, dietitians, nutritionists, yoga instructors, and
                aerobics/Zumba coaches bring their services onto web and mobile platforms
                so athletes and fitness enthusiasts can access what they need, exactly
                when they need it. Here&apos;s how we make it happen:
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
                        WebkitMaskImage: "url(/icons/phone-icon.svg)",
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
                href="/request-a-quote"
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
            <Swiper
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
                    <div className="w-full lg:w-1/2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-155 object-cover"
                      />
                    </div>

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
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>

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
                Ready to Get Started?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Send your Requirements on
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
                        WebkitMaskImage: "url(/icons/phone-icon.svg)",
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
                href="/lets-talk"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Let’s Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 text-center font-sans">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Features That Power Our Wellness and Fitness App Development
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
            Our wellness and fitness apps are designed to capture the attention of health-conscious users through valuable, purposeful features that make staying fit effortless.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/doctor-patient-profile-icn.png"
                alt="Login & Profile Creation"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Login & Profile Creation
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/push-h-icn.png"
                alt="Push Notification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Push Notifications
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/sm-icon.png"
                alt="Social Sharing"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Social Sharing
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/content-h-icn.png"
                alt="Geolocation"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Geolocation
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/reminders-h-icn.png"
                alt="Reminders"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Reminders
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/200cal.png"
                alt="Food and Calorie Tracker"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Food and Calorie Tracker
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/calender-icn-new.png"
                alt="Schedules and Calendar"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Schedule and Calendar
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/game-remote.png"
                alt="Gamification"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Gamification
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/online-icon-w.png"
                alt="Online Sessions"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Online Sessions
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/analytics-h-icn.png"
                alt="Analytics & Reports"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Analytics & Reports
              </h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center min-h-35">
              <img
                src="/images/chat-h-icn.png"
                alt="Chat"
                className="w-10 h-10 object-contain mb-4"
              />
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                Chat
              </h3>
            </div>
          </div>
        </section>

        <section >
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Key Features of Logistics and Transportation App Development
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Our logistics app solutions contain a host of features that shall
              help you manage your activities in a more organized manner.
            </p>
          </div>
        </section>

        <section >
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-5 md:mt-20 bg-red-50  px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
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
                        WebkitMaskImage: "url(/icons/phone-icon.svg)",
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
        <section className="max-w-6xl mx-auto px-4 py-16 text-center font-sans">
          {/* Heading & Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
            Efforts that make us proud include
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
            Our crew of experienced food app developers has dedicated their
            attention and effort to developing a variety of on-demand bespoke
            applications for consumers. We are pleased to report that our
            initiatives have received positive feedback from our consumers.
          </p>

          <div className="max-w-6xl mx-auto p-6 font-sans">
            {/* Navigation Tabs */}
            <div className="flex justify-center  mb-8">
              <div className="border-b border-red-300">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 text-lg font-medium transition-colors duration-200 border-b-2 ${activeTab === tab.id
                      ? "border-red-600 text-red-600 font-semibold"
                      : "border-transparent text-gray-500 hover:text-red-700"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {appData[activeTab]?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 min-h-40"
                >
                  <img src={item.iconPath} alt="" />
                  {/* Custom Icon Placeholder - Yahan aap apna image/icon tag laga sakte hain */}

                  <span className="text-gray-800 font-medium text-base">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section >
          <div className="max-w-7xl mx-auto px-4">
            {/* CTA Box */}
            <div className="mt-5 md:mt-20 bg-red-50 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                So, We Guess You want to talk about your Project
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Send your Requirements on
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
                        WebkitMaskImage: "url(/icons/phone-icon.svg)",
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
                href="/lets-talk"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Let’s Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                Our Skilled Developers, Committed to Delivering Peak Performance
              </h2>

              <p>
                At Devapp, our team of digital specialists lives and breathes wellness and
                fitness solutions. Our fitness app developers are fitness enthusiasts
                themselves, which means they truly understand what end users need. They
                bring a clear vision to every build, incorporating a diverse range of
                fitness solutions, including yoga apps, workout apps, and gym management
                apps.
              </p>

              <p>
                Beyond that, our team works continuously to strengthen app visibility and
                drive business growth. Alongside offering a wide range of app development
                services, our experienced developers ensure every app runs smoothly and
                accurately, making it easier than ever for dietitians, personal trainers,
                and nutritionists to serve their clients effectively.
              </p>

              <p>
                At the core, our wellness and fitness apps are built to support dietary
                planning, bodybuilding, weight management, and smart schedule management.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
          {/* Top Text Content */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              How Much Does It Cost to Build a Wellness and Fitness App Like the
              Industry&apos;s Best?
            </h2>

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                The market is full of successful fitness apps, and their success largely
                comes down to one thing: the range of features they offer to enhance the
                user experience. Because of this, your total development cost will depend
                on your app&apos;s complexity and the specific features you choose to
                include.
              </p>

              <p>
                As a leading health app development company, we start by thoroughly
                evaluating current market demand and identifying the features best suited
                to meet it. From there, we integrate every feature strategically,
                ensuring your app stays ahead of the competition.
              </p>

              <p>
                There&apos;s no fixed, one-size-fits-all price; costs vary based on the
                technology used, development timeline, and the depth of research
                involved. Want a full cost breakdown for your custom wellness and fitness
                app? Get in touch with our team today.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
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
        <section className="py-10">
          {/* Custom style for red pagination dots */}
          <style>{`
            .case-study-swiper .swiper-pagination-bullet {
              background-color: #cbd5e1 !important;
              opacity: 1 !important;
            }
            .case-study-swiper .swiper-pagination-bullet-active {
              background-color: #dc2626 !important; /* Red Color */
            }
          `}</style>

          <div className="mx-auto max-w-7xl flex justify-center">
            <Swiper
              className="case-study-swiper pb-12"
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
              {caseStudies.map((item, index) => (
                <SwiperSlide key={index} className="h-auto!">
                  <div
                    className="h-full px-6 py-10 flex items-center"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full">
                      {/* Left */}
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                          {item.title}
                        </h3>

                        <p className="text-black leading-6 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                          {item.description}
                        </p>

                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 m-0">
                              <ChevronRight size={18} />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                          {item.technologies.map((tech, i) => (
                            <div key={i} className="text-center">
                              <img
                                src={tech.image}
                                alt={tech.name}
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto object-contain"
                              />
                              <p className="text-xs sm:text-sm mt-2">
                                {tech.name}
                              </p>
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/portfolio"
                          className="group mt-8 bg-red-700 hover:bg-red-600 text-white px-8 py-4 font-semibold inline-flex items-center gap-3 transition cursor-pointer"
                        >
                          {item.buttonText}
                          <ArrowRight
                            size={18}
                            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                          />
                        </Link>
                      </div>

                      {/* Right */}
                      <div className="flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className=" object-contain"
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
          <div className="bg-red-50  p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
              <div className="flex flex-wrap gap-8 border-b border-red-300">
                {technologies.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActivetechnologies(index)}
                    className={`relative py-4 text-lg transition-all duration-200 cursor-pointer ${activetechnologies === index
                      ? "text-red-600 font-semibold"
                      : "text-gray-500 hover:text-red-400"
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
                Certified Experts. Proven Experience. Exceptional Digital Solutions.

              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7">
                Our skilled designers and developers bring the expertise, creativity, and technical precision needed to turn ambitious ideas into powerful digital products.

              </p>
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
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-10 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
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
                className="relative w-full sm:w-70 lg:w-55 h-55 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-24 pb-8"
              >
                {/* Floating Icon */}
                <div className="absolute -top-8 right-0 w-25.5 h-25.5 rounded-2xl border border-[#E7E7E7] bg-white flex items-center justify-center">
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
              Industries We Serve
            </h1>
            <p>
              We’ve worked with a variety of organization throughout the years,
              including major corporations with enormous employees and local
              firms in a variety of sectors.
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
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-13 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-gray-900">
              {" "}
              Why Choose Us?
            </h1>
            <p>
              As one of the most trusted mobile app development companies in the USA, we help businesses build apps that truly dominate the market. Here's how we set every client up for success:
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
              As a food software development business, our mission has always
              been to prioritize client happiness. Here is what some of our
              previous clients had to comment regarding our offerings, straight
              from them.
            </p>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
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
                      <div className="w-16 h-16  border border-gray-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain "
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
        <section>
          {/* Heading */}
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-4 mt-2">
              Frequently Asked Questions
            </h1>

            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
              Customers frequently ask us the same questions when it comes to
              bespoke software development for food delivery management at their
              businesses. Here are a few that have been solved.
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
                      ? "border-red-200 shadow-md"
                      : "border-red-100 hover:border-red-300"
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
