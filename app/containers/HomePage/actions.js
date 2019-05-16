/*
 *
 * HomePage actions
 *
 */

import { IS_MOBILE } from './constants';

export function IS_MOBILE_ACTION(bool) {
  return {
    type: IS_MOBILE,
    mobile: bool,
  };
}
