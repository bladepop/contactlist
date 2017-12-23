import { call, put, takeEvery } from 'redux-saga/effects';

import { LOAD_CONTACTS } from './constants';
import { loadContactsFail, loadContactsSuccess } from './actions';

const CONTACT_LIST_URL = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';

export default function* defaultSaga() {
  yield takeEvery(LOAD_CONTACTS, loadContactsSaga);
}

function ContactsException(message) {
  this.message = message;
  this.name = 'ContactsException';
}

function* loadContactsSaga() {
  try {
    const response = yield call(fetch, CONTACT_LIST_URL, { type: 'GET', dataType: 'jsonp' });
    if (response.status !== 200) throw new ContactsException('Failed fetching contacts');
    const contacts = yield response.json();
    yield put(loadContactsSuccess(contacts));
  } catch (error) {
    yield put(loadContactsFail(new ContactsException(error.message)));
  }
}
