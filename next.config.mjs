/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/trainingpro',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
