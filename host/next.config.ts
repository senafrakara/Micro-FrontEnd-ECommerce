import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/products/:path*',
        destination: `${process.env.NEXT_PUBLIC_PRODUCTS_REMOTE_URL}/products/:path*`
      },
      {
        source: '/basket',
        destination: `${process.env.NEXT_PUBLIC_BASKET_REMOTE_URL}/basket`
      }
    ];
  }
};

export default nextConfig;
