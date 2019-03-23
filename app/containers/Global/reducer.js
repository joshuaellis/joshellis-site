/*
 *
 * Global reducer
 *
 */

import { fromJS } from 'immutable';

export const initialState = fromJS({ modalID: '', showModal: false });

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return fromJS({ ...state, showModal: false, modalID: action.modalID });
    case 'OPEN_MODAL':
      return fromJS({ ...state, showModal: true, modalID: action.modalID });
    default:
      return state;
  }
}

export default appReducer;
