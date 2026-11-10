// scripts/check-service-pages.js — build ke baad: koi service page khaali to nahi?
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "out");
const DIR = path.join(OUT, "services-details");
const bad = [];

const check = (file, label) => {
  const html = fs.readFileSync(file, "utf8");
  const hasH1 = /<h1[\s>]/i.test(html);
  // Skeleton ka asli nishan: "Request a Free Quote" form nahi + animate-pulse hai
  const isSkeleton = html.includes("animate-pulse") && !html.includes("Request a Free Quote");
  if (!hasH1 || isSkeleton) bad.push(label);
};

if (!fs.existsSync(DIR)) {
  console.error("❌ out/services-details folder hi nahi bana — koi service page nahi bana");
  process.exit(1);
}
const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".html"));
files.forEach((f) => check(path.join(DIR, f), f));

// /services-details (bina slug) wala page bhi
const index = path.join(OUT, "services-details.html");
if (fs.existsSync(index)) check(index, "services-details.html (bina slug wala page — delete karein)");

if (bad.length) {
  console.error(`❌ ${bad.length} khaali service pages:\n - ` + bad.join("\n - "));
  process.exit(1);
}
console.log(`✓ Saare ${files.length} service pages mein content hai`);