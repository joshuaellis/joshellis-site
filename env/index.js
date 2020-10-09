import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const ENV = publicRuntimeConfig.ENV
const SITE_DOMAIN = publicRuntimeConfig.ENV_SITE_DOMAIN
const PATH_STATIC = publicRuntimeConfig.ENV_PATH_STATIC
const GTM_CONTAINER_ID = publicRuntimeConfig.ENV_GTM_CONTAINER_ID
const ALLY_ENABLED = publicRuntimeConfig.ENV_ALLY

export { ENV, ALLY_ENABLED, SITE_DOMAIN, PATH_STATIC, GTM_CONTAINER_ID }
