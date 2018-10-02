import { fromJS } from 'immutable';
import workReducer from '../reducer';

describe('workReducer', () => {
  it('returns the initial state', () => {
    expect(workReducer(undefined, {})).toEqual(fromJS({}));
  });
});
