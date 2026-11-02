"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/*
  Floating promo card — "Estimate your app cost"
  - Har page change par 3 second baad neeche left corner se aata hai
  - Close (X) karne par 5 second baad dobara aata hai
  - Calculator page par khud chhup jata hai
  Use: app/layout.jsx mein <CostEstimatePromo /> ek dafa laga dein.
*/

export default function CostEstimatePromo({
  href = "/app-cost-calculator",
  delay = 3000, // page change ke baad
  reopenDelay = 5000, // close karne ke baad
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);

  const onCalculatorPage = pathname?.startsWith(href);

  const showAfter = (ms) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(true), ms);
  };

  // Har dafa page (pathname) badle: pehle chhupao, phir 3 second baad dikhao
  useEffect(() => {
    setVisible(false);
    clearTimeout(timer.current);
    if (!onCalculatorPage) showAfter(delay);
    return () => clearTimeout(timer.current);
  }, [pathname, onCalculatorPage, delay]);

  // X dabane par: band karo, 5 second baad phir dikhao
  const close = () => {
    setVisible(false);
    if (!onCalculatorPage) showAfter(reopenDelay);
  };

  // "Calculate Now" par: band karo (calculator page par waise bhi nahi aata)
  const handleCta = () => {
    clearTimeout(timer.current);
    setVisible(false);
  };

  if (!visible || onCalculatorPage) return null;

  return (
    <aside
      className="dag-promo fixed bottom-4 left-4 z-[90] w-[230px] sm:bottom-6 sm:left-6 sm:w-[250px]"
      aria-label="App cost calculator"
    >
      <style>{promoCss}</style>

      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-red-500 via-red-600 to-red-800 px-5 pb-5 pt-3 text-center text-white shadow-[0_20px_50px_-12px_rgba(185,28,28,0.65)] ring-1 ring-white/15">
        {/* background decoration */}
        <span className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-black/10" aria-hidden="true" />
        <span className="dag-promo-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

        {/* close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-red-600 shadow-md transition hover:scale-110 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* illustration */}
        <CalculatorArt />

        <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-100">
          Free tool · 2 minutes
        </p>
        <p className="relative mt-1.5 text-[19px] font-extrabold leading-tight">
          What will your app <span className="text-yellow-300">really cost?</span>
        </p>
        <p className="relative mt-1.5 text-xs leading-snug text-red-100">
          Get an instant estimate for cost, effort and timeline.
        </p>

        <Link
          href={href}
          onClick={handleCta}
          className="dag-promo-cta group relative mt-4 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-4 py-3 text-sm font-bold text-red-600 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Calculate Now
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </aside>
  );
}

/* ---------- Illustration (inline SVG, animated) ---------- */
function CalculatorArt() {
  return (
    <svg viewBox="0 0 220 150" className="relative mx-auto -mb-1 h-[128px] w-full" role="img" aria-label="Calculator with coins">
      <defs>
        <linearGradient id="dagBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b7bff" />
          <stop offset="1" stopColor="#5a45e0" />
        </linearGradient>
        <linearGradient id="dagSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4732c0" />
          <stop offset="1" stopColor="#2e1f8a" />
        </linearGradient>
        <linearGradient id="dagCoin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe58a" />
          <stop offset=".55" stopColor="#f6c23e" />
          <stop offset="1" stopColor="#c98a12" />
        </linearGradient>
        <linearGradient id="dagCoinEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9970f" />
          <stop offset="1" stopColor="#9a6406" />
        </linearGradient>
        <radialGradient id="dagGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="110" cy="70" rx="80" ry="60" fill="url(#dagGlow)" />
      <ellipse cx="108" cy="138" rx="62" ry="7" fill="#000" opacity=".22" />

      {/* calculator */}
      <g className="dag-calc">
        <g transform="rotate(-10 108 75)">
          <rect x="66" y="22" width="90" height="112" rx="16" fill="url(#dagSide)" />
          <rect x="60" y="14" width="90" height="112" rx="16" fill="url(#dagBody)" />
          <rect x="64" y="17" width="54" height="6" rx="3" fill="#fff" opacity=".25" />
          {/* screen */}
          <rect x="70" y="26" width="70" height="26" rx="7" fill="#1b1550" />
          <text x="133" y="44" textAnchor="end" fontSize="12" fontWeight="800" fill="#7ff7df" fontFamily="system-ui, sans-serif">
            $<tspan className="dag-num">24,800</tspan>
          </text>
          {/* keys */}
          {[
            [70, 60, "#ff9b5c", "+"], [89, 60, "#ff9b5c", "−"], [108, 60, "#ff9b5c", "×"], [127, 60, "#ff9b5c", "÷"],
            [70, 78, "#b6abff", ""], [89, 78, "#b6abff", ""], [108, 78, "#b6abff", ""],
            [70, 96, "#b6abff", ""], [89, 96, "#b6abff", ""], [108, 96, "#b6abff", ""],
          ].map(([x, y, c, s], i) => (
            <g key={i} className={s ? `dag-key dag-key-${i}` : undefined}>
              <rect x={x} y={y + 2} width="15" height="14" rx="4" fill="#000" opacity=".18" />
              <rect x={x} y={y} width="15" height="14" rx="4" fill={c} />
              {s && (
                <text x={x + 7.5} y={y + 10.5} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff" fontFamily="system-ui, sans-serif">
                  {s}
                </text>
              )}
            </g>
          ))}
          <rect x="127" y="80" width="15" height="32" rx="4" fill="#000" opacity=".18" />
          <rect x="127" y="78" width="15" height="32" rx="4" fill="#ff4d6d" />
          <text x="134.5" y="98" textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff" fontFamily="system-ui, sans-serif">=</text>
        </g>
      </g>

      {/* coin stack right */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(0 ${-i * 7})`}>
            <ellipse cx="176" cy="130" rx="17" ry="6" fill="url(#dagCoinEdge)" />
            <rect x="159" y="124" width="34" height="6" fill="url(#dagCoinEdge)" />
            <ellipse cx="176" cy="124" rx="17" ry="6" fill="url(#dagCoin)" />
          </g>
        ))}
      </g>
      {/* coin stack left */}
      <g>
        {[0, 1].map((i) => (
          <g key={i} transform={`translate(0 ${-i * 7})`}>
            <ellipse cx="44" cy="132" rx="15" ry="5.5" fill="url(#dagCoinEdge)" />
            <rect x="29" y="126.5" width="30" height="5.5" fill="url(#dagCoinEdge)" />
            <ellipse cx="44" cy="126.5" rx="15" ry="5.5" fill="url(#dagCoin)" />
          </g>
        ))}
      </g>

      {/* floating coins */}
      <g className="dag-coin-a">
        <circle cx="182" cy="62" r="15" fill="url(#dagCoinEdge)" />
        <circle cx="180" cy="60" r="15" fill="url(#dagCoin)" />
        <circle cx="180" cy="60" r="10.5" fill="none" stroke="#c98a12" strokeWidth="1.5" opacity=".6" />
        <text x="180" y="65" textAnchor="middle" fontSize="14" fontWeight="900" fill="#9a6406" fontFamily="system-ui, sans-serif">$</text>
      </g>
      <g className="dag-coin-b">
        <circle cx="37" cy="72" r="11" fill="url(#dagCoinEdge)" />
        <circle cx="36" cy="70" r="11" fill="url(#dagCoin)" />
        <text x="36" y="74" textAnchor="middle" fontSize="11" fontWeight="900" fill="#9a6406" fontFamily="system-ui, sans-serif">$</text>
      </g>

      {/* sparkles */}
      <path className="dag-spark dag-spark-1" d="M48 30l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff" />
      <path className="dag-spark dag-spark-2" d="M196 24l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" fill="#fde68a" />
      <circle className="dag-spark dag-spark-3" cx="160" cy="18" r="2.5" fill="#fff" />
    </svg>
  );
}

const promoCss = `
.dag-promo{animation:dagIn .6s cubic-bezier(.2,.9,.3,1.2) both}
@keyframes dagIn{from{opacity:0;transform:translateY(30px) scale(.92)}to{opacity:1;transform:none}}
.dag-promo-dots{background-image:radial-gradient(rgba(255,255,255,.35) 1px,transparent 1px);background-size:14px 14px;
  -webkit-mask-image:linear-gradient(180deg,#000,transparent 60%);mask-image:linear-gradient(180deg,#000,transparent 60%)}
.dag-calc{animation:dagFloat 4s ease-in-out infinite;transform-origin:center}
@keyframes dagFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
.dag-coin-a{animation:dagCoin 3.2s ease-in-out infinite}
.dag-coin-b{animation:dagCoin 3.8s ease-in-out -1.2s infinite}
@keyframes dagCoin{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-8px) rotate(8deg)}}
.dag-key{animation:dagKey 2.4s ease-in-out infinite}
.dag-key-1{animation-delay:.6s}.dag-key-2{animation-delay:1.2s}.dag-key-3{animation-delay:1.8s}
@keyframes dagKey{0%,12%,100%{transform:translateY(0)}6%{transform:translateY(2px)}}
.dag-spark{animation:dagSpark 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
.dag-spark-2{animation-delay:.9s}.dag-spark-3{animation-delay:1.7s}
@keyframes dagSpark{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}
.dag-promo-cta::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(239,68,68,.15) 50%,transparent 70%);transform:translateX(-100%);animation:dagShine 3s ease-in-out 1s infinite}
@keyframes dagShine{60%,100%{transform:translateX(100%)}}
@media (prefers-reduced-motion:reduce){.dag-promo,.dag-promo *,.dag-promo-cta::after{animation:none!important}}
`;