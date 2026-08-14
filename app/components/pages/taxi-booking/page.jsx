"use client";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
} from "lucide-react";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  ArrowDownRight,
  ArrowDown,
} from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { submitContactForm } from "@/services/send-call-request";

import {
  partners,
  slides,
  technologies,
  stats,
  industries,
  services,
  faqsData,
  testimonials,
} from "../../../../utils/data";
import {
  bottomFeatures,
  TaxiServices,
  tabs,
  appData,
  ServiceSectionData,
  sliderData,
  portfolioSlides
} from "./data";
import Image from "next/image";

export default function Taxi() {
  const [activeId, setActiveId] = useState(null);
  const toggleAccordion = (id) => {
    // Agar wahi item open hai toh close kar do (null), warna naye item ko open karo
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  const [activeTab, setActiveTab] = useState("driver");
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
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
  // Data Array (Component ke bahar ya andar define karein)
  const processSteps = [
    {
      stepLabel: "STEP 1",
      tabTitle: "1. Discover",
      heading: "Discover",
      description:
        "We conduct full-scale research and gather insights on market trends, customer satisfaction points, and competitors first to plan a success-worthy app design.",
    },
    {
      stepLabel: "STEP 2",
      tabTitle: "2. Design",
      heading: "Design",
      description:
        "Our designers develop an interactive and iterative app infrastructure, with a simple UI/UX, user-friendly navigations, and more.",
    },
    {
      stepLabel: "STEP 3",
      tabTitle: "3. Build",
      heading: "Build",
      description:
        "Next, trained developers at our Top On-Demand App Development company use the planned technology stack and coding skills to complete the app-building process, adding features and configurations.",
    },
    {
      stepLabel: "STEP 4",
      tabTitle: "4. Deliver",
      heading: "Deliver",
      description:
        "After multiple testing batches, the app is finally ready to deploy, across iOS or Android platforms, or both- we focus on after-launch support as well.",
    },
  ];

  const currentStep = processSteps[activeStepIndex] || processSteps[0];
  // const currentTab = featuresTabsData.find((tab) => tab.id === activeTab) || featuresTabsData[0];
  // Form State
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        const blogList = data?.response?.data || [];
        setBlogs(blogList);
      } catch (error) {
        console.log("Message:", error.message);
        console.log("Code:", error.code);
        console.log("Response:", error.response);
        console.log("Request:", error.request);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="w-full max-w-[80%] mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-red-600 leading-tight">
                Taxi Booking App <br />
                <p className="text-red-700">
                  Development <br />
                </p>
                <p className="text-red-800">
                  Company USA

                </p>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black">
                Planning on creating a completely unique app solution for your
                company to increase your progress in the digital market? Take
                the help of our experts at iQlance for this endeavour; we
                complete each step of app design and development, from the
                origin to deployment, to ensure top-notch performance.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                All of our on-Demand App Developers have the necessary resources
                and skills to create mobile intuitive solutions with the best
                features. With years of practice in handling various projects
                and an intensive knowledge of new cutting-edge technologies and
                market trends, the team would prepare innovative features and
                scalable app infrastructure.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                Expect high growth for your brand with customizable app
                solutions; impress your customers and improve your brand
                reputation with our high-quality apps.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                >
                  Contact Us
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 bg-white text-gray-800 border border-red-300 hover:border-red-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                >
                  See Our Work
                  <ArrowRight
                    size={18}
                    className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1"
                  />
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
                <h2 className="text-xl md:text-2xl font-extrabold text-black mb-1">
                  Request a Free Quote
                </h2>
                <p className="text-xs md:text-sm text-black font-medium mb-8">
                  Guaranteed Response within One Business Day!
                </p>
                {statusMessage.text && (
                  <p
                    className={`text-xs text-center font-semibold ${statusMessage.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {statusMessage.text}
                  </p>
                )}
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
                      className="w-4 h-4 border-gray-400 text-red-600 focus:ring-red-600 accent-gray-600 cursor-pointer"
                    />
                    <label
                      htmlFor="nda"
                      className="text-xs md:text-sm font-semibold text-black cursor-pointer select-none"
                    >
                      Please Send NDA
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-red-700 hover:bg-red-600 text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
                Top On-Demand Solutions Company
              </h2>
              <p className="text-sm md:text-base text-black max-w-6xl mx-auto leading-relaxed">
                We, at iQlance, build ever-evolving on-demand app solutions in
                order to promote the next generation-level services for business
                growth. Have an amazing experience of scalable and solely
                integrated solutions along with custom front-end and back-end
                UI/UX. We assure advanced admin dashboard and powerful analytics
                panel for both Android as well as iOS.
              </p>
              <br />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/taxi-app-devlop.jpg"
              alt="Customer Support"
              className="w-full max-w-md h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-6">
            {bottomFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Chevron Right Icon */}
                <ChevronRight className="w-4 h-4 text-gray-800 shrink-0 mt-1" />

                {/* Text Content */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong className="font-semibold text-gray-900">
                    {item.title}:
                  </strong>{" "}
                  {item.description}
                </p>
              </div>
            ))}
            <div className="">
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
        <section className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12 max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-4xl font-bold text-slate-900 mb-4">
              Taxi Booking App Development Services We Provide
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We offer next-gen mobility solutions with our end-to-end taxi
              booking app development services. Our seasoned app developers
              build scalable, user-friendly, and future-ready platforms for
              start-ups to enterprise-grade businesses.
            </p>
          </div>

          {/* Grid List */}
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 items-start">
              {TaxiServices.map((item) => {
                const isOpen = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 py-4 transition-all duration-300"
                  >
                    {/* Clickable Header Row */}
                    <div
                      onClick={() => toggleAccordion(item.id)}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 object-contain shrink-0"
                        />
                        <span className="font-semibold text-slate-900 text-lg group-hover:text-red-600 transition-colors">
                          {item.title}
                        </span>
                      </div>

                      {/* Arrow Icon with Rotate Animation */}
                      <ArrowDownRight
                        size={22}
                        className={`text-red-600 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>

                    {/* Expandable Text Description with Smooth CSS Grid Animation */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-14 pr-4">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Taxi App Development Solutions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We offer next-gen mobility solutions with our end-to-end taxi
            booking app development services. Our seasoned app developers build
            scalable, user-friendly, and future-ready platforms for start-ups to
            enterprise-grade businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-6 font-sans">
          {/* Navigation Tabs */}
          <div className="max-w-6xl mx-auto p-6 font-sans">
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-8 w-full">
              <div className="flex gap-8 border-b border-gray-200">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative py-3 text-lg transition-colors duration-200 ${isActive
                        ? "text-red-600 font-bold"
                        : "text-gray-900 hover:text-red-500  font-normal cursor-pointer"
                        }`}
                    >
                      {tab.label}

                      {/* Active Bottom Line */}
                      {isActive && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 text-black  translate-y-px" />
                      )}
                    </button>
                  );
                })}
              </div>
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

        <section className="w-full bg-red-50 py-16 px-6 font-sans mt-10 mb-10">
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
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Ready to Get Started?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
              Send your Requirements on
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-500 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@iqlance.com"
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
                  <span>info@iqlance.com</span>
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
                  <a
                    href="tel:+14697939837"
                    className="transition-colors"
                  >
                    +1 469 793 9837
                  </a>
                  <span>,</span>
                  <span>CA :</span>
                  <a
                    href="tel:+16476379108"
                    className="transition-colors"
                  >
                    +1 647 637 9108
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center max-w-6xl mx-auto mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Cutting-Edge Technology We Use
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              At iQlance Solutions, we don’t chase basic functionality; we
              engineer apps with performance, scalability, and security at the
              core. As a leading name in taxi booking mobile app development, we
              leverage modern frameworks, robust backends, and cloud-powered
              infrastructure to build high-performing platforms for the U.S.
              market.
            </p>
          </div>
        </section>
        <section>
          {/* Outer container ki max-width 1400px (ya max-w-full) kar di taake wide screens par space zyada mile */}
          <div className="w-full max-w-350 mx-auto px-4 py-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-black !w-2.5 !h-2.5",
                bulletClass:
                  "swiper-pagination-bullet !bg-gray-300 !w-2 !h-2 !opacity-100",
              }}
              // Fast change: ek screen par 3 ki jagah 2 (ya 2.5) slides dikhane se har box ki WIDTH badi ho jayegi
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.1 },
              }}
              className="pb-14 [&_.swiper-wrapper]:flex [&_.swiper-slide]:h-auto! [&_.swiper-slide]:flex"
            >
              {sliderData.map((slide) => (
                <SwiperSlide key={slide.id} className="h-full">
                  {/* 'h-full' lagane se tamaam cards ki height bilkul equal ho jayegi */}
                  <div className="w-full h-full bg-white border border-gray-200 rounded-sm p-10 flex flex-col transition-all duration-300 hover:border-red-600 hover:shadow-sm">
                    {/* Icon Container */}
                    <div className="w-14 h-14 mb-6 flex items-center justify-start shrink-0">
                      <img
                        src={slide.icon}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed grow">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
























        <section>
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
                  <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-black leading-tight">
                    {item.title}
                  </h2>

                  <p
                    className="text-black text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  {/* Dynamic Feature List */}
                  <ul className="space-y-4 pt-2">
                    {item.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex gap-3 text-black font-semibold text-sm md:text-base"
                      >
                        <ChevronRight className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
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
        <section className="py-12 px-4 max-w-6xl mx-auto font-sans">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-10 text-left">
            Major Impact Of Our Taxi App Development Services On Businesses
          </h2>

          {/* Grid Layout (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 font-semibold text-lg leading-snug shrink-0">&#8250;</span>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
                50% quarterly increase in the number of ride orders
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 font-semibold text-lg leading-snug shrink-0">&#8250;</span>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
                80% quarterly increase in customers’ positive reviews
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 font-semibold text-lg leading-snug shrink-0">&#8250;</span>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
                30% quarterly decrease in ride-pickup time
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 font-semibold text-lg leading-snug shrink-0">&#8250;</span>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
                40% increase in total business revenue
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 font-semibold text-lg leading-snug shrink-0">&#8250;</span>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
                33% decrease in overall operations expenses
              </p>
            </div>

            {/* Item 6 */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 font-semibold text-lg leading-snug shrink-0">&#8250;</span>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed">
                81% increase in customer retention
              </p>
            </div>

          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-3xl font-bold text-black">
              Endeavors that Make us Proud
            </h2>
            <p className="text-black text-sm md:text-base max-w-5xl mx-auto">
              iQlance solutions has always been honored with valuable words for
              the efforts given on mobile app development that are efficiently
              unique and user centric. Here are some of the best examples for
              this.
            </p>
          </div>
        </section>
        <section>
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
            className="portfolio-swiper"
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 300000 }}
            loop={true}
          >
            {portfolioSlides.map((slide, index) => (
              <SwiperSlide key={index} className="h-auto!">
                <div className="bg-red-50 px-4 sm:px-6 md:px-12 py-8 sm:py-10 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-10">
                      {slide.heading}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
                          {slide.title}
                        </h3>

                        <p className="text-gray-700 leading-7 sm:leading-8 mb-6 sm:mb-8 text-sm sm:text-base">
                          {slide.description}
                        </p>

                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                          {slide.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-gray-700 shrink-0 stroke-[3.5]" />{" "}
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                          {slide.technologies.map((tech, i) => (
                            <div key={i} className="text-center">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto"
                              />
                              <p className="text-xs sm:text-sm mt-2">
                                {tech.name}
                              </p>
                            </div>
                          ))}
                        </div>

                        <button className="group w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 font-semibold flex justify-center items-center gap-3 transition cursor-pointer">
                          View Case Study
                          <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </div>

                      <div className="flex justify-center">
                        <img
                          src={slide.image}
                          alt={slide.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="w-full max-w-7xl mx-auto py-12 space-y-16">
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
              <ArrowRight
                size={18}
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>


        </section>
        <div className="text-center max-w-4xl mx-auto space-y-4 mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
            Technologies We Use
          </h2>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Capabilities and tools aside, you can expect top-notch technologies
            in use at our best on-demand app development company; we use them
            generously for an intuitive and customised app generation.
          </p>
        </div>
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
                      : "text-gray-500 hover:text-black"
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
        <section className="py-12 px-4 max-w-7xl mx-auto font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Side: Image Container */}
            <div className="w-full h-full overflow-hidden ">
              <img
                src="/images/highlights-texi.jpg"
                alt="Taxi Application Development"
                className="w-full h-auto object-cover "
              />
            </div>

            {/* Right Side: Content Container */}
            <div className="flex flex-col space-y-4 text-gray-800">
              {/* Main Heading */}
              <h2 className="text-2xl lg:text-3xl font-extrabold text-black leading-snug">
                Taxi Application Development Company
              </h2>

              {/* Paragraph 1 */}
              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Our team at iQlance takes proper care of both passengers and taxi
                companies requirements, because of which we’ve consistently gained a
                good reputation as leading USA mobile app developers
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Our app comes with personalized options with advanced customization
                features and integration based on specific business needs. These
                include, Passenger Apps, Driver Apps, Admin Apps and Dispatch Apps
                and so on. In this way, we deliver results that grow your business.
              </p>

              {/* Paragraph 3 */}
              <p className="text-sm lg:text-base leading-relaxed text-gray-700">
                Transform your cab or taxi service into a winning business enterprise.
              </p>
            </div>

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
                      We are team of talented, experienced, and certified designers and developers. Let us build something extraordinary.
                    </p>
        
                    {/* Contact Info Box */}
                    <div className="w-full max-w-2xl bg-red-50 border border-red-600 rounded-sm py-4 px-6 mb-8 shadow-xs">
                      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-gray-900">
                        {/* Email link */}
                        <a
                          href="mailto:info@iqlance.com"
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
                          <span>info@iqlance.com</span>
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
                        className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
                      >
                        Let’s Talk <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </section>


        <section>
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-10 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              {" "}
              Offshore Web, Mobile & Software Development Company
            </h1>
            <p>
              iQlance is a leading Software Development Company currently
              available in the market, with over 7 years of experience under the
              belt. Over the years, our team members have honed their skills,
              handling over 1,500 projects of different types and companies,
              offering flexible solutions and comprehensive benefits to all.
            </p>
          </div>
        </section>
        <section>
          <div className="flex flex-wrap justify-center gap-7 mt-24 mb-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative w-full sm:w-70 lg:w-35 rounded-2xl border border-[#E7E7E7] bg-white px-6 pt-10 pb-6"
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


        <div className="text-center max-w-4xl mx-auto space-y-4 mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
            The Process We Follow For Web Design and Development
          </h2>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Our team of App Developers Toronto have worked on different types of
            on-demand app development projects, with satisfactory results. We
            provide dedicated attention and care throughout the development
            journey, using top-notch techniques. Here, we shall tailor our
            development plan as per your needs.
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 py-12">
          {/* Top Tabs Header */}
          <div className="flex items-center gap-6 border-b border-gray-100 pb-3 mb-12 overflow-x-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  className={`text-base font-semibold transition-all whitespace-nowrap pb-3 -mb-3 border-b-2 ${activeStepIndex === index
                    ? "text-red-700 border-red-700 font-bold"
                    : "text-gray-400 border-transparent hover:text-red-400"
                    }`}
                >
                  {step.tabTitle}
                </button>
                {index < processSteps.length - 1 && (
                  <span className="text-gray-400 font-light">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Main Layout (Circular Icons + Description) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Process Image Container */}
            <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
              {/* Step 1 Image - Discover */}
              {activeStepIndex === 0 && (
                <div className="">
                  <img
                    src="/images/discove.jpg"
                    alt="Discover"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Step 2 Image - Design */}
              {activeStepIndex === 1 && (
                <div className="">
                  <img
                    src="/images/uiux-design.jpg"
                    alt="Design"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Step 3 Image - Build */}
              {activeStepIndex === 2 && (
                <div className="">
                  <img
                    src="/images/development.jpg"
                    alt="Build"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Step 4 Image - Deliver */}
              {activeStepIndex === 3 && (
                <div className="">
                  <img
                    src="/images/user-testing.jpg"
                    alt="Deliver"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Right Side Content Display */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
                {currentStep.stepLabel}
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                {currentStep.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm max-w-md">
                {currentStep.description}
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="text-center max-w-5xl mx-auto space-y-4 mt-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
              Why Choose iQlance?
            </h1>
            <p className="text-black text-sm md:text-base leading-relaxed">
              From development to testing, design to deployment, and everything
              in between, we are the best on-demand app development company that
              offers a vast range of scalable solutions.
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

                <p className="text-black leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="space-y-4 text-sm md:text-base text-black leading-relaxed text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-snug">
              Client Testimonials
            </h1>
            <p>
              Our purpose as a logistics app development company, has always
              centered around putting customer satisfaction first. Here are some
              of the things our past clients have to say about our services,
              directly from them.
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
                        <h4 className="text-lg font-bold text-black mb-1">
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
                      ? "border-red-200 shadow-md"
                      : "border-red-200 hover:border-red-300"
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
                        <p className="text-[17px] leading-8 text-black">
                          {faq.answer}
                        </p>

                        {faq.points && (
                          <ul className="mt-5 space-y-4">
                            {faq.points.map((point, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[17px] leading-8 text-black items-center m-0"
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
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              Have Something in Mind? Let's Talk
            </h1>
            <p>
              Have a look at the services and development process of the iQlance
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
