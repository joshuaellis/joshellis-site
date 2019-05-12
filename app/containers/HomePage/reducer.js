/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
// import { SET_PROJECT } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default homePageReducer;
