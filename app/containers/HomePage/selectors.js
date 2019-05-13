import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

const selectProjectDomain = state => state.projectPage;

/**
 * Other specific selectors
 */

const makeSelectProjectPage = () =>
  createSelector(
    selectProjectDomain,
    substate => substate,
  );

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export { selectHomePageDomain, makeSelectProjectPage };
