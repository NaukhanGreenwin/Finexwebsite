import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Finexwebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Finexwebsite/' : '',
};

export default nextConfig;
