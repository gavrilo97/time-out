/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["sportklub.rs"],
  },
  output: "standalone",
};

module.exports = nextConfig;
