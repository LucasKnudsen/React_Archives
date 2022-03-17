module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['condominium111734-dev.s3.us-east-1.amazonaws.com'],
  },
  // FOR FS
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
}
