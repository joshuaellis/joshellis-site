/*
 *
 * About actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function closeWindow(){
  return {
    type: 'CLOSE_WINDOW',
    id:0,
    windowShowing:false,
  }
}
