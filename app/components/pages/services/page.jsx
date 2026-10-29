"use client";
import {
    ChevronDown,
    ChevronUp,
    ChevronRight,
    Star,
    Paperclip,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import { useState, useRef } from "react";
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
import { servicesData } from "../services/data";
import Image from "next/image";

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

export default function Service() {
    const [activeServiceTab, setActiveServiceTab] = useState("mobile-apps");
    const [activeTab, setActiveTab] = useState("driver");
    const [activetechnologies, setActivetechnologies] = useState(0);
    const [open, setOpen] = useState(-1);
    const [activeStepIndex, setActiveStepIndex] = useState(0);
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
    const leftPoints = [
        "Conceptualize",
        "Define the Product",
        "Conduct Consumer Research",
        "Outline the Features",
        "Create A Blueprint",
    ];

    const rightPoints = [
        "Collecting Specifications",
        "Test the Prototype",
        "Start Development",
        "Quality Assurance",
        "Build an In-House Prototype",
    ];
    const points = [
        "Ask the right questions to the client",
        "Propose solutions other than the obvious ones",
        "Bring your team’s opinions and abilities forward",
        "Compare the apps in the market with what you desire",
        "Identify opportunities",
    ];
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
                "Next, our trained developers use the planned technology stack and coding skills to complete the app-building process, adding features and configurations.",
        },
        {
            stepLabel: "STEP 4",
            tabTitle: "4. Deliver",
            heading: "Deliver",
            description:
                "After multiple testing batches, the app is finally ready to deploy, across iOS or Android platforms, or both- we focus on after-launch support as well.",
        },
    ];

    const stepImages = [
        { src: "/images/discove.jpg", alt: "Discover – project research" },
        { src: "/images/uiux-design.jpg", alt: "Design – UI/UX design" },
        { src: "/images/development.jpg", alt: "Build – app development" },
        { src: "/images/user-testing.jpg", alt: "Deliver – testing and launch" },
    ];

    // Form State
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
            />
            <div className="w-full max-w-7xl mx-auto">
                <div className="mt-6 pt-2">
                    <img
                        src="/images/service-header-banner.jpg"
                        alt="DevApp Grid software, web, and mobile app development services"
                        className="w-full object-cover"
                    />
                </div>
                <section className="space-y-4 mt-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-red-700 items-center flex justify-center">
                        Services
                    </h1>

                    <p className="text-black text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
                        DevApp Grid builds websites, mobile apps, and software that help businesses improve operational efficiency and customer engagement. Hire certified mobile app developers from DevApp Grid with the experience to deliver excellent Android, iOS, and cross-platform app development services.
                    </p>

                    <p className="text-black text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
                        DevApp Grid is an expert web and mobile software development company. Our team includes trained and qualified software developers, UI/UX designers, and software testers who work closely together to turn your software idea into reality.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition"
                        >
                            Inquire Now
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-red-50 px-6 py-2.5 text-sm font-semibold text-black transition"
                        >
                            See Our Work
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* Get The DevApp Grid Section */}
                <section className="mt-16 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-black flex justify-center">
                        Get the DevApp Grid Advantage
                    </h2>

                    <p className="text-black font-medium text-sm md:text-base flex justify-center">
                        Process-driven Methodology, Result-driven Solutions
                    </p>

                    <p className="text-black font-medium text-sm md:text-base flex justify-center">
                        The perfect blend of tailored services for any development need. Any scope. Any time.
                    </p>

                    <div className="space-y-4 pt-2 text-black text-sm md:text-base max-w-5xl mx-auto leading-relaxed text-center">
                        <p>
                            At DevApp Grid, we build engaging digital experiences. With our full suite of skills and services, we connect your brand with customers in unique ways and open new business opportunities through scalable solutions. Over years of experience as an IT solutions company, DevApp Grid has built deep expertise in design, development, and digital growth.
                        </p>

                        <p>
                            In today's digital era, now is the right time to build a strong online presence with elegant, interactive, modern, and responsive solutions for your users. At DevApp Grid, we understand the unique requirements of your business, from mobile app development, web development, digital marketing, and game app development to the latest technologies for every industry.
                        </p>

                        <p>
                            Experience our extremely high-quality end-to-end services for your website, game application, digital marketing, and mobile application projects.
                        </p>
                    </div>
                </section>

                {/* Bottom Image Banner */}
                <div className="mt-12 w-full">
                    <img
                        src="/images/get-devapp-service.jpg"
                        alt="DevApp Grid team working on client projects"
                        className="w-full h-auto object-cover shadow-sm"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 items-start mt-10 mb-10">
                    {/* Left Sidebar Navigation */}
                    <div className="lg:col-span-4 flex flex-col space-y-3">
                        {servicesData.map((tab) => {
                            const isActive = activeServiceTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveServiceTab(tab.id)}
                                    className={`w-[72%] flex items-center gap-4 p-4 border text-left transition duration-200 ${isActive
                                        ? "border-red-500 bg-white shadow-sm font-semibold"
                                        : "border-red-200 bg-white hover:bg-red-50 text-black"
                                        }`}
                                >
                                    <img
                                        src={tab.icon}
                                        alt={tab.title}
                                        className="w-10 h-10 object-contain shrink-0"
                                    />
                                    <span
                                        className={`text-base md:text-lg ${isActive ? "text-black font-semibold" : "text-black"
                                            }`}
                                    >
                                        {tab.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Tab Content Display */}
                    <div className="lg:col-span-8 space-y-8 pl-0 lg:pl-4">
                        {/* Har service ka content HTML mein (Google parh sake), sirf active nazar aata hai */}
                        {servicesData.map((currentContent) => (
                            <div
                                key={currentContent.id}
                                className={activeServiceTab === currentContent.id ? "space-y-8" : "hidden"}
                            >
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                                        {currentContent.heading}
                                    </h2>
                                    <p className="text-black text-base md:text-lg leading-relaxed max-w-3xl">
                                        {currentContent.description}
                                    </p>
                                </div>

                                {/* Sub-Items Cards Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {currentContent.items.map((subItem, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-red-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-200 min-h-40"
                                        >
                                            <img
                                                src={subItem.icon}
                                                alt={subItem.title}
                                                loading="lazy"
                                                className="w-12 h-12 object-contain mb-4"
                                            />
                                            <span className="text-sm md:text-base font-semibold text-black">
                                                {subItem.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* View All Button */}
                                <div className="pt-2">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 transition duration-200 text-sm md:text-base"
                                    >
                                        View All Services
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <section className="w-full bg-red-50 py-16 px-6 font-sans">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        {/* Top Icon Illustration */}
                        <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                            <Image
                                src="/images/customer-support-icon.png"
                                alt="Talk to the DevApp Grid team"
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>

                        {/* Section Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                            Let’s Discuss Your Software or Mobile App Project
                        </h2>

                        {/* Subtitle Paragraph */}
                        <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
                            Send your requirements to:
                        </p>

                        {/* Contact Info Box */}
                        <div className="w-full max-w-2xl bg-red-50 border border-red-400 rounded-sm py-4 px-6 mb-8 shadow-xs">
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
                                    <span>USA:</span>
                                    <a
                                        href="tel:+18669788570"
                                        className="transition-colors"
                                    >
                                        +1 (866) 978-8570,
                                    </a>
                                    <a
                                        href="tel:+13237477192"
                                        className="transition-colors"
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
                                className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm md:text-base px-7 py-3 transition duration-200 shadow-md"
                            >
                                Let’s Talk <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <span className="text-4xl md:text-5xl font-black text-black block">
                                1.
                            </span>

                            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                                Ideation and Evaluation
                            </h2>

                            <p className="text-black text-base leading-relaxed">
                                Whatever type of apps we develop or the services we provide, we start
                                the work by talking to the client. This provides an idea of what
                                exactly the client needs and what they have in mind. The next step is
                                evaluating the client’s needs and then creating an outline of
                                what the software or app should look like. This process involves the
                                following steps:
                            </p>

                            <ul className="space-y-3 pt-2">
                                {points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-black shrink-0 mt-0.5" />
                                        <span className="text-black font-medium text-base">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full h-full min-h-87.5 overflow-hidden rounded-md">
                            <img
                                src="/images/highlights-res-app.jpg"
                                alt="Ideation and evaluation stage of app development"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Side Image / Showcase Banner */}
                        <div className="lg:col-span-5 w-full bg-linear-to-tr p-8 flex items-center justify-center min-h-105">
                            <img
                                src="/images/prodcut-photo-service-2.jpg"
                                alt="Product design app mockup"
                                className="w-full max-w-sm h-auto object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Right Side Content */}
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-4xl md:text-5xl font-black text-black block">
                                2.
                            </span>

                            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                                Product Design
                            </h2>

                            <p className="text-black text-base leading-relaxed">
                                Design is an important part of every app we build. Half the work is
                                done when a client approves the project after seeing the design. Our
                                designers create a clean, attractive design for your app and make
                                sure users can navigate it easily without any help.
                                The steps involved in product design include:
                            </p>

                            {/* 2-Column List Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                                {/* Column 1 */}
                                <ul className="space-y-3">
                                    {leftPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <ChevronRight className="w-5 h-5 text-black shrink-0 mt-0.5" />
                                            <span className="text-black font-medium text-base">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Column 2 */}
                                <ul className="space-y-3">
                                    {rightPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <ChevronRight className="w-5 h-5 text-black shrink-0 mt-0.5" />
                                            <span className="text-black font-medium text-base">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2 className="flex justify-center font-bold text-3xl mb-10">
                            Industries We Serve
                        </h2>
                        <p className="mt-8 max-w-5xl mx-auto text-black text-base md:text-lg leading-6">
                            As a software and app development company, we have reached major
                            milestones by serving leading industries such as:
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
                <div className="text-center max-w-7xl mx-auto space-y-4 mt-10">
                    <h2 className="text-2xl sm:text-2xl md:text-5xl font-extrabold text-black">
                        The Process We Follow for Software and App Development
                    </h2>
                    <p className="text-black text-sm md:text-base leading-relaxed">
                        Our developers have delivered many types of web, mobile, and software
                        projects with great results. We give every project dedicated attention
                        throughout the development journey and tailor our development plan to
                        your needs.
                    </p>
                </div>
                <div className="w-full max-w-5xl mx-auto px-4 py-12">
                    {/* Top Tabs Header */}
                    <div className="flex items-center gap-6 border-gray-100 pb-3 mb-12 overflow-x-auto">
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
                        <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
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

                <section>
                    <div className="text-center max-w-4xl mx-auto space-y-4 mt-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                            Why Choose DevApp Grid?
                        </h2>
                        <p className="text-black text-sm md:text-base leading-relaxed">
                            From design to development, testing to deployment, and everything
                            in between, we offer a wide range of scalable software and app
                            development solutions.
                        </p>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border border-red-50 p-6 sm:p-8 transition-all duration-300 hover:border-red-500 hover:shadow-lg"
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
                    <div className="text-center max-w-5xl mx-auto space-y-5 mt-10 mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-2xl font-extrabold text-black">
                            Offshore Web, Mobile & Software Development Company
                        </h2>
                        <p>
                            DevApp Grid is a leading software development company with over 7
                            years of experience. Over the years, our team has completed more
                            than 1,500 projects for companies of every size, offering flexible
                            solutions and real business value.
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
                <div className="text-center max-w-4xl mx-auto space-y-4 mt-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                        Technologies We Use
                    </h2>
                    <p className="text-black text-sm md:text-base leading-relaxed">
                        We use modern, proven technologies to build fast, secure, and
                        scalable websites, mobile apps, and software.
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
                <section>
                    {/* Heading */}
                    <div>
                        <h2 className="flex justify-center font-bold text-3xl mb-4 mt-2">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-8 mb-10 max-w-5xl mx-auto text-black text-base md:text-lg leading-6 text-center">
                            Here are answers to the questions our clients ask us most often
                            about our services.
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
                                            : "border-red-50 hover:border-red-300"
                                            }`}
                                    >
                                        {/* Question */}
                                        <button
                                            type="button"
                                            aria-expanded={open === index}
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
                    <div className="text-center max-w-5xl mx-auto space-y-4 mt-3 mb-10">
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