import produce from 'immer';
import { IS_MOBILE } from '../constants/home-constants';

export const initialState = {
  isMobile: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case IS_MOBILE:
        draft.isMobile = action.mobile;
        break;
      default:
        break;
    }
  });

export default homePageReducer;
