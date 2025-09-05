import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Finexwebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Finexwebsite' : '',
  // Fix for GitHub Actions build
  outputFileTracingRoot: process.env.CI ? undefined : '.',
};

export default nextConfig;
