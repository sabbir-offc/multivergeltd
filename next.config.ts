import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deon.qodeinteractive.com',
      },
    ],
  },
};

export default nextConfig;
