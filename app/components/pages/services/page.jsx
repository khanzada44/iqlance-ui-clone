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
import { servicesData } from "../services/data";
import Image from "next/image";

export default function Service() {
    const [activeServiceTab, setActiveServiceTab] = useState("mobile-apps");
    const currentContent = servicesData.find((item) => item.id === activeServiceTab);
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
        "Outlining",
        "Create A Blueprint",
    ];

    const rightPoints = [
        "Collecting Specifications",
        "Test the sample",
        "Start Development",
        "Quality providing",
        "Developing in-house sample application",
    ];
    const points = [
        "Ask the right questions to the client",
        "Propose solutions other than the obvious ones",
        "Bring your team’s opinions and abilities forward.",
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
                <div className="mt-6 pt-2">
                    <img
                        src="/images/service-header-banner.jpg"
                        alt=""
                        className="w-full object-cover"
                    />
                </div>
                <section className="space-y-4 mt-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-red-700 items-center flex justify-center">
                        Services
                    </h1>

                    <p className="text-gray-700 text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
                        iQlance develops web, mobile apps, softwares that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from iQlance who are experienced enough for delivering excellence in Android, iOS and cross-platform app development services.
                    </p>

                    <p className="text-gray-700 text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
                        iQlance is a expert and professional web and mobile software development company. The iQlance team consists of trained and qualified software developers, UI/UX designers, and software testers. The entire iQlance team works in synchronization with each other, to transform your software development dream into reality.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition"
                        >
                            Inquiry Now
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-red-50 px-6 py-2.5 text-sm font-semibold text-gray-800 transition"
                        >
                            See Our Work
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* Get The iQlance Section */}
                <section className="mt-16 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-black flex justify-center">
                        Get The iQlance
                    </h2>

                    <p className="text-gray-800 font-medium text-sm md:text-base flex justify-center">
                        Process-driven Methodology, Result-driven Solutions
                    </p>

                    <p className="text-gray-800 font-medium text-sm md:text-base flex justify-center">
                        The perfect blend of tailored services for any development inducement. Any Scope. Any time.
                    </p>

                    <div className="space-y-4 pt-2 text-gray-700 text-sm md:text-base max-w-5xl mx-auto leading-relaxed text-center">
                        <p>
                            At iQlance, we build engaging digital experiences. With our full suite of skills and services, we connect your brand with customers in unique ways, open new business opportunities and growth through extensible solutions. Over the years of rich experience, iQlance, as an IT solutions company has designed, developed and promoted outstanding expertise.
                        </p>

                        <p>
                            In today's digital era, this is the right time to build a strong online web presence with elegant, interactive, modernized and responsive solutions for the end-users. At iQlance, we care and understand your unique requirements for your business; from mobile app development services, web development, digital marketing, and game app development solutions to trending technologies for all industries.
                        </p>

                        <p>
                            Experience our extremely high-quality end-to-end services for your website, game application, digital marketing, and mobile application projects.
                        </p>
                    </div>
                </section>

                {/* Bottom Image Banner */}
                <div className="mt-12 w-full">
                    <img
                        src="/images/get-iqlance-service.jpg"
                        alt="iQlance Services Teamwork"
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
                                    onClick={() => setActiveServiceTab(tab.id)}
                                    className={`w-[72%] flex items-center gap-4 p-4 border text-left transition duration-200 ${isActive
                                        ? "border-red-500 bg-white shadow-sm font-semibold"
                                        : "border-red-200 bg-white hover:bg-red-50 text-gray-600"
                                        }`}
                                >
                                    <img
                                        src={tab.icon}
                                        alt={tab.title}
                                        className="w-10 h-10 object-contain shrink-0"
                                    />
                                    <span
                                        className={`text-base md:text-lg ${isActive ? "text-black font-semibold" : "text-gray-600"
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
                        {currentContent && (
                            <>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                                        {currentContent.heading}
                                    </h2>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
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
                                                className="w-12 h-12 object-contain mb-4"
                                            />
                                            <span className="text-sm md:text-base font-semibold text-gray-800">
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
                                        View All
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <section className="w-full bg-red-50 py-16 px-6 font-sans">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        {/* Top Icon Illustration */}
                        <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                            <Image
                                src="/images/customer-support-icon.png" // Update this path to match your icon asset
                                alt="Custom Logistics App Support"
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>

                        {/* Section Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                            Let’s Discuss your Software or Mobile Application Project.
                        </h2>

                        {/* Subtitle Paragraph */}
                        <p className="text-sm md:text-base text-black max-w-2xl mb-8 leading-relaxed">
                            Send your Requirements on :
                        </p>

                        {/* Contact Info Box */}
                        <div className="w-full max-w-2xl bg-red-50 border border-red-400 rounded-sm py-4 px-6 mb-8 shadow-xs">
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
                                        className=" transition-colors"
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

                            <p className="text-gray-800 text-base leading-relaxed">
                                Whatever type of apps we develop or the services we provide, we start
                                the work by talking to the client. This provides an idea of what
                                exactly the client needs and what he has in mind. The next step is
                                evaluating the needs of the clients and then creating an outline of
                                what the software/ app would like. This process involves the
                                following steps:
                            </p>

                            <ul className="space-y-3 pt-2">
                                {points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-black shrink-0 mt-0.5" />
                                        <span className="text-gray-900 font-medium text-base">
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
                                alt="Ideation and Evaluation"
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
                                alt="Product Design App Mockup"
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

                            <p className="text-gray-800 text-base leading-relaxed">
                                Design is an important part of the app we build. Half the work is
                                done when a client approves the project by looking at the app. Our
                                team of designers ensures the client with a good looking design
                                for the app. They also ensure the product design is such that the
                                user can easily use the software app without requiring any help.
                                The steps involved in Product Design include:
                            </p>

                            {/* 2-Column List Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                                {/* Column 1 */}
                                <ul className="space-y-3">
                                    {leftPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <ChevronRight className="w-5 h-5 text-black shrink-0 mt-0.5" />
                                            <span className="text-gray-900 font-medium text-base">
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
                                            <span className="text-gray-900 font-medium text-base">
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
                            We, as a medical app development company, has grabbed some of the
                            greatest milestones by serving leading industries like:
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
                <div className="text-center max-w-7xl mx-auto space-y-4 mt-10">
                    <h2 className="text-2xl sm:text-2xl md:text-5xl font-extrabold text-black">
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
                    <div className="flex items-center gap-6 border-gray-100 pb-3 mb-12 overflow-x-auto">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex items-center gap-6">
                                <button
                                    type="button"
                                    onClick={() => setActiveStepIndex(index)}
                                    className={`text-base font-semibold transition-all whitespace-nowrap pb-3 -mb-3 border-b-2 ${activeStepIndex === index
                                        ? "text-red-700 border-red-600 font-bold"
                                        : "text-gray-400 border-transparent hover:text-red-600"
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
                    <div className="text-center max-w-4xl mx-auto space-y-4 mt-4">
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
                                            : "border-red-50 hover:border-red-300"
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
