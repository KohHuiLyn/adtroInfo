/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  // This ensures static assets like images are properly served
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
};

export default nextConfig;

