/*
 *
 * ContactsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_FAIL,
  LOAD_CONTACTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  isError: false,
  error: null,
  contacts: [],
});

function contactsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTACTS:
      return state.set('isLoading', true).set('isError', false).set('error', null);
    case LOAD_CONTACTS_FAIL:
      return state.set('isLoading', false).set('isError', true).set('error', action.error);
    case LOAD_CONTACTS_SUCCESS:
      return state.set('isLoading', false).set('contacts', action.payload);
    default:
      return state;
  }
}

export default contactsPageReducer;
