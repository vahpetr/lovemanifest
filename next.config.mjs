import runtimeCaching from "next-pwa/cache.js";
import CircularDependencyPlugin from "circular-dependency-plugin";
import createPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
    exclude: ["error"],
  },
  swcMinify: process.env.NODE_ENV !== "development",
  images: {
    domains: ["localhost", "imgcdn.balkon.dev"],
    // https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
    // https://nextjs.org/docs/messages/export-image-api
    // TODO move to https://imgix.com/ ?
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
};

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
    image: "/media/fallback.png",
  },
};
const withPWA = createPWA(pwaConfig);
plugins.push(withPWA);

export default () =>
  plugins.reduce((config, plugin) => plugin(config), nextConfig);
