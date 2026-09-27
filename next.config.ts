import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.20.10.2"],
  images: {
    qualities: [90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hcsmpcb.wordpress.com",
        pathname: "/wp-content/uploads/2026/09/**",
      },
    ],
  },
};

export default nextConfig;
