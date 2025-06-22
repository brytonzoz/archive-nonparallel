/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['justaremindertolivelife.com', 'nonparallel.wixstudio.com', 'scrapwrk.com'],
    unoptimized: true
  },
}

module.exports = nextConfig 