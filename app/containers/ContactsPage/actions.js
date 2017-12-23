/*
 *
 * ContactsPage actions
 *
 */

import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_FAIL,
} from './constants';

export function loadContacts() {
  return {
    type: LOAD_CONTACTS,
  };
}

export function loadContactsSuccess(contacts) {
  return {
    type: LOAD_CONTACTS_SUCCESS,
    payload: contacts,
  };
}

export function loadContactsFail(error) {
  return {
    type: LOAD_CONTACTS_FAIL,
    error,
  };
}
