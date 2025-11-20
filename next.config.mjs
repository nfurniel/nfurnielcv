/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nfurnielcv',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
