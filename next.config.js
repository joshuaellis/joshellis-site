/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ['tsx', 'ts', 'mdx'],
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
  },
}
