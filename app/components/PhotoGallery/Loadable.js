/**
 *
 * Asynchronously loads the component for PhotoGallery
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
