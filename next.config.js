/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sportklub.rs" },
      { protocol: "https", hostname: "sportklub.n1info.rs" },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
