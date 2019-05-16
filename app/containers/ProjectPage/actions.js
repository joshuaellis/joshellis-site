/*
 *
 * ProjectPage actions
 *
 */

import { SET_PROJECT, OPEN_MODAL } from './constants';

export function SET_PROJECT_ACTION(projectTitle) {
  return {
    type: SET_PROJECT,
    project: projectTitle,
  };
}

export function OPEN_MODAL_ACTION(bool, object) {
  return {
    type: OPEN_MODAL,
    modalOpen: bool,
    imageObj: object,
  };
}

// export function IS_MENU_OPEN_ACTION(bool) {
//   return {
//     type: IS_MENU_OPEN,
//     openMenu: bool,
//   };
// }
