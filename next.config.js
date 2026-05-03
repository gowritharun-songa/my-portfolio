/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For easier deployment on some platforms if needed, but standard is fine
  },
}

module.exports = nextConfig