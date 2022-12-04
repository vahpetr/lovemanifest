import runtimeCaching from "next-pwa/cache.js";
import CircularDependencyPlugin from "circular-dependency-plugin";
import createPWA from "next-pwa";

const imgcdn_host = process.env.IMGCDN_HOST;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
    exclude: ["error"],
  },
  swcMinify: process.env.NODE_ENV !== "development",
  images: {
    unoptimized: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      })
    );
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: [
              `ch-viewport-width=("https://${imgcdn_host}")`,
              `ch-width=("https://${imgcdn_host}")`,
              `ch-dpr=("https://${imgcdn_host}")`,
              `ch-downlink=("https://${imgcdn_host}")`,
            ].join(", "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
        ],
      },
    ];
  },
};

// TODO add csp https://nextjs.org/docs/advanced-features/security-headers

const plugins = [];

// only load dependency if env `ANALYZE` was set
if (process.env.ANALYZE === "true") {
  const analyzerConfig = {
    enabled: true,
  };
  const withBundleAnalyzer = require("@next/bundle-analyzer")(analyzerConfig);
  plugins.push(withBundleAnalyzer);
}

const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  runtimeCaching,
  skipWaiting: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  fallbacks: {
    image: "/media/fallback.png?v=6",
  },
};
const withPWA = createPWA(pwaConfig);
plugins.push(withPWA);

export default () =>
  plugins.reduce((config, plugin) => plugin(config), nextConfig);
