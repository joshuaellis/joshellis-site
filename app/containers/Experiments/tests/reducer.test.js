import { fromJS } from 'immutable';
import experimentsReducer from '../reducer';

describe('experimentsReducer', () => {
  it('returns the initial state', () => {
    expect(experimentsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
