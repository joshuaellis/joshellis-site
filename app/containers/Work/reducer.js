/*
 *
 * Work reducer
 *
 */

import { fromJS } from 'immutable';

export const initialState = fromJS({
  showProject: false,
  project: 'none',
  text: 'none',
  showGallery: false,
});

function workReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PROJECT':
      return state.set('project', action.project).set('showProject', true);
    case 'UPDATE_TEXT':
      return state.set('text', action.text);
    case 'RESET_WORK':
      return state.set('showProject', false);
    case 'SET_GALLERY_BOOL':
      return state.set('showGallery', action.showGallery);
    default:
      return state;
  }
}

export default workReducer;
