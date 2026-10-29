"use client";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../../contactForm/ContactForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { submitContactForm } from "@/services/send-call-request";
import { portfolioSubCategories } from "../../../../services/all-sub-categories"
import PortfolioSlider from '../portfolio-slider/PortfolioSlider';
import {
  partners,
  bottomFeatures,
  slides,
  ServiceSectionData,
  portfolioSlides,
  technologies,
  stats,
  industries,
  services,
  faqsData,
  testimonials
} from "../../../../utils/data"
import Image from "next/image";
import { useRouter } from "next/navigation";
// Phone: sirf digits, +, space, -, ( ) — "+" sirf shuru mein
const sanitizePhone = (value) =>
  value.replace(/[^\\d+\\s()-]/g, "").replace(/(?!^)\\+/g, "").slice(0, 20);

// 10–15 digits zaroori
const getPhoneError = (phone) => {
  const value = (phone || "").trim();
  if (!value) return "Phone number is required";
  const cleaned = value.replace(/[\\s()-]/g, "");
  if (!/^\\+?\\d+$/.test(cleaned)) return "Phone number can only contain digits";
  const digits = cleaned.replace(/\\D/g, "");
  if (digits.length < 10) return "Phone number must be at least 10 digits";
  if (digits.length > 15) return "Phone number cannot be more than 15 digits";
  if (/^(\\d)\\1+$/.test(digits)) return "Enter a valid phone number";
  return "";
};

// FAQPage schema — wahi sawal jo page par dikh rahe hain (points bhi jawab mein)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.map((f) => ({
    "@type": "Question",
    name: String(f.question),
    acceptedAnswer: {
      "@type": "Answer",
      text: [String(f.answer || ""), ...(f.points || [])].join(" ").replace(/<[^>]*>/g, "").trim(),
    },
  })),
};

// Component ka naam theek kiya (Ondemadd -> OnDemand)
export default function OnDemand() {
  const [activeTab, setActiveTab] = useState("driver");
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [portfolios, setPortfolios] = useState([]);
  const router = useRouter();

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
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  // Data Array (Component ke bahar ya andar define karein)
  const processSteps = [
    {
      stepLabel: "STEP 1",
      tabTitle: "1. Discover",
      heading: "Discover",
      description:
        "We begin by understanding your on-demand business model, target customers, service providers, competitors, and operational challenges. This stage gives us the insight needed to define the right features and user journeys before design begins.",
    },
    {
      stepLabel: "STEP 2",
      tabTitle: "2. Design",
      heading: "Design",
      description:
        "Next, we turn the requirements into an intuitive experience for customers, service providers, and administrators. Our designers map the key interactions and create interfaces that make booking, tracking, payments, and other essential actions easy to understand.",
    },
    {
      stepLabel: "STEP 3",
      tabTitle: "3. Build",
      heading: "Build",
      description:
        "Once the experience is finalized, our developers bring it to life using the appropriate technologies and integrations. We develop the core functionality, connect APIs and third-party services, and build the infrastructure needed to support real-time on-demand operations.",
    },
    {
      stepLabel: "STEP 4",
      tabTitle: "4. Deliver",
      heading: "Deliver",
      description:
        "Before launch, we thoroughly test the application across its key workflows, devices, and integrations. After everything is validated, we prepare the product for deployment and can continue supporting improvements as your business evolves.",
    },
  ];

  const stepImages = [
    { src: "/images/discove.jpg", alt: "Discover – on-demand app research" },
    { src: "/images/uiux-design.jpg", alt: "Design – on-demand app UI/UX" },
    { src: "/images/development.jpg", alt: "Build – on-demand app development" },
    { src: "/images/user-testing.jpg", alt: "Deliver – testing and launch" },
  ];

  // Form State
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const phoneError = getPhoneError(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    return newErrors;
  };
  const handleChange = (e) => {
    const { name } = e.target;
    const value = name === "phone" ? sanitizePhone(e.target.value) : e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);
    setStatusMessage({
      type: "",
      text: "",
    });

    try {
      const payload = new FormData();

      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.replace(/[\s()-]/g, ""));
      payload.append("message", formData.message.trim());
      payload.append("is_nda", formData.sendNda ? "1" : "0");
      payload.append("service", formData.service || "");
      payload.append("service_category", formData.service_category || "");

      if (formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      await submitContactForm(payload);
      router.push("/thanks-You");
      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      });

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

      setErrors({});

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Form submit failed:", error?.response?.data || error);

      let errorMessage = "Failed to send message. Please try again later.";

      if (error?.response?.data?.errors?.file) {
        errorMessage = error.response.data.errors.file.join(" ");
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
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

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const selectedId = localStorage.getItem('selectedCategoryId');

        const res = await portfolioSubCategories(selectedId);

        // Exact API structure mapping: res.response.data ya res.data.response.data
        const rawList = res?.response?.data || res?.data?.response?.data || [];

        // Single map function to clean objects for PortfolioSlider
        const formattedData = rawList.map((item, index) => ({
          id: item.slug || index,
          title: item.title,
          slug: item.slug,
          description: item.description,
          image: item.image_url || item.image,
          heading: "",
          features: item.features || [],
          technologies: item.technologies || [],
        }));

        setPortfolios(formattedData);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
                On Demand
                <br className="hidden sm:block" />
                Application Development
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black">
                As an on-demand app development company, we build marketplace and service platforms that
                connect customers and providers through scheduling, location services, payments,
                notifications, and real-time status updates.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                We create reliable and scalable on-demand applications that help businesses connect with customers,
                manage daily operations, and deliver services more efficiently. Our development process focuses on
                building secure, easy-to-use, and high-performing applications that can grow with your business.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                From the initial concept to design, development, testing, and launch, our team manages every stage of
                the project. We use modern technologies to create smooth digital experiences for both customers and
                service providers.
                Whether you need a delivery platform, booking application, marketplace, or custom business solution,
                we develop applications according to your goals, target audience, and operational requirements.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 bg-white text-black border border-red-100 hover:border-red-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                >
                  See Our Work
                  <ArrowRight className="w-4 h-4 text-black transition-transform duration-200 group-hover:translate-x-1" />
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
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                  noValidate
                >
                  <div>
                    <label htmlFor="od-name" className="sr-only">Name</label>
                    <input
                      id="od-name"
                      autoComplete="name"
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${errors.name ? "border-red-500" : "border-gray-300"
                        } focus:border-red-600 outline-none py-2 text-sm sm:text-base text-black placeholder-gray-400 transition-colors disabled:opacity-50`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="od-email" className="sr-only">Email</label>
                    <input
                      id="od-email"
                      autoComplete="email"
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${errors.email ? "border-red-500" : "border-gray-300"
                        } focus:border-red-600 outline-none py-2 text-sm sm:text-base text-black placeholder-gray-400 transition-colors disabled:opacity-50`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="od-phone" className="sr-only">Phone</label>
                    <input
                      id="od-phone"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                      aria-invalid={!!errors.phone}
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() =>
                        formData.phone &&
                        setErrors((prev) => ({ ...prev, phone: getPhoneError(formData.phone) }))
                      }
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${errors.phone ? "border-red-500" : "border-gray-300"
                        } focus:border-red-600 outline-none py-2 text-sm sm:text-base text-black placeholder-gray-400 transition-colors disabled:opacity-50`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="od-message" className="sr-only">Project details</label>
                    <textarea
                      id="od-message"
                      name="message"
                      rows={3}
                      placeholder="Write a brief about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm sm:text-base text-black placeholder-gray-400 resize-y transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* File Upload & NDA Checkbox */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs md:text-sm text-black pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-black shrink-0">
                      <Paperclip className="w-4 h-4 text-black" />
                      <span>Upload file:</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        disabled={loading}
                        className="hidden"
                      />
                    </label>

                    <span className="text-black truncate max-w-full sm:max-w-45">
                      {formData.file ? formData.file.name : "No file chosen."}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="nda"
                      checked={formData.sendNda}
                      disabled={loading}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          sendNda: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 border-gray-400 text-red-600 focus:ring-red-600 cursor-pointer rounded-xs"
                    />
                    <label
                      htmlFor="nda"
                      className="text-xs md:text-sm font-semibold text-black cursor-pointer"
                    >
                      Please Send NDA
                    </label>
                  </div>

                  {/* Status Message */}
                  {statusMessage.text && (
                    <div
                      className={`p-3 text-sm font-medium border rounded-sm ${statusMessage.type === "success"
                          ? "bg-green-50 border-green-200 text-green-700"
                          : "bg-red-50 border-red-200 text-red-700"
                        }`}
                    >
                      {statusMessage.text}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-700 hover:bg-red-600 disabled:bg-red-400 font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed rounded-sm text-white!"
                    >
                      {loading ? (
                        <span className="text-white font-bold">Sending...</span>
                      ) : (
                        <span className="text-white font-bold flex items-center gap-2">
                          Schedule a free consultation
                          <ArrowRight className="w-4 h-4 shrink-0 text-white" />
                        </span>
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
            <div className="text-center mb-10 px-5">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
                Top On-Demand Solutions Company
              </h2>
              <p className="text-sm md:text-base text-black max-w-4xl mx-auto leading-relaxed">
                As an experienced on-demand app development company, we help startups and
                established businesses turn their ideas into practical digital products.
                Our solutions are designed to simplify processes, improve customer
                engagement, and support long-term business growth.
              </p>

              <p className="text-sm md:text-base text-black max-w-4xl mx-auto leading-relaxed">
                We combine thoughtful UI/UX design, powerful technology, and
                industry-focused strategies to deliver applications that are simple to use
                and effective in real-world situations.
              </p>
              <br />
            </div>

          </div>
        </section>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/top-solution-right.jpg"
              alt="On-demand app development solutions"
              className="w-full max-w-md h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-6 px-5">
            {bottomFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Chevron Right Icon */}
                <ChevronRight className="w-4 h-4 text-black shrink-0 mt-1" />

                {/* Text Content */}
                <p className="text-sm md:text-base text-black leading-relaxed">
                  <strong className="font-semibold text-black">
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
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>


        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-24">
          {ServiceSectionData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
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
                        className="flex items-center gap-3 text-black font-semibold text-sm md:text-base"
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
                    alt={item.imageAlt || item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-full max-w-6xl mx-auto px-5">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Endeavors that Make us Proud
            </h2>
            <p className="text-black text-sm md:text-base max-w-5xl mx-auto">
              DevApp Grid has earned great feedback for building on-demand apps that are unique and user-centric. Here are some of the projects we are most proud of.
            </p>
          </div>
        </section>
        <section>
        </section>
        <section className="w-full max-w-7xl mx-auto py-12 space-y-16">
          {/* Top CTA Banner Box */}
          <div className="bg-red-50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black leading-tight">
                See How We Turn Your Idea Into an Innovative Product
              </h2>
              <p className="text-black text-sm md:text-base leading-relaxed">
                Our portfolio shows why businesses across the USA trust us as
                one of the best on-demand app development companies.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm py-3.5 px-6 transition-colors shrink-0"
            >
              <span>See Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Technology Stack Heading Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mt-10 px-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
              Our On-Demand App Development Solutions
            </h2>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Our certified developers build fast, interactive on-demand apps for a wide range of service models.
            </p>
          </div>
        </section>
        <section className="">
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
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10 items-center px-5">
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

                      <p className="text-black leading-7 lg:leading-8 mb-6 lg:mb-8">
                        {slide.description}
                      </p>

                      <div className="space-y-3 lg:space-y-4">
                        {slide.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex gap-3 items-baseline"
                          >
                            <ChevronRight size={15} />
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
        <div className="text-center max-w-4xl mx-auto space-y-4 mt-4 px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
            Technologies We Use
          </h2>
          <p className="text-black text-sm  leading-relaxed ">
            The right technology stack gives your on-demand app the foundation it needs to perform today and scale tomorrow. We select modern tools and frameworks based on your product requirements, target platforms, integrations, and long-term business goals.

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
                    type="button"
                    aria-pressed={activetechnologies === index}
                    onClick={() => setActivetechnologies(index)}
                    className={`relative py-4 text-lg transition-all duration-200 cursor-pointer ${activetechnologies === index
                      ? "text-red-600 font-semibold"
                      : "text-black hover:text-red-500"
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
            {/* Har tab ka content HTML mein (Google parh sake), sirf active nazar aata hai */}
            {technologies.map((tab, tabIndex) => (
              <div
                key={tabIndex}
                className={activetechnologies === tabIndex ? "flex flex-wrap justify-center gap-1 sm:gap-4" : "hidden"}
              >
                {tab.items.map((item, index) => (
                  <div
                    key={index}
                    className="w-[49%] sm:w-[31%] md:w-[23%] lg:w-37.5 bg-white shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                    />
                    <h3 className="mt-3 text-sm sm:text-base font-medium text-center">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-red-50 py-16 px-6 font-sans">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Talk to the DevApp Grid team"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Looking to Hire a Dedicated Team?
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed faq">
              We are a team of talented, experienced, and certified designers and developers. Let us build something extraordinary.
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-500 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@devappgrid.com"
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
                  <span>info@devappgrid.com</span>
                </a>

                <span className="text-black font-normal">or</span>

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
                  <span>USA :</span>
                  <a
                    href="tel:+18669788570"
                    className=" transition-colors"
                  >
                    +1 (866) 978-8570,
                  </a>
                  <a
                    href="tel:+13237477192"
                    className=" transition-colors"
                  >
                    +1 (323) 747-7192
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center max-w-5xl mx-auto space-y-5 mt-15 mb-10 px-5">
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              Industries We Serve
            </h2>
            <p>
              Our on-demand app development services extend across multiple different industries, offering advanced features,
              rich technology stacks, and high-quality performance improvement.
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
                  alt={`${item.title} app development`}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      loading="lazy"
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
          <div className="text-center max-w-5xl mx-auto space-y-5 mt-15 mb-10 px-5">
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              Offshore Web, Mobile & Software Development Company
            </h2>
            <p>
              DevApp Grid is a leading software development company with over 7 years of experience.
              Over the years, our team has completed more than 1,500 projects for companies of every size,
              offering flexible solutions and real business value.
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
                    alt={`${item.value} ${item.line1 ?? ""} ${item.line2 ?? ""}`.trim()}
                    loading="lazy"
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
        <section className="w-full bg-red-50 py-16 px-6 font-sans mt-10 mb-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Icon Illustration */}
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/letdiscuss-icon.webp"
                alt="Talk to the DevApp Grid team"
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
              Send your requirements to:
            </p>

            {/* Contact Info Box */}
            <div className="w-full max-w-2xl bg-red-50 border border-red-500 rounded-sm py-4 px-6 mb-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base font-bold text-black">
                {/* Email link */}
                <a
                  href="mailto:info@devappgrid.com"
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
                  <span>info@devappgrid.com</span>
                </a>

                <span className="text-black font-normal">or</span>

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
                  <span>USA :</span>
                  <a
                    href="tel:+18669788570"
                    className="transition-colors"
                  >
                    +1 (866) 978-8570,
                  </a>
                    <a
                    href="tel:+13237477192"
                    className=" transition-colors"
                  >
                    +1 (323) 747-7192
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Let’s Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <div className="text-center max-w-4xl mx-auto space-y-4 mt-4 px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
            Our Process for On-Demand App Design & Development
          </h2>
          <p className="text-black text-sm md:text-base leading-relaxed">
            A strong on-demand app starts with more than a feature list. Our development process combines market understanding, user research, product strategy, design, and technology to turn your concept into a practical digital product.
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
                    ? "text-red-700 border-red-600 font-bold"
                    : "text-black border-transparent hover:text-red-600"
                    }`}
                >
                  {step.tabTitle}
                </button>
                {index < processSteps.length - 1 && (
                  <span className="text-black font-light">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Main Layout (Circular Icons + Description) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Process Image Container */}
            <div className="relative w-72 h-72 mx-auto">

              {/* Chaaron step images HTML mein, sirf active nazar aati hai */}
              {stepImages.map((img, index) => (
                <div key={index} className={activeStepIndex === index ? "" : "hidden"}>
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            {/* Right Side Content Display */}
            {/* Har step ka text HTML mein (Google parh sake), sirf active nazar aata hai */}
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={activeStepIndex === index ? "flex flex-col justify-center" : "hidden"}
              >
                <span className="text-xs font-semibold tracking-wider text-black uppercase mb-2">
                  {step.stepLabel}
                </span>
                <h3 className="text-3xl font-extrabold text-black mb-4">
                  {step.heading}
                </h3>
                <p className="text-black leading-relaxed text-sm max-w-md">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
        <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Text Content */}
            <div className="flex flex-col ">
              <div className="space-y-4 text-black text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                  Faster Access to Services. Better User Experiences.
                </h2>

                <p>
                  Your customers shouldn’t have to jump through hoops to get the service
                  they need. We create intuitive on-demand apps that connect users with the
                  right providers, clear pricing, and real-time updates without
                  unnecessary friction.
                </p>

                <p>
                  From the first search to the final payment, every interaction is designed
                  to feel clear and convenient. Whether users are booking a service,
                  tracking an order, chatting with a provider, or leaving a review, your app
                  keeps the entire journey within reach.
                </p>

                <p className="font-semibold text-black">
                  Ready to build an on-demand app your customers will come back to? Let’s
                  talk.
                </p>
              </div>
            </div>

            {/* Right Side 3D Image Banner */}
            <div className="relative w-full h-80 sm:h-96 md:h-105 overflow-hidden">
              <Image
                src="/images/efficient-access-right.jpg"
                alt="Fast and efficient access to on-demand services"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </section>
        <section>
          <div className="text-center max-w-4xl mx-auto space-y-4 mt-4 px-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">Why Choose DevApp Grid?</h2>
            <p className="text-black text-sm md:text-base leading-relaxed">
              From development to testing, design to deployment, and everything in between, we offer a wide range of scalable on-demand app solutions.
            </p>
          </div>


        </section>
        <section className="max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:border-red-600 hover:shadow-lg"
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
          <div className="space-y-4 text-sm md:text-base text-black leading-relaxed text-center px-5">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-snug">
              Client Testimonials
            </h2>
            <p>
              As an on-demand app development company, our purpose has always
              centered on putting customer satisfaction first. Here is what
              some of our clients have to say about our services.
            </p>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
          {/* Outer Card Wrapper with Fixed Border & Accent */}
          <div className="relative bg-white border border-gray-300 p-8 md:p-10  shadow-sm hover:border-red-600 transition-all duration-300">
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
                      <div className="w-16 h-16 rounded-full border border-red-200 p-1 flex items-center justify-center bg-gray-50 shrink-0">
                        <img
                          src={item.image}
                          alt={`${item.name} – client review`}
                          loading="lazy"
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
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-black text-base md:text-lg leading-relaxed mb-8 max-w-4xl font-normal">
                      {item.review}
                    </p>

                    {/* Google Verified Branding */}
                    <div className="space-y-1 pb-2 md:pb-0">
                      <span className="text-xs text-black font-medium block">
                        verified
                      </span>
                      <img
                        src={item.verifiedImage}
                        alt="Verified Google review"
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
            <h2 className="flex justify-center font-bold text-3xl mb-4 mt-2">
              Frequently Asked Questions
            </h2>

            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center faq px-5">
              Here are answers to the questions our clients ask us most often
              about on-demand app development.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="w-full flex justify-between items-center gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <ChevronDown size={22} />
                    </span>
                  </button>

                  {/* Smooth FAQ Content */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-[16px] leading-8 text-black">
                        {faq.answer}
                      </div>
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
              );
            })}
          </div>
        </section>
        <section>
          <div className="text-center max-w-5xl mx-auto space-y-4 mt-3 mb-10 px-5">
            <h2 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              Have Something in Mind? Let's Talk
            </h2>
            <p>
              Explore DevApp Grid’s services and the development process we
              follow for mobile app and software projects, and see what our
              clients say about working with us. Then start a conversation
              and let’s turn your next great idea into reality together.
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