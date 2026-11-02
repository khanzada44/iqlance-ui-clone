// App Cost Calculator — saara data aur rates yahan hain.
// Prices/hours badalni hon to sirf ye file edit karein.

import {
  ShoppingBag,
  Wallet,
  HeartPulse,
  CalendarDays,
  MessageCircle,
  Home,
  Zap,
  Truck,
  Gamepad2,
  Send,
  Smartphone,
  TabletSmartphone,
  Monitor,
  Eye,
  UserPlus,
  UserCog,
  ShieldCheck,
  UserRound,
  Bell,
  CreditCard,
  MapPin,
  Star,
  LayoutDashboard,
  BarChart3,
  Box,
  Trophy,
  WifiOff,
  Video,
  LogIn,
  Megaphone,
  Link2,
  Repeat,
  Receipt,
  ShoppingCart,
  Shield,
  Lock,
  KeyRound,
} from "lucide-react";

/* ---------- Rates ---------- */
export const RATES = {
  hourlyRate: 30, // USD per hour
  rangeLow: 0.85, // estimate range: -15%
  rangeHigh: 1.2, // estimate range: +20%
  teamHoursPerWeek: 120, // ~3 developers x 40 hrs
  minWeeks: 4,
};

/* ---------- Steps ----------
   multi: true  = ek se zyada options select ho sakte hain
   required: true = Next se pehle kam az kam ek option zaroori
   hours = us option se kitne development hours add hote hain
   platform step mein "factor" use hota hai (hours multiplier)          */
export const STEPS = [
  {
    key: "business",
    label: "Business",
    title: "Select your",
    highlight: "business domain",
    hint: "Choose the option that best matches your business niche.",
    multi: false,
    required: true,
    columns: 5,
    options: [
      { id: "shopping", label: "Shopping", icon: ShoppingBag, hours: 320 },
      { id: "finance", label: "Finance", icon: Wallet, hours: 420 },
      { id: "health", label: "Health", icon: HeartPulse, hours: 400 },
      { id: "events", label: "Events", icon: CalendarDays, hours: 260 },
      { id: "social", label: "Social Media", icon: MessageCircle, hours: 420 },
      { id: "real-estate", label: "Real Estate", icon: Home, hours: 300 },
      { id: "on-demand", label: "On-Demand Service", icon: Zap, hours: 400 },
      { id: "food-delivery", label: "Food Delivery", icon: Truck, hours: 380 },
      { id: "game", label: "Game", icon: Gamepad2, hours: 460 },
      { id: "other", label: "Other", icon: Send, hours: 300 },
    ],
  },
  {
    key: "platform",
    label: "Platform",
    title: "Choose your preferred",
    highlight: "platform",
    hint: "You can select more than one platform.",
    multi: true,
    required: true,
    columns: 3,
    options: [
      { id: "ios", label: "iOS App", icon: Smartphone, factor: 1 },
      { id: "android", label: "Android App", icon: TabletSmartphone, factor: 0.85 },
      { id: "web", label: "Web App", icon: Monitor, factor: 0.6 },
    ],
  },
  {
    key: "audience",
    label: "Audience",
    title: "Who is your target",
    highlight: "audience?",
    hint: "Select one or more intended product users.",
    multi: true,
    required: true,
    columns: 3,
    options: [
      { id: "visitors", label: "Visitors", icon: Eye, hours: 20 },
      { id: "registered", label: "Registered Users", icon: UserPlus, hours: 60 },
      { id: "moderators", label: "Moderators", icon: UserCog, hours: 50 },
      { id: "admins", label: "Administrators", icon: ShieldCheck, hours: 80 },
      { id: "other", label: "Other", icon: Send, hours: 30 },
    ],
  },
  {
    key: "features",
    label: "Features",
    title: "Pick app",
    highlight: "features",
    hint: "Choose the features that support your business goals.",
    multi: true,
    required: false,
    columns: 4,
    options: [
      { id: "profiles", label: "Login & Profiles", icon: UserRound, hours: 40 },
      { id: "notifications", label: "Push Notifications", icon: Bell, hours: 30 },
      { id: "chat", label: "In-App Chat", icon: MessageCircle, hours: 90 },
      { id: "payments", label: "In-App Payments", icon: CreditCard, hours: 60 },
      { id: "maps", label: "Maps & Location", icon: MapPin, hours: 70 },
      { id: "booking", label: "Booking & Scheduling", icon: CalendarDays, hours: 70 },
      { id: "reviews", label: "Reviews & Ratings", icon: Star, hours: 35 },
      { id: "dashboard", label: "Admin Dashboard", icon: LayoutDashboard, hours: 90 },
      { id: "analytics", label: "Analytics & Reports", icon: BarChart3, hours: 50 },
      { id: "ar-3d", label: "AR / 3D Graphics", icon: Box, hours: 140 },
      { id: "gamification", label: "Leaderboards & Rewards", icon: Trophy, hours: 60 },
      { id: "offline", label: "Offline Mode", icon: WifiOff, hours: 50 },
    ],
  },
  {
    key: "integrations",
    label: "Integration",
    title: "Integrations you",
    highlight: "want to add",
    hint: "Choose one or more services you want to connect.",
    multi: true,
    required: false,
    columns: 4,
    options: [
      { id: "payment-gateway", label: "Payment Gateway", icon: CreditCard, hours: 40 },
      { id: "video-chat", label: "Video Calling", icon: Video, hours: 80 },
      { id: "social-login", label: "Social Login", icon: LogIn, hours: 25 },
      { id: "maps-api", label: "Maps API", icon: MapPin, hours: 30 },
      { id: "shipping", label: "Shipping & Delivery APIs", icon: Truck, hours: 40 },
      { id: "ads", label: "Ad Networks", icon: Megaphone, hours: 25 },
      { id: "crm", label: "CRM / ERP", icon: Link2, hours: 60 },
      { id: "analytics-tools", label: "Analytics Tools", icon: BarChart3, hours: 15 },
    ],
  },
  {
    key: "revenue",
    label: "Revenue",
    title: "Generate your desired",
    highlight: "revenue",
    hint: "Select one or more ways your app will make money.",
    multi: true,
    required: false,
    columns: 2,
    options: [
      { id: "subscriptions", label: "Recurring Subscriptions", icon: Repeat, hours: 40 },
      { id: "fees", label: "Upfront & Custom Fees", icon: Receipt, hours: 25 },
      { id: "cart", label: "Shopping Cart System", icon: ShoppingCart, hours: 70 },
      { id: "ads-revenue", label: "In-App Advertising", icon: Megaphone, hours: 20 },
      { id: "other", label: "Other", icon: Send, hours: 10 },
    ],
  },
  {
    key: "security",
    label: "Security",
    title: "Select the security level for",
    highlight: "your app",
    hint: "Choose one of the following.",
    multi: false,
    required: true,
    columns: 2,
    options: [
      { id: "basic", label: "Basic Security", icon: Shield, hours: 20 },
      { id: "standard", label: "Encrypted Communication", icon: Lock, hours: 50 },
      { id: "advanced", label: "Complete Protection", icon: KeyRound, hours: 100 },
    ],
  },
];

/* ---------- Estimate ---------- */
export function calculateEstimate(selected) {
  const business = STEPS[0].options.find((o) => o.id === selected.business?.[0]);
  if (!business) return null;

  let hours = business.hours;
  for (const step of STEPS) {
    if (step.key === "business" || step.key === "platform") continue;
    for (const id of selected[step.key] || []) {
      const opt = step.options.find((o) => o.id === id);
      if (opt?.hours) hours += opt.hours;
    }
  }

  const platformStep = STEPS.find((s) => s.key === "platform");
  const factor = (selected.platform || []).reduce((sum, id) => {
    const opt = platformStep.options.find((o) => o.id === id);
    return sum + (opt?.factor || 0);
  }, 0);
  hours = Math.round(hours * (factor || 1));

  const cost = hours * RATES.hourlyRate;
  return {
    hours,
    costLow: Math.round((cost * RATES.rangeLow) / 100) * 100,
    costHigh: Math.round((cost * RATES.rangeHigh) / 100) * 100,
    weeks: Math.max(RATES.minWeeks, Math.ceil(hours / RATES.teamHoursPerWeek)),
  };
}

/* Form ke message ke liye readable summary */
export function selectionSummary(selected) {
  return STEPS.map((step) => {
    const labels = (selected[step.key] || [])
      .map((id) => step.options.find((o) => o.id === id)?.label)
      .filter(Boolean);
    return `${step.label}: ${labels.length ? labels.join(", ") : "—"}`;
  }).join("\n");
}