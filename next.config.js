const withTM = require('next-transpile-modules')(
  ['@react-three/drei', 'three'],
  { debug: false, resolveSymlinks: true }
)

const NODE_ENV_CUSTOM = process.env.NODE_ENV_CUSTOM
const NODE_ENV_ALLY = process.env.NODE_ENV_ALLY || false

let publicRuntimeConfig

switch (NODE_ENV_CUSTOM) {
  case 'production':
    publicRuntimeConfig = {
      ENV: NODE_ENV_CUSTOM,
      ENV_SITE_DOMAIN: 'https://www.joshellis.co.uk',
      ENV_GTM_CONTAINER_ID: 'GTM-KBT9ZLS',
      ENV_ALLY: NODE_ENV_ALLY
    }
    break

  case 'staging':
    publicRuntimeConfig = {
      ENV: NODE_ENV_CUSTOM,
      ENV_SITE_DOMAIN: 'https://josh-ellis-staging.herokuapp.com',
      ENV_GTM_CONTAINER_ID: '',
      ENV_ALLY: NODE_ENV_ALLY
    }
    break

  default:
  case 'dev':
    publicRuntimeConfig = {
      ENV: NODE_ENV_CUSTOM,
      ENV_SITE_DOMAIN: 'http://localhost:3000',
      ENV_GTM_CONTAINER_ID: '',
      ENV_ALLY: NODE_ENV_ALLY
    }
    break
}

module.exports = withTM(_ => ({
  publicRuntimeConfig: publicRuntimeConfig,
  async rewrites () {
    return [
      {
        source: '/play/circlewave',
        destination: '/play/circlewave/index.html'
      }
    ]
  }
}))
