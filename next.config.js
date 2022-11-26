const runtimeCaching = require('next-pwa/cache')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const sign = require('./scripts/sign').default


const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  runtimeCaching,
  skipWaiting: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  fallbacks: {
    image: sign({
      uri: '/lovemanifest/media/fallback.png',
      s3Url: process.env.S3_URL,
      key: process.env.IMGPROXY_KEY,
      salt: process.env.IMGPROXY_SALT
    })
  },
})

const plugins = []
if (process.env.ANALYZE === 'true') {
  // only load dependency if env `ANALYZE` was set
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })

  plugins.push(withBundleAnalyzer)
}

plugins.push(withPWA)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
    exclude: ['error'],
  },
  swcMinify: process.env.NODE_ENV !== 'development',
  images: {
    domains: ['localhost', 'imgcdn.balkon.dev'],
    // https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
    // https://nextjs.org/docs/messages/export-image-api
    // TODO move to https://imgix.com/ ?
    unoptimized: true
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
    )
    return config
  }
}

module.exports = () => plugins.reduce((acc, next) =>
  next(acc),
  { ...nextConfig }
)
