/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["sportklub.rs", "sportklub.n1info.rs"],
  },
  output: "standalone",
};

module.exports = nextConfig;
