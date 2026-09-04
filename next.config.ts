import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.devappgrid.com",
      },
      {
        protocol: "https",
        hostname: "devappgrid.dev-staging.live",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;