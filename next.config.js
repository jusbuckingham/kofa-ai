/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    WEB3_PROVIDER_URL: process.env.WEB3_PROVIDER_URL,
  },
};

module.exports = nextConfig;