// Build ke baad: agar "x.html" aur "x/" folder dono hain,
// to x.html ko x/index.html mein bhi copy karo (server folder khole to bhi naya page mile)
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "out");

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (name.endsWith(".html")) {
      const folder = full.slice(0, -5); // "blog.html" -> "blog"
      if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
        fs.copyFileSync(full, path.join(folder, "index.html"));
        console.log("✓ copy:", path.relative(OUT, full), "→", path.relative(OUT, path.join(folder, "index.html")));
      }
    }
  }
}

walk(OUT);