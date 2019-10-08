/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import HomeReducer from './reducers/home-reducer';
import ProjectReducer from './reducers/project-reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    home: HomeReducer,
    project: ProjectReducer,
  });

  return rootReducer;
}
