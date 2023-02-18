/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["placeimg.com"],
  },
};

module.exports = nextConfig;
