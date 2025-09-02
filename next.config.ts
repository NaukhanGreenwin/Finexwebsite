import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed static export settings for Render deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
