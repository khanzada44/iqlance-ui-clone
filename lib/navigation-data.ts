import { NavLink, ServicesData } from '@/types/navigation';
import Link from "next/link";

export const navLinks: NavLink[] = [
  {

    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about", icon: "/icons/about.svg" },
      { label: "Engagement Model", href: "/engagement-model", icon: "/icons/engagement.svg"},
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
      { label: "Healthcare", href: "/services/healthcare", icon: "/icons/healthcare.svg" },
      { label: "Logistics", href: "/services/mobile-app", icon: "/icons/logistics.svg" },
      { label: "Wellness & Fitness", href: "/services/mobile-app", icon: "/icons/wellnessFitness.svg" },
      { label: "Real estate", href: "/services/mobile-app", icon: "/icons/realestate.svg" },
      { label: "Food & Restaurant", href: "/services/mobile-app", icon: "/icons/foodRestaurant.svg" },
      { label: "E-commerce", href: "/services/mobile-app", icon: "/icons/e-commerce.svg" },
      { label: "Education", href: "/services/mobile-app", icon: "/icons/education.svg" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "On Demand", href: "/services/web-development", icon: "/icons/ondemand.svg" },
      { label: "Taxi Booking", href: "/services/web-development", icon: "/icons/taxiBooking.svg" },
      { label: "Restaurant", href: "/services/mobile-app", icon: "/icons/restaurant.svg" },
      { label: "Fitness", href: "/services/web-development", icon: "/icons/fitness.svg" },
      { label: "Social Networking", href: "/services/mobile-app", icon: "/icons/socialNetworking.svg" },
      { label: "Dating App", href: "/services/web-development", icon: "/icons/datingapp.svg" },
      { label: "Food Delivery App", href: "/services/mobile-app", icon: "/icons/fooddeliveryapp.svg" },
    ],
  },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export const servicesData: ServicesData = {
  title: "What we can do for you",
  categories: [
    {
      id: "mobile",
      name: "Mobile App Development",
      items: [
        "iOS App Development",
        "React Native Development",
        "Android App Development",
        "Flutter App Development",
        "Cross Platform App Development",
        "Kotlin App Development",
        "MVP App Development",
        "iPad App Development",
        "Smart Watch App Development",
        "PWA Development",
        "Hybrid App Development",
      ],
    },
    {
      id: "software",
      name: "Software Development",
      items: [
        "Web Development",
        "Swift App Development",
        "Cross Platform App Development",
        "Custom Software Development",
        "CRM Development",
        "ERP Development",
      ],
    },
    {
      id: "hire",
      name: "Hire Dedicated Developers",
      items: [
        "Kotlin App Development",
        "MVP App Development",
        "React Development",
        "Next.js Development",
        "Node.js Development",
      ],
    },
    {
      id: "ai",
      name: "AI Development",
      items: [
        "iPad App Development",
        "Smart Watch App Development",
        "Machine Learning",
        "AI Chatbots",
        "Computer Vision",
      ],
    },
    {
      id: "digital",
      name: "Digital Marketing",
      items: [
        "PWA Development",
        "Hybrid App Development",
        "SEO Services",
        "Social Media Marketing",
        "Content Marketing",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Solutions",
      items: [
        "PWA Development",
        "Hybrid App Development",
        "Cloud Solutions",
        "DevOps Services",
        "IT Consulting",
      ],
    },
  ],
};