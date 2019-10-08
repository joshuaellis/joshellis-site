import produce from 'immer';
import { SET_PROJECT, OPEN_MODAL } from '../constants/project-constants';
import { IS_MOBILE } from '../constants/home-constants';

export const initialState = {
  project: null,
  isMobile: false,
  modalOpen: false,
  imageModalObject: null,
  carouselId: null,
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
        draft.carouselId = action.carouselId;
        break;
      case IS_MOBILE:
        draft.isMobile = action.mobile;
        break;
      default:
        break;
    }
  });

export default projectPageReducer;
