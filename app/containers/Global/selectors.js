import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the about state domain
 */

const selectAppDomain = state => state.get('global', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by About
 */

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS());

export default makeSelectApp;
export { selectAppDomain };
