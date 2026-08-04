import { NavLink, ServicesData } from "@/types/navigation";

export const navLinks: NavLink[] = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about", icon: "/icons/about.svg" },
      { label: "Engagement Model", href: "/engagement-model", icon: "/icons/engagement.svg" },
      { label: "FAQ", href: "/faqs", icon: "/icons/faq.svg" },
      { label: "Why iQlance", href: "/why-iqlance", icon: "/icons/officeBuilding.svg" },
      { label: "Testimonials", href: "/testimonials", icon: "/icons/testimonials.svg" },
      { label: "Contact", href: "/contact-us", icon: "/icons/contact.svg" },
      { label: "Our Process", href: "/our-process", icon: "/icons/ourProcess.svg" },
      { label: "Careers", href: "/careers", icon: "/icons/careers.svg" },
    ],
  },
    {
    label: "Services",
    href: "/services",
    dropdown: [],
  },
  {
    label: "Industry",
    href: "/industry",
    dropdown: [
      { label: "Healthcare", href: "/industry/healthcare", icon: "/icons/healthcare.svg" },
      { label: "Logistics", href: "/industry/logistics", icon: "/icons/logistics.svg" },
      { label: "Wellness & Fitness", href: "/industry/wellness-and-fitness", icon: "/icons/wellness-iq.png.webp" },
      { label: "Real estate", href: "/industry/real-estate", icon: "/icons/realestate.svg" },
      { label: "Food & Restaurant", href: "/industry/food-ordering", icon: "/icons/foodRestaurant.svg" },
      { label: "E-commerce", href: "/industry/ecommerce", icon: "/icons/e-commerce.svg" },
      { label: "Education", href: "/industry/elearning-app", icon: "/icons/education.svg" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "On Demand", href: "/solutions/on-demand", icon: "/icons/ondemand.svg" },
      { label: "Taxi Booking", href: "/solutions/taxi", icon: "/icons/taxiBooking.svg" },
      { label: "Restaurant", href: "/solutions/restaurant", icon: "/icons/restaurant.svg" },
      { label: "Fitness", href: "/solutions/fitness", icon: "/icons/fitness.svg" },
      { label: "Social Networking", href: "/solutions/social-media", icon: "/icons/socialNetworking.svg" },
      { label: "Dating App", href: "/solutions/dating", icon: "/icons/datingapp.svg" },
      { label: "Food Delivery App", href: "/solutions/food-delivery-app", icon: "/icons/fooddeliveryapp.svg" },
    ],
  },
  { label: "Our Work", href: "/portfolio" },
  { label: "Blog", href: "/blog" },

];

export const servicesData: ServicesData = {
  title: "What we can do for you",
  categories: [
    {
      id: "mobile",
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
      items: [
        { name: "iOS App Development", href: "/services/ios-app-development" },
        { name: "React Native Development", href: "/services/react-native-development" },
        { name: "Android App Development", href: "/services/android-app-development" },
        { name: "Flutter App Development", href: "/services/flutter-app-development" },
        { name: "Cross Platform App Development", href: "/services/cross-platform-app-development" },
        { name: "Kotlin App Development", href: "/services/kotlin-app-development" },
        { name: "MVP App Development", href: "/services/mvp-app-development" },
        { name: "iPad App Development", href: "/services/ipad-app-development" },
        { name: "Smart Watch App Development", href: "/services/smart-watch-app-development" },
        { name: "PWA Development", href: "/services/pwa-development" },
        { name: "Hybrid App Development", href: "/services/hybrid-app-development" },
      ],
    },
    {
      id: "software",
      name: "Software Development",
      href: "/services/software-development",
      items: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Swift App Development", href: "/services/swift-app-development" },
        { name: "Cross Platform App Development", href: "/services/cross-platform-app-development" },
        { name: "Custom Software Development", href: "/services/custom-software-development" },
        { name: "CRM Development", href: "/services/crm-development" },
        { name: "ERP Development", href: "/services/erp-development" },
      ],
    },
    {
      id: "hire",
      name: "Hire Dedicated Developers",
      href: "/services/hire-dedicated-developers",
      items: [
        { name: "Kotlin App Development", href: "/services/kotlin-app-development" },
        { name: "MVP App Development", href: "/services/mvp-app-development" },
        { name: "React Development", href: "/services/react-development" },
        { name: "Next.js Development", href: "/services/nextjs-development" },
        { name: "Node.js Development", href: "/services/nodejs-development" },
      ],
    },
    {
      id: "ai",
      name: "AI Development",
      href: "/services/ai-development",
      items: [
        { name: "iPad App Development", href: "/services/ipad-app-development" },
        { name: "Smart Watch App Development", href: "/services/smart-watch-app-development" },
        { name: "Machine Learning", href: "/services/machine-learning" },
        { name: "AI Chatbots", href: "/services/ai-chatbots" },
        { name: "Computer Vision", href: "/services/computer-vision" },
      ],
    },
    {
      id: "digital",
      name: "Digital Marketing",
      href: "/services/digital-marketing",
      items: [
        { name: "PWA Development", href: "/services/pwa-development" },
        { name: "Hybrid App Development", href: "/services/hybrid-app-development" },
        { name: "SEO Services", href: "/services/seo-services" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Content Marketing", href: "/services/content-marketing" },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Solutions",
      href: "/services/enterprise-solutions",
      items: [
        { name: "PWA Development", href: "/services/pwa-development" },
        { name: "Hybrid App Development", href: "/services/hybrid-app-development" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "DevOps Services", href: "/services/devops-services" },
        { name: "IT Consulting", href: "/services/it-consulting" },
      ],
    },
  ],
};