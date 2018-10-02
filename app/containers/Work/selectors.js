import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the work state domain
 */

const selectWorkDomain = state => state.get('work', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Work
 */

const makeSelectWork = () =>
  createSelector(selectWorkDomain, substate => substate.toJS());

export default makeSelectWork;
export { selectWorkDomain };
