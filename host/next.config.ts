import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/products/:path*',
        destination: `${process.env.NEXT_PUBLIC_PRODUCTS_REMOTE_URL}/products/:path*`
      },
      {
        source: '/basket/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASKET_REMOTE_URL}/basket/:path*`
      }
    ];
  }
};

export default nextConfig;
