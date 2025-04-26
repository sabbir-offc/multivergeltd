import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 This line is important!

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
