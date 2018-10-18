import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the experiments state domain
 */

const selectExperimentsDomain = state => state.get("experiments", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Experiments
 */

const makeSelectExperiments = () =>
  createSelector(selectExperimentsDomain, substate => substate.toJS());

export default makeSelectExperiments;
export { selectExperimentsDomain };
