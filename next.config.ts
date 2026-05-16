import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.thinkwithmark.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
