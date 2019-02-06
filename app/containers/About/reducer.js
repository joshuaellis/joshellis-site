/*
 *
 * About reducer
 *
 */

import { fromJS } from 'immutable';

export const initialState = fromJS({windowShowing:true});

function aboutReducer(state = initialState, action) {
  switch (action.type) {
  case 'CLOSE_WINDOW':
    return fromJS({...state, windowShowing:false});
  case 'OPEN_WINDOW':
    return fromJS({...state, windowShowing:true});
  default:
    return state;
  }
}

export default aboutReducer;
