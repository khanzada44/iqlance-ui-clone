"use client";

// Challenge / Solution / Impact tabs (screenshot wala design).
// item.tabs ek OBJECT hai: { challenge: "...", solution: "...", impact: "..." }
// is liye .map() seedha nahi chalta — pehle TABS list se array banate hain.
// Teeno panels HTML mein hamesha hote hain (Google ko poora text milta hai), sirf ek dikhta hai.
import { useState } from "react";

const TABS = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" },
];

export default function CaseStudyTabs({ tabs }) {
  const available = TABS.filter((t) => tabs?.[t.key]);
  const [active, setActive] = useState(available[0]?.key);

  if (!available.length) return null;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Project overview"
        className="mb-10 flex w-full max-w-112.5 overflow-hidden rounded-xl border border-white/80"
      >
        {available.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`cs-tab-${t.key}`}
            aria-controls={`cs-panel-${t.key}`}
            aria-selected={active === t.key}
            onClick={() => setActive(t.key)}
            className={`flex-1 border-r border-white/70 px-3 py-4 text-center text-lg font-semibold text-white transition-colors last:border-r-0 sm:text-2xl ${
              active === t.key ? "bg-white/20" : "bg-transparent hover:bg-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {available.map((t) => (
        <p
          key={t.key}
          role="tabpanel"
          id={`cs-panel-${t.key}`}
          aria-labelledby={`cs-tab-${t.key}`}
          className={`max-w-xl text-base leading-8 text-white sm:text-lg ${active === t.key ? "block" : "hidden"}`}
        >
          {tabs[t.key]}
        </p>
      ))}
    </div>
  );
}