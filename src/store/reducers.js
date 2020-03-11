/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import globalReducer from './reducers/globalReducer'
import projectReducer from './reducers/projectReducer'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer () {
  const rootReducer = combineReducers({
    global: globalReducer,
    project: projectReducer
  })

  return rootReducer
}
