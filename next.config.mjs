/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "c8.alamy.com",
      },
      {
        protocol: "https",
        hostname: "marketplace.canva.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/goals-and-objectives",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
