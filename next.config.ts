import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'is1-ssl.mzstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'is2-ssl.mzstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'is3-ssl.mzstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'is4-ssl.mzstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'is5-ssl.mzstatic.com',
            },
        ],
    },
};

export default nextConfig;
