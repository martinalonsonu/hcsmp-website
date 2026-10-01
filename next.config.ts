import type { NextConfig } from "next";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.20.10.2"],
  output: "export",
  trailingSlash: true,
  basePath: configuredBasePath === "/" ? "" : configuredBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
