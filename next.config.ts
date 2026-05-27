import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://fts-backend-ishb.onrender.com",
  },
};

export default nextConfig;