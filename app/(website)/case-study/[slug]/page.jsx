import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { caseStudies } from "./data";
import CaseStudyTabs from "./CaseStudyTabs";

const SITE_URL = "https://devappgrid.com";
const BASE = "/case-study";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = caseStudies.find((c) => c.slug === slug);
  if (!item) return {};

  const url = `${SITE_URL}${BASE}/${item.slug}`;
  const title = `${item.title} Case Study | DevApp Grid`;
  const description = item.metaDescription || item.intro;
  const image = item.heroImage ? `${SITE_URL}${item.heroImage}` : undefined;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "DevApp Grid",
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
function Heading({ children, light = false, center = false, className = "" }) {
  return (
    <h2
      className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-black"} ${center ? "text-center" : ""
        } ${className}`}
    >
      {children}
    </h2>
  );
}

export default async function CaseStudyDetails({ params }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const item = caseStudies[index];
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const url = `${SITE_URL}${BASE}/${item.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${item.title} Case Study`,
      headline: item.tagline || item.title,
      description: item.metaDescription || item.intro,
      url,
      ...(item.heroImage ? { image: `${SITE_URL}${item.heroImage}` } : {}),
      creator: { "@type": "Organization", name: "DevApp Grid", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}${BASE}` },
        { "@type": "ListItem", position: 3, name: item.title, item: url },
      ],
    },
  ];

  return (
    <article className="bg-white text-black">
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }}
        />
      ))}
      <section className="relative isolate overflow-hidden bg-neutral-900">
        {item.heroImage && (
          <img
            src={item.heroImage}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/55 to-black/80" />

        <div className="mx-auto flex min-h-115 max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-140">
          <h1 className="mt-3 text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
            {item.tagline || item.title}
          </h1>

          {item.logo && (
            <img src={item.logo} alt={`${item.title} logo`} className="mt-6 h-16 w-auto object-contain sm:h-20" />
          )}

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">{item.intro}</p>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white">
        {item.goalImage && (
          <img
            src={item.goalImage}
            alt=""
            loading="lazy"
            className="h-64 w-full object-cover opacity-90 mask-[linear-gradient(to_bottom,#000_55%,transparent)] sm:h-80 lg:absolute lg:inset-y-0 lg:left-0 lg:-z-10 lg:h-full lg:w-[45%] lg:opacity-50 lg:mask-[linear-gradient(to_right,#000_25%,transparent_85%)]"
          />
        )}

        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20 lg:py-24">
          <div className="lg:ml-[45%]">
            <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl case-study">Project Goal</h2>
            <div className="mt-7 space-y-6 text-[15px] leading-8 text-black">
              {item.goal?.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          {item.meta?.length > 0 && (
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3 lg:ml-[27%]">
              {item.meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-sm text-black">{m.label}</dt>
                  <dd className="mt-1 text-base font-medium text-black">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>
      {item.tabs && (
        <section className="relative isolate overflow-hidden bg-neutral-900">
          {item.tabsBgImage && (
            <img src={item.tabsBgImage} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 -z-10 bg-black/65" />

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2">
            <CaseStudyTabs tabs={item.tabs} />
            {item.tabsImage && (
              <img
                src={item.tabsImage}
                alt={`${item.title} app screens`}
                loading="lazy"
                className="mx-auto w-full max-w-md object-contain drop-shadow-2xl"
              />
            )}
          </div>
        </section>
      )}
      {item.problem && (
        <section className="bg-gray-50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2">
            {item.problemImage && (
              <img
                src={item.problemImage}
                alt={`${item.title} before the project`}
                loading="lazy"
                className="order-2 mx-auto w-full max-w-md object-contain lg:order-1"
              />
            )}
            <div className="order-1 lg:order-2">
              <Heading className="case-study">The Problem</Heading>
              <div className="mt-6 space-y-5 text-base leading-8 text-black">
                {item.problem.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>
      )}
      {item.solution && (() => {
        const screens = item.designLibrary?.screens || [];
        const tiles = screens.length ? Array.from({ length: 15 }, (_, i) => screens[i % screens.length]) : [];
        return (
          <section className="relative isolate overflow-hidden bg-neutral-900">
            {item.solutionImage ? (
              <img src={item.solutionImage} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            ) : (
              tiles.length > 0 && (
                <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute left-1/2 top-1/2 grid w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[-30deg] grid-cols-5 gap-6 sm:gap-10">
                    {tiles.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        loading="lazy"
                        className={`aspect-9/19 w-full rounded-4xl border-[6px] border-neutral-800 bg-white object-cover shadow-2xl ${i % 2 ? "translate-y-16" : ""
                          }`}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
            <div className="absolute inset-0 -z-10 bg-black/45" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(0,0,0,.6),transparent)]" />

            <div className="mx-auto flex min-h-105 max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-135">
              <h2 className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl">Business Solutions</h2>
              <p className="mt-6 text-base leading-8 text-white drop-shadow sm:text-lg">{item.solution}</p>
            </div>
          </section>
        );
      })()}
      {item.technologies?.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Heading center className="text-4xl font-bold leading-tight drop-shadow-lg sm:text-6xl">
            Technology
          </Heading>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {item.technologies.map((t) => (
              <li
                key={t.name}
                className="flex flex-col items-center justify-center gap-3 border border-gray-200 bg-white px-4 py-6 text-center transition hover:border-red-600 hover:shadow-md"
              >
                {t.icon && <img src={t.icon} alt="" loading="lazy" className="h-10 w-10 object-contain" />}
                <span className="text-sm  text-black">{t.name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {item.results && (
        <section className="relative isolate overflow-hidden bg-[#232323]">
          {/* Peeche halki si image (neeche ki taraf zyada nazar aati hai) */}
          {item.resultsImage && (
            <img
              src={item.resultsImage}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 mask-[linear-gradient(to_bottom,transparent_10%,#000_75%)]"
            />
          )}

          <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:py-20">
            <h2 className="text-4xl font-bold text-white sm:text-5xl case-study">Results</h2>
            <p className="mx-auto mt-6 max-w-4xl text-[15px] leading-7 text-white">{item.results.text}</p>

            {item.results.stats?.length > 0 && (
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {item.results.stats.map((s) => (
                  <li
                    key={s.label}
                    className="flex min-h-27.5 flex-col items-center justify-center rounded-xl border border-white/80 bg-linear-to-b from-white/5 via-white/15 to-white/45 px-4 py-6 backdrop-blur-[2px] sm:min-h-30"
                  >
                    <p className="text-3xl font-bold leading-none text-white sm:text-4xl">{s.value}</p>
                    <p className="mt-1.5 text-sm text-white">{s.label}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}
      {item.designLibrary && (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Heading center className="text-4xl font-bold leading-tight text-black drop-shadow-lg sm:text-6xl">Design Library</Heading>
          {item.designLibrary.cover && (
            <img
              src={item.designLibrary.cover}
              alt={`${item.title} design system and screens`}
              loading="lazy"
              className="mt-10 w-full rounded-lg bg-neutral-900 object-cover shadow-xl"
            />
          )}
          {item.designLibrary.screens?.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {item.designLibrary.screens.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${item.title} screen ${i + 1}`}
                  loading="lazy"
                  className="w-full rounded-lg border border-gray-200 bg-gray-100 object-cover"
                />
              ))}
            </div>
          )}
        </section>
      )}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/cta-bg.webp"
          alt="cta-bg"
          className="block w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-white case-study">
            14
          </h2>

          <p className="mt-3 max-w-3xl text-xl md:text-3xl font-semibold text-white">
            Years of Building Digital Products and We Are Just Getting Started
          </p>

          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
      {caseStudies.length > 1 && (
        <nav aria-label="More case studies" className="flex items-center justify-center bg-white gap-50">
          <Link
            href={`${BASE}/${prev.slug}`}
            className="group flex flex-col items-start gap-2  px-5 py-10 transition hover:bg-gray-50 sm:px-12"
          >
            <span className="flex items-center gap-2 text-3xl font-extrabold text-black sm:text-5xl">
              <ArrowLeft className="h-7 w-7 text-red-700 transition-transform group-hover:-translate-x-1 sm:h-9 sm:w-9" />
              PREV
            </span>
            <span className="text-sm text-black sm:text-base">{prev.title}</span>
          </Link>
          <Link
            href={`${BASE}/${next.slug}`}
            className="group flex flex-col items-end gap-2 px-5 py-10 text-right transition hover:bg-gray-50 sm:px-12"
          >
            <span className="flex items-center gap-2 text-3xl font-extrabold text-black sm:text-5xl">
              NEXT
              <ArrowRight className="h-7 w-7 text-red-700 transition-transform group-hover:translate-x-1 sm:h-9 sm:w-9" />
            </span>
            <span className="text-sm text-black sm:text-base">{next.title}</span>
          </Link>
        </nav>
      )}
{/* ================= LET'S CONNECT ================= */}
<section className="relative isolate overflow-hidden bg-linear-to-r from-[#c71829] via-[#FF0000] to-[#FF0000]">
  {/* Daayen taraf DevApp Grid ka white "D < >" nishan */}
  <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[40%] sm:block">
    <svg
      viewBox="0 0 110 100"
      aria-hidden="true"
      className="absolute bottom-[-22%] right-[6%] h-[135%] text-white"
    >
      <defs>
        <mask id="dag-connect-mark">
          <rect width="110" height="100" fill="#fff" />
          <polyline points="36,22 14,50 36,78" fill="none" stroke="#000" strokeWidth="13" />
          <polyline points="56,28 80,50 56,72" fill="none" stroke="#000" strokeWidth="13" />
        </mask>
      </defs>
      <path d="M0 0 H60 A50 50 0 0 1 60 100 H0 Z" fill="currentColor" mask="url(#dag-connect-mark)" />
    </svg>
  </div>

  <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 sm:py-14 lg:px-24">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
        Let&rsquo;s Assist You In Bringing Your Vision To Life.
      </h2>
      <Link
        href="/contact-us"
        className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase text-[#d92638] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        Let&rsquo;s Connect
        <span aria-hidden="true" className="text-lg leading-none transition-transform group-hover:translate-x-1">
          »
        </span>
      </Link>
    </div>
  </div>
</section>
    </article>

  );
  
}