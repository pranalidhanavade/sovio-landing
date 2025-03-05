import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false,  // Disable Next.js built-in CSS optimization
  },
};


export default nextConfig;
module.exports = nextConfig;
