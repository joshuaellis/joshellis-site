/*
 *
 * Work reducer
 *
 */

import { fromJS } from 'immutable';

export const initialState = fromJS({
    showProject:false,
    project:'none',
    text:'none',
  });

function workReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PROJECT':
      return fromJS({...state,  showProject:action.showProject, project:action.project});
    case 'UPDATE_TEXT':
      return fromJS({...state, text:action.text});
    case 'RESET_WORK':
      return fromJS({...state, showProject:false})
    default:
      return state;
  }
}

export default workReducer;
