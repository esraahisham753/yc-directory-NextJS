import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ],
    dangerouslyAllowSVG: true
  },
  experimental: {
    ppr: true
  },
};

export default nextConfig;
