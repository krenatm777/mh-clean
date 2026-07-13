import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  // Ensure the OG font asset is bundled for the dynamic opengraph-image route
  outputFileTracingIncludes: {
    "/opengraph-image": ["./assets/**/*"],
  },
};

export default nextConfig;
