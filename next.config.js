/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'cdn.aboutstatic.com'],
  },
}

module.exports = nextConfig
