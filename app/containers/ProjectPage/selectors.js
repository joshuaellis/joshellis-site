import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the projectPage state domain
 */

const selectProjectPageDomain = state => state.projectPage || initialState;

/**
 * Other specific selectors
 */

const selectHomePageDomain = state => state.homePage;

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

/**
 * Default selector used by ProjectPage
 */

const makeSelectProjectPage = () =>
  createSelector(
    selectProjectPageDomain,
    substate => substate,
  );

export default makeSelectProjectPage;
export { selectProjectPageDomain, makeSelectHomePage };
