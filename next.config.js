module.exports = {
  future: { webpack5: true },
  async rewrites() {
    return [
      {
        source: '/play/circlewave',
        destination: '/play/circlewave/index.html',
      },
    ]
  },
}
