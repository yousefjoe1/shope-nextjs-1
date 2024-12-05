import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all hostnames
      },
    ],
    // Alternatively, you can specify trusted domains like below:
    // domains: ["example.com", "another-example.com"], 
  },
};

export default nextConfig;
