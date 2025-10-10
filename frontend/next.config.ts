import type { NextConfig } from "next";

// Derive Strapi hostname from env so images can load from external backend
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
let STRAPI_HOSTNAME = "localhost";
try {
  STRAPI_HOSTNAME = new URL(STRAPI_URL).hostname;
} catch {
  // keep default
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: STRAPI_HOSTNAME, port: "", pathname: "/uploads/**" },
      { protocol: "http", hostname: STRAPI_HOSTNAME, port: "", pathname: "/uploads/**" },
    ],
  },
};

export default nextConfig;
