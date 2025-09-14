/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
    domains: ['golfcoffee.vercel.app']
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Ensure proper build output for Vercel
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

module.exports = nextConfig;
