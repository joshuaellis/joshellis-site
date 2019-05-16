/*
 *
 * ProjectPage reducer
 *
 */
import produce from 'immer';
import { SET_PROJECT, OPEN_MODAL } from './constants';
import { IS_MOBILE } from '../HomePage/constants';

export const initialState = {
  project: null,
  isMobile: false,
  modalOpen: false,
  imageModalObject: null,
};

/* eslint-disable default-case, no-param-reassign */
const projectPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PROJECT:
        draft.project = action.project;
        break;
      case OPEN_MODAL:
        draft.modalOpen = action.modalOpen;
        draft.imageModalObject = action.imageObj;
        break;
      case IS_MOBILE:
        draft.isMobile = action.mobile;
        break;
      default:
        break;
    }
  });

export default projectPageReducer;
