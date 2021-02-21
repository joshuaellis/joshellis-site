const withTM = require('next-transpile-modules')(
  ['@react-three/drei', 'three'],
  { debug: false, resolveSymlinks: true }
)

module.exports = withTM((_) => ({
  async rewrites() {
    return [
      {
        source: '/play/circlewave',
        destination: '/play/circlewave/index.html',
      },
    ]
  },
}))
