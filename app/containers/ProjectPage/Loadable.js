/**
 *
 * Asynchronously loads the component for Project
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
