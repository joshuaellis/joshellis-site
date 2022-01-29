/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/play/circlewave',
        destination: '/play/circlewave/index.html',
      },
    ]
  },
  experimental: {
    styledComponents: true,
  },
}
