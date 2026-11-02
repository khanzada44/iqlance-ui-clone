import AppCostCalculator from "../../components/app-cost-calculator/page";

export const metadata = {
  title: "App Development Cost Calculator | DevApp Grid",
  description:
    "Estimate your mobile app development cost in 7 quick steps. Choose your industry, platforms, features and integrations to see a rough budget and timeline.",
  alternates: { canonical: "/app-cost-calculator" },
  openGraph: {
    title: "App Development Cost Calculator | DevApp Grid",
    description:
      "Get a rough cost, effort and timeline estimate for your iOS, Android or web app in under 2 minutes.",
    url: "/app-cost-calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How accurate is the app cost calculator?",
    a: "The calculator gives a rough estimate based on typical development effort for the options you choose. Your final quote depends on design detail, complexity and scope, and is shared after a free consultation with our team.",
  },
  {
    q: "What affects the cost of building an app?",
    a: "The main factors are the number of platforms (iOS, Android, web), the features you need, third-party integrations, user roles, security requirements and how the app will make money.",
  },
  {
    q: "Is it cheaper to build for iOS and Android together?",
    a: "Building both apps together with a cross-platform approach usually costs less than building two separate native apps, because much of the code and design is shared.",
  },
  {
    q: "How long does it take to build an app?",
    a: "A simple app can take around 4 to 8 weeks, while apps with chat, payments, maps or custom dashboards often take 3 to 6 months. The calculator shows a timeline based on your choices.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AppCostCalculatorPage() {
  return (
    <main>
      <section className="bg-[#F7F8FA] pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Free estimate tool</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight italic text-black sm:text-5xl">
            App Development <span className="text-red-600">Cost Calculator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black sm:text-lg">
            Answer 7 quick questions about your app idea and get a rough cost, effort and timeline estimate from DevApp Grid in under 2 minutes.
          </p>
        </div>
      </section>

      <AppCostCalculator contactUrl="/contact-us" thankYouUrl="/thanks-You" />

      <section className="bg-white pb-16 mt-17">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-black sm:text-3xl">
            Frequently asked <span className="text-red-600">questions</span>
          </h2>
          <div className="mt-6 divide-y divide-gray-200  border border-gray-200">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-black">
                  {f.q}
                  <span className="text-xl text-red-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-black">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}