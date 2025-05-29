import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source : '/background.svg',
        headers: [
          {
            key  : 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key  : 'Content-Type',
            value: 'image/svg+xml',
          },
        ],
      },
      {
        source : '/(.*\\.svg)',
        headers: [
          {
            key  : 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  images: {
    formats: [ 'image/webp', 'image/avif' ],
  },
}

export default nextConfig
