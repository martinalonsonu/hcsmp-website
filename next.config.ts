import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.20.10.2", "127.0.0.1"],
  output: "export",
  trailingSlash: true,
  images: {
    qualities: [75, 90, 95],
    unoptimized: true,
  },
};

export default nextConfig;
