"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/*
  "App cost calculator" bar widget (250 x 72px), neeche left corner mein.
  <CostEstimatePromo />
  - Page change ke `delay` ms baad aata hai
  - X dabane par band, `reopenDelay` ms baad phir aata hai (null = dobara nahi)
  - Calculator page par nahi dikhta
*/

export default function CostEstimatePromo({
  href = "/app-cost-calculator",
  delay = 3000,
  reopenDelay = 5000,
  label = "Free tool",
  text = "Estimate your app cost",
}) {
  const pathname = usePathname();
  const onCalc = pathname?.startsWith(href);
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    clearTimeout(timer.current);
    setShow(false);
    if (onCalc) return;
    timer.current = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer.current);
  }, [pathname, onCalc, delay]);

  const close = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setShow(false);
    clearTimeout(timer.current);
    if (reopenDelay != null && !onCalc) timer.current = setTimeout(() => setShow(true), reopenDelay);
  };
  const go = () => {
    clearTimeout(timer.current);
    setShow(false);
  };

  if (!show || onCalc) return null;

  const X = (
    <button type="button" className="dgw-x" onClick={close} aria-label="Close">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
    </button>
  );
  const Arrow = (
    <svg className="dgw-arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  );

  return (
    <>
      <style>{css}</style>

      <aside className="dgw dgw--bar" aria-label="App cost calculator">
        <Link href={href} onClick={go} className="dgw-bar">
          <span className="dgw-bar-art"><CalcArt /></span>
          <span className="dgw-bar-txt">
            <small>{label}</small>
            {text}
          </span>
          <span className="dgw-bar-go">{Arrow}</span>
        </Link>
        {X}
      </aside>
    </>
  );
}

/* ---------- 3D calculator + coins (SVG) ---------- */
function CalcArt() {
  const raw = useId();
  const id = (n) => `dgw${raw.replace(/[^a-zA-Z0-9]/g, "")}${n}`;
  const keys = [
    [0, 0, "+"], [1, 0, "−"], [2, 0, "×"], [3, 0, "÷"],
    [0, 1, ""], [1, 1, ""], [2, 1, ""],
    [0, 2, ""], [1, 2, ""], [2, 2, ""],
  ];
  return (
    <svg viewBox="0 0 200 140" className="dgw-svg" role="img" aria-label="Calculator with coins">
      <defs>
        <linearGradient id={id("b")} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8f7dff" /><stop offset="1" stopColor="#4b38d6" /></linearGradient>
        <linearGradient id={id("s")} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3a28b0" /><stop offset="1" stopColor="#211578" /></linearGradient>
        <linearGradient id={id("k")} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffb06b" /><stop offset="1" stopColor="#f2741f" /></linearGradient>
        <linearGradient id={id("l")} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9c0ff" /><stop offset="1" stopColor="#9c8ff0" /></linearGradient>
        <linearGradient id={id("e")} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff6b81" /><stop offset="1" stopColor="#e11d48" /></linearGradient>
        <linearGradient id={id("c")} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffe9a0" /><stop offset=".5" stopColor="#f7c638" /><stop offset="1" stopColor="#c8890f" /></linearGradient>
        <linearGradient id={id("ce")} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d99510" /><stop offset="1" stopColor="#8f5a05" /></linearGradient>
      </defs>

      <ellipse cx="100" cy="132" rx="70" ry="6" fill="#000" opacity=".25" />

      {/* calculator */}
      <g className="dgw-calc">
        <g transform="rotate(-8 100 70)">
          <rect x="54" y="16" width="96" height="112" rx="18" fill={`url(#${id("s")})`} />
          <rect x="48" y="9" width="96" height="112" rx="18" fill={`url(#${id("b")})`} />
          <rect x="54" y="13" width="56" height="6" rx="3" fill="#fff" opacity=".3" />
          <rect x="58" y="22" width="76" height="26" rx="8" fill="#17124a" />
          <text x="128" y="40" textAnchor="end" fontSize="12" fontWeight="800" fill="#7ff7df" fontFamily="system-ui,sans-serif">$24,800</text>
          {keys.map(([c, r, s], i) => {
            const x = 58 + c * 19.5, y = 56 + r * 20;
            const fill = s ? `url(#${id("k")})` : `url(#${id("l")})`;
            return (
              <g key={i} className={s ? `dgw-key dgw-key${i}` : undefined}>
                <rect x={x} y={y + 2.5} width="15.5" height="15" rx="4.5" fill="#000" opacity=".2" />
                <rect x={x} y={y} width="15.5" height="15" rx="4.5" fill={fill} />
                {s && <text x={x + 7.75} y={y + 11} textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#fff" fontFamily="system-ui,sans-serif">{s}</text>}
              </g>
            );
          })}
          <rect x="116.5" y="78.5" width="15.5" height="35" rx="4.5" fill="#000" opacity=".2" />
          <rect x="116.5" y="76" width="15.5" height="35" rx="4.5" fill={`url(#${id("e")})`} />
          <text x="124.25" y="97" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff" fontFamily="system-ui,sans-serif">=</text>
        </g>
      </g>

      {/* coin stacks */}
      {[{ cx: 164, n: 4 }, { cx: 34, n: 3 }].map(({ cx, n }) => (
        <g key={cx}>
          {Array.from({ length: n }).map((_, i) => (
            <g key={i} transform={`translate(0 ${-i * 7})`}>
              <ellipse cx={cx} cy="128" rx="16" ry="5.5" fill={`url(#${id("ce")})`} />
              <rect x={cx - 16} y="122.5" width="32" height="5.5" fill={`url(#${id("ce")})`} />
              <ellipse cx={cx} cy="122.5" rx="16" ry="5.5" fill={`url(#${id("c")})`} />
            </g>
          ))}
        </g>
      ))}
      {/* floating coins */}
      <g className="dgw-coin dgw-coin1">
        <circle cx="168" cy="58" r="15" fill={`url(#${id("ce")})`} />
        <circle cx="166" cy="56" r="15" fill={`url(#${id("c")})`} />
        <circle cx="166" cy="56" r="10.5" fill="none" stroke="#c8890f" strokeWidth="1.4" opacity=".7" />
        <text x="166" y="61" textAnchor="middle" fontSize="14" fontWeight="900" fill="#8f5a05" fontFamily="system-ui,sans-serif">$</text>
      </g>
      <g className="dgw-coin dgw-coin2">
        <circle cx="33" cy="80" r="12" fill={`url(#${id("ce")})`} />
        <circle cx="32" cy="78" r="12" fill={`url(#${id("c")})`} />
        <text x="32" y="82.5" textAnchor="middle" fontSize="12" fontWeight="900" fill="#8f5a05" fontFamily="system-ui,sans-serif">$</text>
      </g>
      <path className="dgw-spark" d="M28 26l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff" />
      <path className="dgw-spark dgw-spark2" d="M178 18l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" fill="#ffd56b" />
    </svg>
  );
}

const css = `
.dgw{position:fixed;left:18px;bottom:18px;z-index:90;font-family:inherit;animation:dgwIn .5s cubic-bezier(.2,.9,.3,1.2) both}
@keyframes dgwIn{from{opacity:0;transform:translateY(20px) scale(.94)}to{opacity:1;transform:none}}
.dgw a{text-decoration:none !important}

/* close button */
.dgw-x{position:absolute;top:-9px;right:-9px;z-index:3;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;border:0;cursor:pointer;
  background:#fff;color:#e11d48;box-shadow:0 4px 12px rgba(0,0,0,.25);transition:transform .2s}
.dgw-x:hover{transform:scale(1.12) rotate(90deg)}
.dgw-x svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round}
.dgw-arr{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}

.dgw-svg{display:block;width:100%;height:auto}

/* ---------- bar variant ---------- */
.dgw--bar{width:250px}
.dgw-bar{display:flex;align-items:center;gap:8px;height:72px;padding:0 10px 0 4px;border-radius:18px;
  background:linear-gradient(135deg, #5c0109, #97071b 50%, #e90c0c);color:#fff !important;box-shadow:0 14px 32px -10px rgba(225,29,72,.7),inset 0 1px 0 rgba(255,255,255,.25);transition:transform .2s}
.dgw-bar:hover{transform:translateY(-2px)}
.dgw-bar-art{flex:none;width:86px;margin:-14px 0 -4px}
.dgw-bar-txt{flex:1;display:flex;flex-direction:column;font-size:14px;font-weight:800;line-height:1.2}
.dgw-bar-txt small{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#ffd1d8;margin-bottom:2px}
.dgw-bar-go{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#fff;color:#e11d48}
.dgw-bar:hover .dgw-arr{transform:translateX(2px)}

/* ---------- illustration motion ---------- */
.dgw-calc{animation:dgwFloat 4s ease-in-out infinite}
@keyframes dgwFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.dgw-coin1{animation:dgwCoin 3s ease-in-out infinite}
.dgw-coin2{animation:dgwCoin 3.6s ease-in-out -1.2s infinite}
@keyframes dgwCoin{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.dgw-key{animation:dgwKey 2.4s ease-in-out infinite}
.dgw-key1{animation-delay:.6s}.dgw-key2{animation-delay:1.2s}.dgw-key3{animation-delay:1.8s}
@keyframes dgwKey{0%,12%,100%{transform:translateY(0)}6%{transform:translateY(2px)}}
.dgw-spark{transform-box:fill-box;transform-origin:center;animation:dgwSpark 2.4s ease-in-out infinite}
.dgw-spark2{animation-delay:1.1s}
@keyframes dgwSpark{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}

@media (max-width:480px){
  .dgw{left:12px;bottom:12px}
  .dgw--bar{width:232px}
  .dgw-bar{height:66px}
  .dgw-bar-art{width:78px}
  .dgw-bar-txt{font-size:13px}
}
@media (prefers-reduced-motion:reduce){.dgw,.dgw *{animation:none !important}}
`;