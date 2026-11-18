import { cache } from "react";
import ServicesDetails from "../../../components/pages/services-details/page";
import { getServicesData } from "@/lib/navigation-data";
import { serviceCategorieBySlug } from "../../../../services/all-sub-categories";
const SITE_URL = "https://devappgrid.com";

/* ---------- SEO: har service page ka meta title aur description ----------
   Yahan likha title/description backend ke meta_title/meta_description se pehle lagta hai.
   Nayi service ka SEO badalna ho to bas yahan slug ke saath likh dein. */
const SERVICE_SEO = {
  "ios-app-development": {
    title: "iOS App Development Company | DevApp Grid",
    description:
      "iOS app development for iPhone and iPad. DevApp Grid designs, builds and launches fast, secure Swift apps that follow Apple's App Store guidelines.",
  },
  "android-app-development": {
    title: "Android App Development Company | DevApp Grid",
    description:
      "Android app development with Kotlin and Java. We build fast, secure Android apps that run smoothly on every device and launch on Google Play.",
  },
  "swift-app-development": {
    title: "Swift App Development Services | DevApp Grid",
    description:
      "Swift app development for iPhone, iPad and Apple Watch. Native, high-performance iOS apps built with SwiftUI by experienced Swift developers.",
  },
  "kotlin-app-development": {
    title: "Kotlin App Development Services | DevApp Grid",
    description:
      "Kotlin app development for modern Android apps. Clean, fast and secure code with Jetpack Compose, built and launched by our Kotlin developers.",
  },
  "ipad-app-development": {
    title: "iPad App Development Company | DevApp Grid",
    description:
      "iPad app development that makes the most of the big screen. Custom iPadOS apps for business, education and retail, designed and built end to end.",
  },
  "pwa-development": {
    title: "Progressive Web App (PWA) Development | DevApp Grid",
    description:
      "PWA development for fast, installable web apps that work offline. Reach users on any device without the app store, with one codebase to maintain.",
  },
  "react-native-development": {
    title: "React Native App Development Company | DevApp Grid",
    description:
      "React Native app development for iOS and Android from one codebase. Ship faster, cut costs and keep a native look and feel on every device.",
  },
  "flutter-app-development": {
    title: "Flutter App Development Company | DevApp Grid",
    description:
      "Flutter app development for beautiful iOS, Android and web apps from one codebase. Fast builds, smooth animations and lower development cost.",
  },
  "cross-platform-app-development": {
    title: "Cross-Platform App Development Services | DevApp Grid",
    description:
      "Cross-platform app development with React Native and Flutter. One codebase for iOS and Android, faster launches and lower costs for your business.",
  },
  "mvp-app-development": {
    title: "MVP App Development Services | DevApp Grid",
    description:
      "MVP app development to test your idea fast. We build a lean, launch-ready mobile app with the core features users need, then scale what works.",
  },
  "smart-watch-app-development": {
    title: "Smartwatch App Development | DevApp Grid",
    description:
      "Smartwatch app development for Apple Watch and Wear OS. Health, fitness and companion apps that sync with your phone app and feel natural on the wrist.",
  },
  "hybrid-app-development": {
    title: "Hybrid App Development Company | DevApp Grid",
    description:
      "Hybrid app development that runs on iOS, Android and the web from one codebase. Launch faster on a smaller budget without losing a native feel.",
  },
  "web-design": {
    title: "Website Design Services | DevApp Grid",
    description:
      "Website design that looks great and converts. Custom, responsive and SEO-ready websites designed around your brand and built to bring in leads.",
  },
  "uiux-development": {
    title: "UI/UX Design Services | DevApp Grid",
    description:
      "UI/UX design for apps and websites. Research, wireframes, prototypes and polished interfaces that keep users engaged and coming back.",
  },
  "php-development": {
    title: "PHP Development Company | DevApp Grid",
    description:
      "PHP development for custom web apps, portals and APIs. Secure, scalable PHP and Laravel solutions built and maintained by experienced developers.",
  },
  "joomla-development": {
    title: "Joomla Development Services | DevApp Grid",
    description:
      "Joomla development for custom websites, extensions and templates. Secure Joomla sites, upgrades and migrations handled by experienced developers.",
  },
  "wordpress-development": {
    title: "WordPress Development Company | DevApp Grid",
    description:
      "WordPress development for fast, secure and SEO-friendly websites. Custom themes, plugins, WooCommerce stores and ongoing site maintenance.",
  },
  "magento-development": {
    title: "Magento Development Company | DevApp Grid",
    description:
      "Magento development for growing online stores. Custom Adobe Commerce themes, extensions, migrations and performance tuning that lift sales.",
  },
  "drupal-development": {
    title: "Drupal Development Services | DevApp Grid",
    description:
      "Drupal development for secure, content-rich websites. Custom modules, themes, upgrades and migrations for enterprises and public organizations.",
  },
  "aspnet-development": {
    title: "ASP.NET Development Company | DevApp Grid",
    description:
      "ASP.NET development for secure, high-performance web apps and APIs. Custom .NET Core solutions, migrations and support for growing businesses.",
  },
  "angular-js-development": {
    title: "AngularJS Development Services | DevApp Grid",
    description:
      "Angular development for fast, scalable single-page apps. Custom dashboards, portals and AngularJS-to-Angular migrations by experienced developers.",
  },
  "mvp-software-development": {
    title: "MVP Software Development Services | DevApp Grid",
    description:
      "MVP software development to validate your idea quickly. We build a lean, working product with the core features, then grow it based on real users.",
  },
  "node-js-development": {
    title: "Node.js Development Company | DevApp Grid",
    description:
      "Node.js development for fast, scalable back ends, APIs and real-time apps. Custom server-side solutions built and maintained by Node.js experts.",
  },
  "python-development-company": {
    title: "Python Development Company | DevApp Grid",
    description:
      "Python development for web apps, APIs, automation and data. Custom Django and FastAPI solutions built by experienced Python developers.",
  },
  "crm-software-development": {
    title: "Custom CRM Software Development | DevApp Grid",
    description:
      "Custom CRM software development built around your sales process. Manage leads, customers and pipelines in one place, integrated with your tools.",
  },
  "ruby-on-rails-development": {
    title: "Ruby on Rails Development Company | DevApp Grid",
    description:
      "Ruby on Rails development for fast-to-market web apps and SaaS products. Clean, maintainable code, upgrades and support from Rails developers.",
  },
  "erp-software-development": {
    title: "Custom ERP Software Development | DevApp Grid",
    description:
      "Custom ERP software development that connects inventory, finance, HR and sales. One system built around how your business actually works.",
  },
  "devops-development": {
    title: "DevOps Services and Consulting | DevApp Grid",
    description:
      "DevOps services for faster, safer releases. CI/CD pipelines, cloud infrastructure, containers and monitoring set up and managed for your team.",
  },
  "chat-bot": {
    title: "Chatbot Development Company | DevApp Grid",
    description:
      "Chatbot development for websites, apps and messaging platforms. Automate support and lead capture with smart chatbots that answer customers 24/7.",
  },
  "iot": {
    title: "IoT App Development Services | DevApp Grid",
    description:
      "IoT development that connects devices, sensors and apps. Custom IoT solutions with secure cloud dashboards and mobile apps for real-time control.",
  },
  "laravel-development": {
    title: "Laravel Development Company | DevApp Grid",
    description:
      "Laravel development for secure, scalable web apps and APIs. Custom Laravel solutions, upgrades and maintenance by experienced PHP developers.",
  },
  "hire-android-app-developers": {
    title: "Hire Android App Developers | DevApp Grid",
    description:
      "Hire Android app developers skilled in Kotlin and Java. Dedicated developers who join your team fast and work on flexible hourly or monthly terms.",
  },
  "hire-dot-net-developers": {
    title: "Hire .NET Developers | DevApp Grid",
    description:
      "Hire .NET developers for ASP.NET, .NET Core and C# projects. Dedicated, experienced developers who join your team quickly on flexible terms.",
  },
  "hire-flutter-app-developers": {
    title: "Hire Flutter App Developers | DevApp Grid",
    description:
      "Hire Flutter app developers to build iOS and Android apps from one codebase. Dedicated developers ready to start fast on flexible terms.",
  },
  "hire-iphone-app-developers": {
    title: "Hire iPhone App Developers | DevApp Grid",
    description:
      "Hire iPhone app developers skilled in Swift and SwiftUI. Dedicated iOS developers who build, launch and maintain your app on flexible terms.",
  },
  "hire-laravel-developers": {
    title: "Hire Laravel Developers | DevApp Grid",
    description:
      "Hire Laravel developers for web apps, APIs and SaaS products. Dedicated PHP experts who join your team quickly on hourly or monthly terms.",
  },
  "hire-software-developers": {
    title: "Hire Software Developers | DevApp Grid",
    description:
      "Hire software developers for web, mobile and back-end projects. Dedicated, vetted developers who join your team fast on flexible terms.",
  },
  "hire-react-js-developer": {
    title: "Hire React.js Developers | DevApp Grid",
    description:
      "Hire React.js developers to build fast, modern web apps and dashboards. Dedicated front-end experts who join your team on flexible terms.",
  },
  "hire-react-native-developers": {
    title: "Hire React Native Developers | DevApp Grid",
    description:
      "Hire React Native developers to build iOS and Android apps from one codebase. Dedicated developers who start fast on flexible terms.",
  },
  "hire-full-stack-developers": {
    title: "Hire Full Stack Developers | DevApp Grid",
    description:
      "Hire full stack developers who handle front end, back end and databases. Dedicated developers for web and mobile projects on flexible terms.",
  },
  "hire-ai-developers": {
    title: "Hire AI Developers | DevApp Grid",
    description:
      "Hire AI developers for machine learning, generative AI and LLM projects. Dedicated AI engineers who join your team quickly on flexible terms.",
  },
  "it-staff-augmentation": {
    title: "IT Staff Augmentation Services | DevApp Grid",
    description:
      "IT staff augmentation to scale your team fast. Add vetted developers, designers and QA engineers who work as part of your team on flexible terms.",
  },
  "it-staffing-agency": {
    title: "IT Staffing Agency | DevApp Grid",
    description:
      "IT staffing agency that finds and places skilled developers, designers and IT experts. Contract and full-time talent matched to your needs, fast.",
  },
  "applications-promotions": {
    title: "App Marketing and Promotion Services | DevApp Grid",
    description:
      "App marketing and promotion that gets your app found and downloaded. App store optimization, paid campaigns and user growth strategies.",
  },
  "search-engine-optimization": {
    title: "SEO Services | DevApp Grid",
    description:
      "SEO services that grow organic traffic and leads. Technical SEO, keyword research, content and link building with clear monthly reporting.",
  },
  "social-media": {
    title: "Social Media Marketing Services | DevApp Grid",
    description:
      "Social media marketing that builds your brand and brings in customers. Content, ads and community management across the platforms that matter.",
  },
  "pay-per-click": {
    title: "PPC Management Services | DevApp Grid",
    description:
      "PPC management for Google, Bing and social ads. Campaign setup, keyword targeting and ongoing optimization to lower costs and raise conversions.",
  },
  "product-market-search": {
    title: "Product Market Research Services | DevApp Grid",
    description:
      "Product market research to validate your idea before you build. Competitor analysis, user research and demand insights that guide your product.",
  },
  "aiml-development": {
    title: "AI and Machine Learning Development | DevApp Grid",
    description:
      "AI and machine learning development that turns your data into results. Custom ML models, predictive analytics and AI features for your products.",
  },
  "generative-ai-development": {
    title: "Generative AI Development Company | DevApp Grid",
    description:
      "Generative AI development for content, chat, search and automation. Custom GenAI apps built on leading models and connected to your business data.",
  },
  "ai-chatbot-development": {
    title: "AI Chatbot Development Company | DevApp Grid",
    description:
      "AI chatbot development powered by large language models. Smart assistants for support, sales and internal teams, trained on your own content.",
  },
  "llm-integration": {
    title: "LLM Development Partner for AI Integration | DevApp Grid",
    description:
      "Need an LLM development partner? DevApp Grid integrates GPT-style large language models into your apps and workflows securely, with real use cases.",
  },
  "computer-vision-development": {
    title: "Computer Vision Development Services | DevApp Grid",
    description:
      "Computer vision development for image and video analysis. Object detection, recognition and inspection systems built for your business.",
  },
  "microsoft-power-bi-consultancy-company": {
    title: "Microsoft Power BI Consulting Company | DevApp Grid",
    description:
      "Microsoft Power BI consulting that turns your data into clear dashboards and reports. Setup, data modeling, integration and training for your team.",
  },
  "microsoft-dynamics-365-development": {
    title: "Microsoft Dynamics 365 Development | DevApp Grid",
    description:
      "Microsoft Dynamics 365 development and customization. Implementation, integrations and custom modules for sales, service, finance and operations.",
  },
  "hire-mobile-app-developers": {
    title: "Hire Mobile App Developers | DevApp Grid",
    description:
      "Hire mobile app developers for iOS, Android, Flutter and React Native. Dedicated, experienced developers who start fast on flexible terms.",
  },
};

export const dynamicParams = false;

const MAX_PARALLEL = 3;
let active = 0;
const waiting = [];
async function limited(fn) {
  if (active >= MAX_PARALLEL) await new Promise((resolve) => waiting.push(resolve));
  active++;
  try {
    return await fn();
  } finally {
    active--;
    const next = waiting.shift();
    if (next) next();
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const hasContent = (s) =>
  !!s && typeof s === "object" && !!(s.description || s.content || s.content_1);
const getService = cache(async (slug) => {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await limited(() => serviceCategorieBySlug(slug));
      const data = res?.data ?? res ?? null;
      // Kuch endpoints array dete hain, kuch object
      const service = Array.isArray(data) ? data[0] : data;
      if (hasContent(service)) return service;
      console.warn(`[services-details] "${slug}" — koshish ${attempt}/3: backend ne khaali jawab diya`);
    } catch (error) {
      console.warn(
        `[services-details] "${slug}" — koshish ${attempt}/3 fail:`,
        error?.response?.status || "",
        error?.message || error
      );
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  console.error(`[services-details] "${slug}" ka data build mein NAHI mila — ye page Google ko khaali milega`);
  if (process.env.STRICT_SERVICE_BUILD === "1") {
    // Build rok do, taa ke khaali page live na jaye
    throw new Error(`services-details: "${slug}" ka data nahi mila`);
  }
  return null;
});

function decode(str = "") {
  return String(str)
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function plain(html = "", max = 0) {
  const text = decode(String(html).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
  if (!max || text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

const nameFromSlug = (slug = "") =>
  slug.split("-").filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

/* Sitemap wale saare service slugs — menu API fail ho jaye ya koi service menu mein na ho,
   tab bhi ye pages zaroor banenge (dynamicParams=false ki wajah se warna 404 hote). */
const KNOWN_SLUGS = [
  "ios-app-development",
  "android-app-development",
  "swift-app-development",
  "kotlin-app-development",
  "ipad-app-development",
  "pwa-development",
  "react-native-development",
  "flutter-app-development",
  "cross-platform-app-development",
  "mvp-app-development",
  "smart-watch-app-development",
  "hybrid-app-development",
  "web-design",
  "uiux-development",
  "php-development",
  "joomla-development",
  "wordpress-development",
  "magento-development",
  "drupal-development",
  "aspnet-development",
  "angular-js-development",
  "mvp-software-development",
  "node-js-development",
  "python-development-company",
  "crm-software-development",
  "ruby-on-rails-development",
  "erp-software-development",
  "devops-development",
  "chat-bot",
  "iot",
  "laravel-development",
  "hire-android-app-developers",
  "hire-dot-net-developers",
  "hire-flutter-app-developers",
  "hire-iphone-app-developers",
  "hire-laravel-developers",
  "hire-software-developers",
  "hire-react-js-developer",
  "hire-react-native-developers",
  "hire-full-stack-developers",
  "hire-ai-developers",
  "it-staff-augmentation",
  "it-staffing-agency",
  "applications-promotions",
  "search-engine-optimization",
  "social-media",
  "pay-per-click",
  "product-market-search",
  "aiml-development",
  "generative-ai-development",
  "ai-chatbot-development",
  "llm-integration",
  "computer-vision-development",
  "microsoft-power-bi-consultancy-company",
  "microsoft-dynamics-365-development",
  "hire-mobile-app-developers",
];
// scripts/test-slugs.mjs


for (const slug of ["hire-mobile-app-developers", "aspnet-development", "node-js-development", "kotlin-app-development"]) {
  try {
    const res = await serviceCategorieBySlug(slug);
    const d = res?.data ?? res;
    console.log(slug, "→", d ? Object.keys(d).slice(0, 8) : "KHALI", "| description:", !!d?.description);
  } catch (e) {
    console.log(slug, "→ ERROR", e?.response?.status, e?.message);
  }
}
export async function generateStaticParams() {
  let servicesData = null;
  // Pehle: menu API ek dafa fail → 0 pages. Ab 3 koshishein.
  for (let attempt = 1; attempt <= 3 && !servicesData?.categories?.length; attempt++) {
    try {
      servicesData = await getServicesData();
    } catch (error) {
      console.warn(`[services-details] menu API koshish ${attempt}/3 fail:`, error?.message || error);
    }
    if (!servicesData?.categories?.length && attempt < 3) await sleep(1000 * attempt);
  }
  if (!servicesData?.categories?.length) {
    console.error("[services-details] ❌ menu API se list nahi mili — sirf KNOWN_SLUGS se pages banenge");
  }

  const slugs = [...KNOWN_SLUGS];
  servicesData?.categories?.forEach((category) => {
    category.items?.forEach((item) => {
      if (item.href) {
        const slug = item.href.split("/").filter(Boolean).pop();
        if (slug) slugs.push(slug);
      }
    });
  });
  const unique = [...new Set(slugs)];
  console.log(`[services-details] ${unique.length} service pages ban rahe hain`);
  return unique.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  const path = `/services-details/${slug}`;
  const name = decode(service?.h1 || service?.title || service?.name || nameFromSlug(slug));
  const title = SERVICE_SEO[slug]?.title || decode(service?.meta_title || `${name} | DevApp Grid`);
  const description =
    SERVICE_SEO[slug]?.description ||
    decode(service?.meta_description || plain(service?.description || service?.content, 155)) ||
    `Hire DevApp Grid for ${name} services. Custom, secure, and scalable solutions for businesses across the USA.`;
  const image = service?.image || service?.banner_image || undefined;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  const path = `/services-details/${slug}`;
  const name = decode(service?.h1 || service?.title || service?.name || nameFromSlug(slug));
  const description = decode(
    service?.meta_description || plain(service?.description || service?.content, 155)
  );

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      ...(description ? { description } : {}),
      url: `${SITE_URL}${path}`,
      provider: { "@type": "Organization", name: "DevApp Grid", url: SITE_URL },
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }}
        />
      ))}
      {/* Data mila → content seedha HTML mein (Google parh sakta hai).
          Na mila → page khaali nahi rehta: browser mein khud load hota hai (backup). */}
      <ServicesDetails slug={slug} initialService={service} />
    </>
  );
}