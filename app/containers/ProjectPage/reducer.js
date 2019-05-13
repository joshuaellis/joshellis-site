/*
 *
 * ProjectPage reducer
 *
 */
import produce from 'immer';
import { SET_PROJECT } from './constants';

export const initialState = {
  project: null,
};

/* eslint-disable default-case, no-param-reassign */
const projectPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PROJECT:
        draft.project = action.project;
        break;
    }
  });

export default projectPageReducer;
