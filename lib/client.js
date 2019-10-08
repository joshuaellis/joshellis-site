const sanityClient = require('@sanity/client');

export default sanityClient({
  projectId: '',
  dataset: '',
  useCdn: true,
});
