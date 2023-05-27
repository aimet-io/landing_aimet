/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["*"],
  },
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-ZXK9XJEYPV'
  },
};

module.exports = nextConfig;
