module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack, typescript },
  ) => {
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  },
  reactStrictMode: true,
}
