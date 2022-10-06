/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["uinsaid.ac.id", "rb.gy"]
  }
}

module.exports = nextConfig
module.exports = withImages()
