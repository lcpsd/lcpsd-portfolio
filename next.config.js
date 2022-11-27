/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR"
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  images: {
    domains: ["i.imgur.com"]
  }
}

module.exports = nextConfig
