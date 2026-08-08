/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  experimental: {
    taint: true,
    serverMinification: false,
  },
  async redirects() {
    return [
      {
        source: '/renaissance',
        destination: '/',
        permanent: true,  // or `false` if it is meant to be a temporary redirect
      },
    ]
  },
}


export default config
