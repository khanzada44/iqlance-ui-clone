// SERVER component — "use client" NAHI lagana.
// Build ke waqt menu ka data laata hai aur Navbar ko deta hai,
// taa ke Services menu ki list page ke HTML mein ho (Google ko mile).
import Navbar from "./Navbar";
import { fetchDynamicNavLinks, getServicesData } from "@/lib/navigation-data";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function withRetry<T>(label: string, fn: () => Promise<T>, ok: (v: T) => boolean): Promise<T | null> {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const v = await fn();
      if (ok(v)) return v;
      console.warn(`[navbar] ${label} — koshish ${attempt}/3: khaali jawab`);
    } catch (e: any) {
      console.warn(`[navbar] ${label} — koshish ${attempt}/3 fail:`, e?.response?.status || "", e?.message || e);
    }
    if (attempt < 3) await sleep(1000 * attempt);
  }
  console.error(`[navbar] ❌ ${label} build mein NAHI mila — menu browser mein load hoga (Google ko khaali milega)`);
  return null;
}

export default async function NavbarServer() {
  const [navLinks, servicesData] = await Promise.all([
    withRetry("nav links", () => fetchDynamicNavLinks(), (v: any) => Array.isArray(v) && v.length > 0),
    withRetry("services menu", () => getServicesData(), (v: any) => (v?.categories?.length ?? 0) > 0),
  ]);

  return <Navbar serverNavLinks={navLinks as any} serverServicesData={servicesData as any} />;
}
