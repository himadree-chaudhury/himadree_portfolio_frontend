import type { NextConfig } from "next";
import { FlatCompat } from '@eslint/eslintrc'



const nextConfig: NextConfig = {
 
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
