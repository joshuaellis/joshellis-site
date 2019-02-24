import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the about state domain
 */

const selectAboutDomain = state => state.get('about', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by About
 */

const makeSelectAbout = () =>
  createSelector(selectAboutDomain, substate => substate.toJS());

export default makeSelectAbout;
export { selectAboutDomain };
