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
  bottomFeatures,
  portfolioSlides,
  technologies,
  stats,
  industries,
  faqsData,
  testimonials,
} from "../../../../utils/data";
import {
  datingSolutions,
  slides,
  ServiceSectionData,
  appData,
  tabs,
  services
} from "./data";
import Image from "next/image";
  import { useRouter } from "next/navigation";
export default function SocialMedia() {
  const [activeTab, setActiveTab] = useState("trainer");
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
    const [errors, setErrors] = useState({});
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
  const router = useRouter();
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

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
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
    } catch (error) {
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
  };;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        const blogList = data?.response?.data || [];
        setBlogs(blogList);
      } catch (error) {
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
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug bg-linear-to-r from-red-500 via-red-800 to-red-900 bg-clip-text text-transparent">
                Build a Dating App People
                <br className="hidden sm:block" />
                Actually Fall For
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black">
                We build secure, scalable, and genuinely engaging dating applications
                designed around real human connection. Whether your goal is casual matching,
                serious relationships, or a completely unique dating experience, our team
                transforms your idea into a polished digital platform powered by modern
                technology.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                Our experienced developers combine intuitive UI/UX design with reliable
                backend architecture to create dating platforms that are easy to use and
                built to scale. From initial product planning and design to development,
                testing, deployment, and ongoing improvements, we provide complete
                end-to-end dating app development services.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black">
                With a strong focus on security, performance, and thoughtful functionality,
                we make sure every feature serves a clear purpose. Whether you're launching a
                new dating startup or expanding an existing platform, Devapp Grid helps you build
                an application designed to encourage meaningful connections while supporting
                long-term growth.
              </p>
              <ul className="mt-8 space-y-5 text-lg">
                <li className="flex items-center gap-1 mb-2">
                  <ChevronRight size={14} />
                  Custom UI/UX as per desired user flow
                </li>
                <li className="flex items-center gap-1 mb-2">
                  <ChevronRight size={14} />
                  Secure user authentication & privacy features
                </li>
                <li className="flex items-center gap-1 mb-2">
                  <ChevronRight size={14} />
                  Real-time chat, match, and notification modules
                </li>
                <li className="flex items-center gap-1 mb-2">
                  <ChevronRight size={14} />
                  Scalable backend for user growth and analytics
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-700 text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-gray-400 font-semibold px-6 py-3 transition duration-200 shadow-sm"
                >
                  See Our Work <ArrowRight className="w-4 h-4 text-black" />
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
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full bg-transparent border-b-2 ${
                        errors.name ? "border-red-500" : "border-gray-300"
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
                      className={`w-full bg-transparent border-b-2 ${
                        errors.email ? "border-red-500" : "border-gray-300"
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
                      className={`w-full bg-transparent border-b-2 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
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
        <section className="py-12 px-4 max-w-6xl mx-auto font-sans text-center text-gray-800">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-6">
            Why Devapp Grid for Custom Dating App Development in the USA
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700 max-w-6xl mx-auto mb-10">
            <p>
              Every dating app has a different purpose, audience, and business model.
              At Devapp Grid, we build custom dating applications around your specific goals,
              user behavior, and growth strategy. From UI/UX design and development to
              testing and deployment, we focus on creating a secure, polished, and
              reliable experience across both Android and iOS.
            </p>

            <p>
              Our agile development approach keeps the process transparent while giving
              your platform the flexibility to evolve. We can integrate advanced
              capabilities such as AI-powered matchmaking, location-based discovery,
              real-time notifications, voice and video chat, text messaging, profile
              verification, and secure media sharing to create a more engaging and
              trustworthy experience.
            </p>

            <p>
              Whether you're launching a dating startup from scratch or scaling an
              existing platform, our team focuses on clean architecture, thoughtful
              design, strong security, and scalable technology. We prioritize efficient
              development without cutting corners on code quality or testing, helping you
              create a dating platform that users can trust and keep coming back to.
            </p>
          </div>
          <div className="w-full overflow-hidden ">
            <Image
              src="/images/Custom-Dating-App-Development-USA.png"
              alt="Dating App Development Banner"
              width={1200}
              height={800}
              sizes="100vw"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="py-12 px-4 max-w-7xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-black leading-snug">
                On-Demand Dating App Development Solutions We Offer
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We offer on-demand dating app solutions customized to diverse
                audiences and their relationship goals. We are not just app
                developers, but we ensure to be your trusted technology partner
                to build an app that stands ahead in the highly competitive
                market.
              </p>
              <div className="flex flex-col gap-y-5">
                {datingSolutions.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <span className="text-gray-500 font-bold text-lg leading-snug shrink-0">
                      &#8250;
                    </span>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      <strong className="font-bold text-black">
                        {item.title}:
                      </strong>{" "}
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/lets-talk"
                  className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-6 py-3 transition duration-200 shadow-sm"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full h-full flex justify-center lg:justify-end">
              <Image
                src="/images/On-Demand-Dating-App-Solutions.png"
                alt="On-Demand Dating App Development"
                width={1024}
                height={768}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full max-w-lg lg:max-w-none h-auto object-cover rounded-xs"
              />
            </div>
          </div>
        </section>
        <section className="mt-10">
          <style>{`
              .portfolio-slider .swiper-pagination-bullet {
                background-color: #cbd5e1 !important;
                opacity: 1 !important;
              }
              .portfolio-slider .swiper-pagination-bullet-active {
                background-color: #dc2626 !important; /* Red Color */
              }
            `}</style>
          <div className="mx-auto max-w-7xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              className="portfolio-slider"
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
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10 px-5">
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={1200}
                        height={800}
                        sizes="100vw"
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-155 object-cover"
                      />
                    </div>
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
                            <ChevronRight size={17} />
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
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    {item.title}
                  </h2>

                  <p
                    className="text-black text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
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

                <div className="w-full lg:w-1/2 min-h-87.5 sm:min-h-112.5 relative overflow-hidden shadow-sm">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt || ""}
                    width={1200}
                    height={800}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <section >
          <div className="max-w-7xl mx-auto px-4">
            <div className=" bg-red-50 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <Image
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight faq">
                Ready to Get Started?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7 faq">
                Call us Today for a Free Consultation:
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
                        WebkitMaskImage: "url(/icons/phone-icon.svg",
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
                href="/lets-talk"
                className="group mt-8 w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex justify-center items-center gap-3  transition cursor-pointer"
              >
                Let’s Discuss
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full max-w-5xl mx-auto md:py-16 px-5 mt-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Essential Features for a Modern Dating App
            </h2>
            <p className="text-black text-sm md:text-base max-w-6xl mx-auto">
              Great dating apps make it easy to discover people, express interest, start conversations,
              and build meaningful connections. We combine the essential functionality users expect with carefully selected features that
              support engagement, trust, personalization, and long-term platform growth.
            </p>
          </div>
        </section>
        <div className="max-w-6xl mx-auto p-6 font-sans">
          <div className="flex justify-center mb-8 w-full">
            <div className="flex gap-8 border-b border-red-200">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative pb-3 text-base md:text-lg transition-colors duration-200 ${isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-500 hover:text-red-700 font-normal cursor-pointer"
                      }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {appData[activeTab]?.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-center text-center rounded-sm min-h-36 gap-3"
              >
                <Image
                  src={item.iconPath}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-gray-800 font-medium text-sm md:text-base">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <section >
          <div className="max-w-7xl mx-auto px-4">
            <div className="mt-10 bg-red-50  px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <Image
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight faq">
                So, We Guess You want to talk about your Project
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7 faq">
                Send your Requirements on
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
        <section className="py-12 px-4 max-w-6xl mx-auto font-sans text-gray-800 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full overflow-hidden rounded-sm">
              <Image
                src="/images/our-developers.jpg"
                alt="Hire Developers"
                width={1200}
                height={800}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                Hire Top Dating App Developers in the USA
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                As a leading dating app development company in the USA, we bring
                top-tier talent and years of hands-on experience to every project,
                delivering cutting-edge dating app solutions built to perform. We
                specialize in crafting modern, feature-rich dating apps that stand out
                in a crowded market and stay true to your brand&apos;s vision.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our experienced developers study user behavior and industry trends before
                a single line of code gets written. We combine strong functionality with
                fresh innovation to create seamless, intuitive, and genuinely engaging
                experiences for every user.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Partner with the best custom dating app developers in the USA and get a
                secure, scalable platform built around your users. Whether you&apos;re
                starting from scratch or scaling an existing app, we deliver tailored
                solutions designed to improve performance, strengthen user engagement,
                and help your dating platform compete effectively in the market.
              </p>
            </div>
          </div>

          <div className="text-center max-w-6xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Cost To Hire a Custom Dating App Development Company
            </h2>

            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Dating app development costs vary based on several factors, including
                app complexity, feature set, platform choice (Android, iOS, or both),
                and your chosen tech stack. Adding AI or AR integration will increase
                the investment. Custom UI/UX design, backend scalability, and advanced
                privacy and security measures can also add to the cost, as these
                require deeper engineering effort.
              </p>

              <p>
                We offer flexible engagement models built for startups, mid-sized
                businesses, and enterprise clients alike. Our pricing is transparent,
                competitive, and value-driven, so you can choose the model that fits
                your business needs and development requirements.
              </p>

              <p>
                Our custom dating app development solutions are designed around your
                specific business goals. We&apos;re committed to delivering a secure,
                high-performing, and user-friendly dating platform on budget, without
                ever compromising on quality.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="space-y-8 text-center">
            <div className="w-full overflow-hidden ">
              <Image
                src="/images/healthcare-app-built.jpg"
                alt="Cost Analysis Banner"
                width={1200}
                height={800}
                sizes="100vw"
                className="w-full h-auto object-cover max-h-96"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-3">
                Endeavors That Make Us Proud
              </h2>
              <p className="text-sm md:text-base text-gray-700 max-w-6xl mx-auto leading-relaxed">
                Devapp Grid has always been honored with valuable words
                for the efforts given on mobile app development that are
                efficiently unique and user centric. Here are some of the best
                examples for this.
              </p>
            </div>
          </div>
        </section>

        <section>
          <style>{`
                        .portfolio-slider .swiper-pagination-bullet {
                          background-color: #cbd5e1 !important;
                          opacity: 1 !important;
                        }
                        .portfolio-slider .swiper-pagination-bullet-active {
                          background-color: #dc2626 !important; /* Red Color */
                        }
                      `}</style>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="portfolio-slider"
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
                              <ChevronRight className="w-4 h-4 text-gray-700 shrink-0 stroke-[2.5]" />{" "}
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                          {slide.technologies.map((tech, i) => (
                            <div key={i} className="text-center">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
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
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </div>

                      <div className="flex justify-center">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={1200}
                          height={800}
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

        <div className="text-center max-w-4xl mx-auto space-y-4 mt-4 px-5">
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
                    <span
                      className={`absolute left-0 -bottom-px h-0.5 bg-red-600 transition-all duration-300 ${activetechnologies === index ? "w-full" : "w-0"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
              {technologies[activetechnologies].items.map((item, index) => (
                <div
                  key={index}
                  className="w-[49%] sm:w-[31%] md:w-[23%] lg:w-37.5 bg-white shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
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

        <section>
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-red-50 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center">
              <Image
                src="/images/letdiscuss-icon.png.webp"
                alt=""
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto"
              />
              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight faq">
                We are Team of Talented, Experienced, and Certified Designers
                and Developers.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-black max-w-3xl mx-auto leading-7 faq">
                Let us Build Something Extraordinary.
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
                        WebkitMaskImage: "url(/icons/phone-icon.svg",
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
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-15 mb-10 px-5">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              {" "}
              Offshore Web, Mobile & Software Development Company
            </h1>
            <p>
              Devapp Grid is a leading Software Development Company currently
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
          <div className="text-center max-w-1xl mx-auto space-y-5 mt-10 mb-10 px-5">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
              {" "}
              Industries We Serve
            </h1>
            <p>
              Our on-demand app development services extend across multiple
              different industries, offering advanced features, rich technology
              stacks, and high-quality performance improvement.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-8 sm:mt-12">
            {industries.map((item, index) => (
              <div
                key={index}
                className="relative h-40 sm:h-56 md:h-72 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.bgImage}
                  alt={item.title}
                  width={1200}
                  height={800}
                  sizes="100vw"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt=""
                      width={40}
                      height={40}
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
          <div className="text-center max-w-6xl mx-auto space-y-4 mt-15 px-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
              Why Choose Us for Dating App Development
            </h1>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Building a dating app takes more than matching algorithms and messaging features.
              It requires a deep understanding of human behavior, privacy, trust, engagement,
              and the moments that turn a simple match into a meaningful connection. We combine
              product strategy, thoughtful UX, modern technology, and scalable engineering to create
              dating platforms that are
              designed to attract users, earn their trust, and keep them coming back.
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
                <Image
                  src={service.image}
                  alt={service.title}
                  width={64}
                  height={64}
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
          <div className="relative bg-white border border-red-300 p-8 md:p-10  shadow-sm hover:border-red-600 transition-all duration-300">
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
                    <div className="flex items-center gap-4 mb-6">
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
                          e.target.src =
                            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
          <div>
            <h1 className="flex justify-center font-bold text-3xl mb-4 mt-2">
              Frequently Asked Questions
            </h1>

            <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center faq px-5">
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
                      : "border-gray-200 hover:border-red-400"
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
          <div className="text-center max-w-1xl mx-auto space-y-4 mt-3 mb-10 px-5">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black ">
              Have Something in Mind? Let's Talk
            </h1>
            <p>
              Have a look at the services and development process of the Devapp
              Grid. See What process we follow for mobile app and software
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
