"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Check, X, Loader2, CalendarClock } from "lucide-react";
import { submitContactForm } from "@/services/send-call-request";
import { STEPS, calculateEstimate, selectionSummary } from "../app-cost-calculator/data";

/* ---------- Phone helpers (baqi DevApp Grid forms jaise) ---------- */
const sanitizePhone = (value) =>
  value.replace(/[^\d+\s()-]/g, "").replace(/(?!^)\+/g, "").slice(0, 20);

const getPhoneError = (phone) => {
  const value = (phone || "").trim();
  if (!value) return "Phone number is required";
  const cleaned = value.replace(/[\s()-]/g, "");
  if (!/^\+?\d+$/.test(cleaned)) return "Phone number can only contain digits";
  const digits = cleaned.replace(/\D/g, "");
  if (digits.length < 10) return "Phone number must be at least 10 digits";
  if (digits.length > 15) return "Phone number cannot be more than 15 digits";
  if (/^(\d)\1+$/.test(digits)) return "Enter a valid phone number";
  return "";
};

const money = (n) => "$" + Number(n).toLocaleString("en-US");

const GRID_COLS = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

const EMPTY_FORM = { name: "", phone: "", email: "", message: "", consent: false, website: "" };

export default function AppCostCalculator({ contactUrl = "/contact-us", thankYouUrl = "/thank-you" }) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState(() => Object.fromEntries(STEPS.map((s) => [s.key, []])));
  const [stepError, setStepError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const topRef = useRef(null);
  const firstFieldRef = useRef(null);

  const estimate = useMemo(() => calculateEstimate(selected), [selected]);
  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  /* ---------- Modal: ESC se band, body scroll lock ---------- */
  useEffect(() => {
    if (!showForm) return;
    const onKey = (e) => e.key === "Escape" && !loading && setShowForm(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [showForm, loading]);

  /* ---------- Selection ---------- */
  const toggle = (stepDef, id) => {
    setStepError("");
    setSelected((prev) => {
      const current = prev[stepDef.key] || [];
      let next;
      if (stepDef.multi) {
        next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
      } else {
        next = [id];
      }
      return { ...prev, [stepDef.key]: next };
    });
  };

  const goTo = (i) => {
    setStepIndex(i);
    setStepError("");
    // mobile par step ke shuru tak scroll
    if (typeof window !== "undefined" && window.innerWidth < 1024 && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const canLeave = (i) => !STEPS[i].required || (selected[STEPS[i].key] || []).length > 0;

  const handleNext = () => {
    if (!canLeave(stepIndex)) {
      setStepError(step.multi ? "Please select at least one option." : "Please select an option.");
      return;
    }
    if (isLast) {
      setShowForm(true);
      return;
    }
    goTo(stepIndex + 1);
  };

  // Stepper: sirf pichle steps ya agla step (agar mojooda step complete ho)
  const handleStepClick = (i) => {
    if (i === stepIndex) return;
    if (i < stepIndex) return goTo(i);
    for (let k = stepIndex; k < i; k++) {
      if (!canLeave(k)) {
        goTo(k);
        setStepError("Please complete this step first.");
        return;
      }
    }
    goTo(i);
  };

  /* ---------- Form ---------- */
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const v = type === "checkbox" ? checked : name === "phone" ? sanitizePhone(value) : value;
    setForm((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    const pe = getPhoneError(form.phone);
    if (pe) e.phone = pe;
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Enter a valid email address";
    if (!form.consent) e.consent = "Please accept to continue";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return; // honeypot (bots)
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    setSubmitError("");
    try {
      const estimateText = estimate
        ? `Estimate: ${money(estimate.costLow)} - ${money(estimate.costHigh)} | ~${estimate.hours} hrs | ~${estimate.weeks} weeks`
        : "Estimate: —";
      const message = [
        form.message.trim(),
        "",
        "---- App Cost Calculator ----",
        selectionSummary(selected),
        estimateText,
      ].join("\n");

      const payload = new FormData();
      payload.append("name", form.name.trim());
      payload.append("email", form.email.trim());
      payload.append("phone", form.phone.replace(/[\s()-]/g, ""));
      payload.append("message", message.trim());
      payload.append("is_nda", "0");
      payload.append("service", "App Cost Calculator");
      payload.append("service_category", "Mobile App Development");

      await submitContactForm(payload);
      router.push(thankYouUrl);
    } catch (err) {
      console.error("Calculator form submit failed:", err?.response?.data || err);
      setSubmitError("Something went wrong. Please try again or contact us directly.");
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16" aria-label="App cost calculator">
      <div ref={topRef} className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <div className="min-w-0">
          {/* Stepper */}
          <ol className="mb-8 flex items-start overflow-x-auto pb-2" aria-label="Calculator steps">
            {STEPS.map((s, i) => {
              const done = i < stepIndex;
              const active = i === stepIndex;
              return (
                <li key={s.key} className="flex min-w-16 flex-1 items-start">
                  <button
                    type="button"
                    onClick={() => handleStepClick(i)}
                    className="group flex w-full flex-col items-center gap-1.5 text-center"
                    aria-current={active ? "step" : undefined}
                  >
                    <span className="relative flex w-full items-center justify-center">
                      {i > 0 && (
                        <span
                          className={`absolute right-1/2 top-1/2 h-0.5 w-full -translate-y-1/2 ${
                            i <= stepIndex ? "bg-red-600" : "bg-gray-200"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                          done
                            ? "bg-red-600 text-white"
                            : active
                            ? "bg-red-600 text-white ring-4 ring-red-100"
                            : "bg-gray-200 text-black group-hover:bg-gray-300"
                        }`}
                      >
                        {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
                      </span>
                    </span>
                    <span
                      className={`text-[11px] font-medium sm:text-xs ${
                        done || active ? "text-red-600" : "text-gray-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* All steps in HTML (SEO) — sirf active dikhta hai */}
          {STEPS.map((s, i) => {
            const values = selected[s.key] || [];
            return (
              <div key={s.key} className={i === stepIndex ? "block" : "hidden"}>
                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-black sm:text-3xl">
                  {s.title} <span className="text-red-600">{s.highlight}</span>
                </h2>
                <p className="mt-2 text-base text-black">{s.hint}</p>

                <div
                  className={`mt-6 grid gap-3 sm:gap-4 ${GRID_COLS[s.columns] || GRID_COLS[4]}`}
                  role={s.multi ? "group" : "radiogroup"}
                  aria-label={`${s.title} ${s.highlight}`}
                >
                  {s.options.map((opt) => {
                    const on = values.includes(opt.id);
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        role={s.multi ? "checkbox" : "radio"}
                        aria-checked={on}
                        onClick={() => toggle(s, opt.id)}
                        className={`relative flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-xl border px-3 py-5 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${
                          on
                            ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/20"
                            : "border-gray-200 bg-white text-gray-800 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
                        }`}
                      >
                        {on && (
                          <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-red-600">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                        )}
                        <Icon className={`h-8 w-8 ${on ? "text-white" : "text-red-600"}`} strokeWidth={1.5} aria-hidden="true" />
                        <span className="text-sm font-semibold leading-snug">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Mobile: chhota estimate (right panel neeche chala jata hai) */}
          {estimate && (
            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-[#F7F8FA] px-4 py-3 lg:hidden">
              <span className="text-xs font-semibold text-gray-600">Rough estimate</span>
              <span className="text-sm font-extrabold text-black">
                {money(estimate.costLow)}+ <span className="font-medium text-gray-500">· {estimate.weeks} wks</span>
              </span>
            </div>
          )}

          <p className="mt-4 min-h-[20px] text-sm font-medium text-red-600" role="alert">
            {stepError}
          </p>

          {/* Nav buttons */}
          <div className="mt-6 flex items-center justify-between gap-4">
            {stepIndex > 0 ? (
              <button
                type="button"
                onClick={() => goTo(stepIndex - 1)}
                className="inline-flex items-center gap-2 rounded-xl border border-red-600 px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </button>
            ) : (
              <span />
            )}
            <div className="flex items-center gap-3">
              {!step.required && !isLast && (selected[step.key] || []).length === 0 && (
                <button
                  type="button"
                  onClick={() => goTo(stepIndex + 1)}
                  className="text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-800 hover:underline"
                >
                  Skip
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700"
              >
                {isLast ? "Get Detailed Estimate" : "Next"} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: live estimate ================= */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-[#F7F8FA] p-6 sm:p-7">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-black">
              Rough <span className="text-red-600">app estimate</span>
            </h2>
            <p className="mt-1 text-xs text-gray-500">Updates as you choose options.</p>

            <dl className="mt-6 space-y-5" aria-live="polite">
              <EstimateRow label="Estimated cost" value={estimate ? `${money(estimate.costLow)} – ${money(estimate.costHigh)}` : null} unit="USD" />
              <EstimateRow label="Development effort" value={estimate ? estimate.hours.toLocaleString("en-US") : null} unit="hrs" />
              <EstimateRow label="Project timeline" value={estimate ? `${estimate.weeks}` : null} unit="weeks" />
            </dl>

            <p className="mt-5 text-[11px] leading-relaxed text-gray-500">
              This is a rough estimate. Your final quote depends on design, complexity and scope, and is shared after a free consultation.
            </p>

            <div className="mt-6 overflow-hidden italic bg-linear-to-br from-red-600 to-red-900 p-5 text-white">
              <CalendarClock className="h-7 w-7 opacity-90" aria-hidden="true" />
              <p className="mt-3 text-base font-bold">Talk to an app expert</p>
              <p className="mt-1 text-xs text-red-100">Let&apos;s map out your idea, features and budget together.</p>
              <Link
                href={contactUrl}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-red-700 transition hover:bg-red-50"
              >
                Book a free call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* ================= FORM MODAL ================= */}
      {/* Portal: modal seedha <body> mein render hota hai, taa ke kisi parent ka
          transform/overflow use page ke beech se na hila sake */}
      {showForm && typeof document !== "undefined" && createPortal(
        <div
          className="popupForm fixed inset-0 z-[9999] flex min-h-dvh w-full items-center justify-center bg-black/60 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && !loading && setShowForm(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="calc-form-title"
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-white p-6 shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => !loading && setShowForm(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <p id="calc-form-title" className="pr-10 text-2xl font-extrabold leading-tight text-black sm:text-3xl">
              Get a <span className="text-red-600">detailed breakdown</span> of your app cost
            </p>

            {estimate && (
              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-[#F7F8FA] p-3 text-center sm:gap-4 sm:p-4">
                <div>
                  <p className="text-[11px] text-gray-500">Cost</p>
                  <p className="text-sm font-bold text-black sm:text-base">
                    {money(estimate.costLow)}+
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Effort</p>
                  <p className="text-sm font-bold text-black sm:text-base">{estimate.hours} hrs</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Timeline</p>
                  <p className="text-sm font-bold text-black sm:text-base">{estimate.weeks} weeks</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              {/* honeypot */}
              <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Full Name" name="name" error={errors.name}>
                  <input ref={firstFieldRef} id="calc-name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className={inputCls(errors.name)} />
                </Field>
                <Field label="Phone" name="phone" error={errors.phone}>
                  <input
                    id="calc-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={() => form.phone && setErrors((p) => ({ ...p, phone: getPhoneError(form.phone) }))}
                    placeholder="+1 555 123 4567"
                    className={inputCls(errors.phone)}
                  />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <input id="calc-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputCls(errors.email)} />
                </Field>
              </div>

              <Field label="Message" name="message" optional>
                <textarea id="calc-message" name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us a little about your app idea..." className={inputCls() + " resize-none"} />
              </Field>

              <div>
                <label className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-0.5 h-4 w-4 shrink-0 accent-red-600" />
                  <span>
                    I agree to be contacted by DevApp Grid by phone, SMS or email about my request, and I accept the{" "}
                    <Link href="/privacy-policy" className="font-semibold text-black underline">Privacy Policy</Link>{" "}
                    and{" "}
                    <Link href="/terms-and-conditions" className="font-semibold text-black underline">Terms</Link>.
                  </span>
                </label>
                {errors.consent && <p className="mt-1 text-xs font-medium text-red-600">{errors.consent}</p>}
              </div>

              {submitError && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send now <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

/* ---------- small pieces ---------- */
function EstimateRow({ label, value, unit }) {
  return (
    <div>
      <dt className="text-sm font-semibold text-gray-800">{label}</dt>
      <dd className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
        <span className={`text-lg font-extrabold ${value ? "text-black" : "text-gray-300"}`}>
          {value || "— —"}
        </span>
        <span className="text-xs font-bold uppercase text-red-600">{unit}</span>
      </dd>
    </div>
  );
}

function Field({ label, name, error, optional, children }) {
  return (
    <div>
      <label htmlFor={`calc-${name}`} className="mb-1.5 block text-xs font-semibold text-red-600">
        {label}
        {optional ? <span className="font-normal text-gray-400"> (optional)</span> : " *"}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

function inputCls(error) {
  return `w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
    error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-red-500 focus:ring-red-100"
  }`;
}