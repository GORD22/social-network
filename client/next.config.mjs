/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/profile',
        permanent: true,
      },
    ]
  },
  env: {
    MODE: process.env.MODE,
    DEV_URL: process.env.DEV_URL,
    PROD_URL: process.env.PROD_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gw.alipayobjects.com'
      }
    ]
  }
};

export default nextConfig;
