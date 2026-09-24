"use client";
import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Paperclip,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { offices } from "../contact-us/data";
import ContactForm from "../../contactForm/ContactForm";
import {
  partners
} from "../../../../utils/data";
import { submitContactForm } from "@/services/send-call-request";
  import { useRouter } from "next/navigation";
export default function ContactSection() {
  const fileInputRef = useRef(null);
  const [activetechnologies, setActivetechnologies] = useState(0);
  const [open, setOpen] = useState(-1);
  const [activeTab, setActiveTab] = useState("customer");
  const router = useRouter();
  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    sendNda: false,
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field-level error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const [errors, setErrors] = useState({}); 


  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
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
  };
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <section className="w-full my-8">
          <div className="bg-linear-to-r from-red-700 via-red-600 to-red-100 text-white p-6 md:p-12 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Let’s Connect
            </h2>
            <p className="text-gray-200 text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
              Hey there! If you have the next great mobile app and software
              development idea, our team would love to help you bring it to
              life.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition duration-200"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-red-950 font-semibold px-6 py-3 rounded transition duration-200"
              >
                See Our Work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              During the 30 minute call, we’ll discuss:
            </h3>
          </div>
        </section>

        {/* Main Form & Content Grid */}
        <section className="py-6 bg-white w-full">
          <div className="w-full px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
              {/* Left Side Info */}
              <div className="w-full">
                <p className="mt-6 text-gray-700">
                  Share Your Project Details on{" "}
                  <span className="font-semibold">info@devappgrid.com</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg">Talk To Experts:</h3>
                  <p className="mt-2 text-gray-700">
                    USA: +1 (866) 978-8570
                  </p>
                </div>

                <ul className="mt-8 space-y-5 text-lg">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>Your current product strategy and roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>
                      How our team can support you on your journey to build a
                      successful app
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={18} className="shrink-0 mt-1" />
                    <span>
                      Cost and timeline estimates, based on what we know today
                    </span>
                  </li>
                </ul>

                <p className="mt-6 text-black leading-8">
                  We’ll also provide you with some advice on what to avoid,
                  based on our 12 years experience of building and launching
                  apps, as well as industry trends and best practices that we
                  observe in the market today.
                </p>

                <h1 className="font-bold text-lg mt-6">
                  What do I need to prepare?
                </h1>
                <p className="mt-2 text-black leading-8">
                  Please come prepared to provide as much detail about your
                  project as possible. What problem are you trying to solve? Who
                  is going to use your product?
                </p>
              </div>

              {/* Right Side Form Container */}
              <div className="w-full relative pt-6 pr-2 sm:pr-4">
                <div className="relative bg-[#F7F8FA] border border-blue-100/60 p-6 md:p-8 w-full shadow-lg">
                  {/* Top Right Ribbon Badge */}
                  <div className="absolute -top-6 -right-2 sm:-right-3 z-10 w-20 md:w-24 drop-shadow-md">
                    <img
                      src="/images/contact-form-logo.png"
                      alt="Same Day Response Guaranteed"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
                    Request a Free Quote
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
                    className={`w-full bg-transparent border-b-2 ${errors.name ? "border-red-500" : "border-gray-300"} focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50`}
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
                    className={`w-full bg-transparent border-b-2 ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50`}
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
                    className={`w-full bg-transparent border-b-2 ${errors.phone ? "border-red-500" : "border-gray-300"} focus:border-red-600 outline-none py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-50`}
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

            {/* Office Heading */}
            <div className="mt-20 text-center w-full">
              <h2 className="text-4xl font-bold">Our Office</h2>

              <p className="max-w-5xl mx-auto mt-6 text-gray-600 leading-8">
                To better serve our clients, DevApp Grid has opened
                locations throughout the world. Our diversified geographic
                presence allows us to provide superior services on a global
                scale, from USA, Toronto, Canada, London, New York, and
                Australia.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 font-semibold">
                <span className="flex items-center gap-2">
                   <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/teams.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/teams.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  Devapp
                </span>

                <span className="flex items-center gap-2">
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
                  info@devappgrid.com
                </span>

                <span className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 bg-red-600"
                    style={{
                      maskImage: "url(/icons/calendar.svg)",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskImage: "url(/icons/calendar.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                    }}
                  ></div>
                  schedule meeting
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Office Cards Section */}
        <section className="py-10 w-full">
          <div className="w-full px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white shadow-sm hover:shadow-lg transition rounded-md p-6 sm:p-10 text-center w-full"
                >
                  {office.title && (
                    <h4 className="text-2xl font-bold mb-6">{office.title}</h4>
                  )}

                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-24 h-24 mx-auto object-contain"
                  />

                  <h3 className="text-3xl sm:text-4xl font-bold mt-6">
                    {office.city}
                  </h3>

                  <p className="text-gray-600 mt-5 leading-8">
                    {office.address}
                  </p>

                  {office.phone && (
                    <div className="flex justify-center items-center gap-2 mt-8 text-xl sm:text-2xl font-semibold">
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
                      <span>{office.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
        <section className="py-10 bg-white w-full">
          <div className="w-full px-2 sm:px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Have Something in Mind? Let's Talk
            </h2>

            <p className="mt-8 text-gray-700 text-base md:text-xl leading-8 md:leading-10 max-w-5xl mx-auto">
              Have a look at the services and development process of the Devapp
              Grid. See what process we follow for mobile app and software
              development. Have a look at how we are praised by our clients.
              Start a conversation to innovate your next great idea into reality
              with us.
            </p>
          </div>
        </section>

        <div className="mb-2.5 pb-2 w-full">
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
