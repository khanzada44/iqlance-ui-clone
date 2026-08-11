import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.iqlance.com",
      },
      {
        protocol: "https",
        hostname: "newbrand.coretechdigitals.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;