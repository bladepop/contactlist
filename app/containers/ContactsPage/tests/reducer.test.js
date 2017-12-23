
import { fromJS } from 'immutable';
import contactsPageReducer from '../reducer';

describe('contactsPageReducer', () => {
  it('returns the initial state', () => {
    expect(contactsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
