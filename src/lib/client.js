const sanityClient = require('@sanity/client')

export default sanityClient({
  projectId: 'wq71xk1b',
  dataset: 'prod',
  useCdn: true
})
