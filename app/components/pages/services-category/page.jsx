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
    slides,
    portfolioSlides,
    technologies,
    stats,
    industries,
    services,
    faqsData,
    testimonials,
} from "../../../../utils/data";
import Image from "next/image";

export default function ServicesCategory() {
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
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
                                Services
                                <br />
                                Category
                            </h1>

                            <p className="text-base md:text-lg leading-relaxed text-black">
                                Many conventional retailers have moved to digitalization with
                                the introduction of on-demand options. Technology advancements,
                                particularly mobile evolution, have dramatically changed the
                                eatery and café sector. Owners as well as businesspeople are now
                                realizing the need of developing a restaurant smartphone
                                application, webpage, and technology to help them grow their
                                brand. Furthermore, as the number of eatery and hotel visitors
                                and foodies grows, so does the requirement for controlling their
                                clients and culinary employees.
                            </p>

                            <p className="text-base md:text-lg leading-relaxed text-black">
                                Offering your customers with a virtual selection, online meal
                                ordering, virtual checkout, and other features through an app is
                                a latest craze that restaurants are embracing. The food app
                                developers here shall provide the greatest technology and
                                technology solution for eateries to maximize profits and attract
                                more consumers.
                            </p>
                            <ul className="mt-8 space-y-5 text-lg">
                                <li className="flex items-center gap-1 mb-2">
                                    <ChevronRight size={14} />
                                    Best Delivery App Development
                                </li>
                                <li className="flex items-center gap-1 mb-2">
                                    <ChevronRight size={14} />
                                    Mobile App Solution for Food Stores
                                </li>
                            </ul>
                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4 pt-6">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 bg-[#1B4B82] hover:bg-[#153a65] text-white font-semibold px-6 py-3 transition duration-200 shadow-md"
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
                            <div className="relative bg-[#EFF6FF] border border-blue-100/60  p-6 md:p-8 w-full shadow-lg">
                                {/* Top Right Ribbon Badge */}
                                <div className="absolute -top-6 -right-3 z-10 w-24 md:w-28 drop-shadow-md">
                                    <img
                                        src="/images/badge-sameday-resposnse.png"
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
                                            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
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
                                            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
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
                                            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            placeholder="Write here Brief about the project..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#0284C7] outline-none py-2 text-sm text-gray-800 placeholder-gray-400 resize-y transition-colors"
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

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="bg-[#1E4B82] hover:bg-[#163a66] text-white font-bold text-xs md:text-sm py-3 px-6 transition-colors shadow flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
