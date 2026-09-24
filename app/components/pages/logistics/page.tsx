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
  services,
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
import { useRouter } from "next/navigation";
export default function Logistic() {
  const [activeTab, setActiveTab] = useState<string>("driver");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState<number>(-1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Jaise hi user type karna shuru kare, us field ka error hata dein
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());
      payload.append("is_nda", formData.sendNda ? "1" : "0");
      payload.append("service", formData.service || "");
      payload.append("service_category", formData.service_category || "");

      if (formData.file instanceof File) {
        payload.append("file", formData.file);
      }

      const response = await submitContactForm(payload);
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
    } catch (error: any) {
      console.error("API ERROR:", error);
      console.error("API RESPONSE:", error?.response?.data);

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
    if (statusMessage.text) {
      const timer = setTimeout(() => {
        setStatusMessage({ type: "", text: "" });
      }, 5000);

      return () => clearTimeout(timer);
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
                    className="flex items-center gap-2 font-semibold text-gray-800 text-base md:text-lg"
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

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                  noValidate
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${errors.name ? "border-red-500" : "border-gray-300"
                        } focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${errors.email ? "border-red-500" : "border-gray-300"
                        } focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${errors.phone ? "border-red-500" : "border-gray-300"
                        } focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Write here Brief about the project..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 resize-y transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* File Upload & NDA Checkbox */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs md:text-sm text-gray-700 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer font-medium hover:text-gray-900 shrink-0">
                      <Paperclip className="w-4 h-4 text-gray-600" />
                      <span>Upload file:</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        disabled={loading}
                        className="hidden"
                      />
                    </label>

                    <span className="text-gray-500 truncate max-w-full sm:max-w-45">
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
                      className="text-xs md:text-sm font-semibold text-gray-700 cursor-pointer"
                    >
                      Please Send NDA
                    </label>
                  </div>

                  

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
          {/* Top Heading */}
          <div className="text-center max-w-6xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug px-5">
              Businesses Transportation and Logistics App Development Company for Western
            </h2>

            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed text-center px-5">
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
              src="/images/industry/logistics/logistics-fullwidth.webp"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug px-5">
                Logistics App Development Solutions for Modern Transportation
                Challenges
              </h2>

              <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed px-5">
                Developing user-friendly apps for businesses in the transportation and
                logistics sector is what we specialize in. From concept through
                deployment, we manage the complete process, taking care of every stage so
                businesses can concentrate on running their operations while we handle
                the technical side of building an effective logistics management
                solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 px-5 mb-5">
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

        <section>
          <div>
            {/* CTA Box */}
            <div className="md:mt-20 bg-red-50 rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight faq">
                Ready to Build a Custom Logistics App for Your Business?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7 faq">
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
                      info@devappgrid.com
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
                      USA: +1 (866) 978-8570
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3 transition cursor-pointer"
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
            <style>{`
              .portfolio-swiper .swiper-pagination-bullet {
                background-color: #cbd5e1 !important;
                opacity: 1 !important;
              }
              .portfolio-swiper .swiper-pagination-bullet-active {
                background-color: #dc2626 !important;
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
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10 px-5">
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

        <section>
          <div className="max-w-7xl mx-auto px-4">
            <div className="md:mt-10 bg-red-50 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <img
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />
              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight faq">
                Ready to Build a Custom Logistics App?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7 faq">
                Partner with our logistics app development company to streamline
                fleet management, delivery tracking, and supply chain
                operations.
              </p>
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
                      info@devappgrid.com
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
                      USA: +1 (866) 978-8570
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/custom-software-development"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3 transition cursor-pointer"
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
        <section>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed text-center px-5 mt-10">
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
                          e.currentTarget.src =
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

            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center px-5">
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
      </div>
    </>
  );
}