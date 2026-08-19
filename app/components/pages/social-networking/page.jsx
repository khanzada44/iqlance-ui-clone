"use client";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
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
  ServiceSectionData,
  portfolioSlides,
  technologies,
  stats,
  industries,
  faqsData,
  testimonials,
} from "../../../../utils/data";

import { healthcareFeatures, bottomFeatures, services } from "./data";
import Image from "next/image";

export default function SocialMedia() {
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
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
                Build a Social Networking App
                <br className="hidden sm:block" />
                That Keeps Users Coming Back
              </h1>
              Build a Dating App People Actually Fall For


              <p className="text-base md:text-lg leading-relaxed text-black">
                At Devapp, we design and build enterprise-grade social networking
                applications for ambitious brands that want to create meaningful digital
                communities. Our USA-based development team creates scalable solutions
                tailored to your business requirements, with support for both Android and
                iOS platforms.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                Our social media applications are built around real user engagement, making
                it easy for people to connect, share content, discover relevant information,
                interact with communities, and stay active on your platform. We can also
                integrate targeted advertising, personalized discovery, real-time
                interactions, notifications, and data-driven features to support long-term
                growth.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                Beyond consumer-focused platforms, we develop corporate social applications
                that help businesses strengthen communication between customers, employees,
                partners, and internal teams. From secure information sharing to real-time
                collaboration and community engagement, we build connected digital
                experiences around the way your organization operates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 border border-red-300 hover:border-red-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                >
                  See Our Work <ArrowRight className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 relative pt-6 pr-4">
              <div className="relative bg-[#F7F8FA] border border-red-100/60  p-6 md:p-8 w-full shadow-lg">
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
                      className="w-4 h-4 border-gray-400 text-red-700 focus:ring-[#1E40AF] accent-gray-600 cursor-pointer"
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
                Social Networking Apps Engineered to Grow Your Business
              </h2>
              <p className="text-sm md:text-base text-black max-w-4xl mx-auto leading-relaxed">
                Our certified developers at Devapp, a trusted mobile app development company in the USA,
                build powerful, purpose-driven social media solutions for businesses of every size.
                Backed by deep software integration, cross-platform compatibility,
                and flawless performance, every app we deliver sets a new standard for user experience.
              </p>
              <br />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/social-app-dev-right.jpg"
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
                className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Features of Social Networking App Development
            </h2>
            <p className="text-black text-sm md:text-base max-w-5xl mx-auto">
              Devapp solutions has always been honored with valuable words for
              the efforts given on mobile app development that are efficiently
              unique and user centric. Here are some of the best examples for
              this.
            </p>
          </div>
        </section>
        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthcareFeatures.map((feature) => (
            <div
              key={feature.id}
              className="border border-gray-200 rounded-md bg-white hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center justify-center text-center min-h-42.5"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-14 object-contain"
              />

              <h3 className="mt-5 text-base md:text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
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
                className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 max-w-5xl mx-auto font-sans text-center text-gray-800">
          {/* Main Heading & Content Block */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-6">
              Custom App Development for Fitness Businesses
            </h2>

            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700 max-w-7xl mx-auto">
              <p>
                Your fitness app should reflect the way your business works, not force
                your business into a generic template. Our{" "}
                <span className="font-semibold text-black">
                  custom fitness app development services
                </span>{" "}
                transform your concept into a digital product designed around your
                audience, goals, and revenue model.
              </p>

              <p>
                Whether you're launching a fitness startup, expanding a gym or wellness
                brand, or taking personal training into the digital space, we build
                experiences that bring workouts, coaching, tracking, nutrition, and
                engagement together in one place.
              </p>

              <p>
                From the first user journey to the technology powering the platform,
                every part of your application is planned to make fitness easier to
                access and your business easier to scale. We combine intuitive UI/UX,
                powerful functionality, and modern mobile technology to create fitness
                products built for real-world use.
              </p>
            </div>
          </div>

          {/* Bottom Sub-Block */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-black mb-4">
              Endeavors That Make Us Proud
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-7xl mx-auto">
              Our fitness app development work is focused on creating practical,
              engaging, and user-centered digital experiences. From workout platforms
              and coaching solutions to nutrition tracking and connected fitness
              products, we build applications designed to deliver meaningful value to
              users and support long-term business growth.
            </p>
          </div>
        </section>
          <section className="py-10">
            <div className="mx-auto max-w-7xl">
              <Swiper
                className="portfolio-swiper"
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

            <style>{`
              .portfolio-swiper .swiper-pagination-bullet {
                background-color: #cbd5e1 !important;
                opacity: 1 !important;
              }

              .portfolio-swiper .swiper-pagination-bullet-active {
                background-color: #dc2626 !important;
              }
            `}</style>
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
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm py-3.5 px-6 transition-colors shrink-0"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <div className="text-center max-w-6xl mx-auto space-y-4 mt-4">
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
              Devapp is a leading Software Development Company currently
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

        <section>
          <div className="text-center max-w-6xl mx-auto space-y-4 mt-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
              Why Choose Us for Fitness App Development?
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
                className="border border-red-200 p-6 sm:p-8 transition-all duration-300 hover:border-red-600  hover:shadow-lg"
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
