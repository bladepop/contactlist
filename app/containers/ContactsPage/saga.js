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
    /*
      Response comes in the form of an an array of drivers:
      [{
        "name":"Juan Barrie",
        "driverType":"Professional",
        "driverRank":"5",
        "phone":"123.456.7893",
        "email":"driver.juan@gmail.com",
        "profile_image":"http://images.unsplash.com/photo-1504575070132-986227df99f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7ecf0d8a55890fdb50eba8d4def9645d"
      }, ...]
    */
    const response = yield call(fetch, CONTACT_LIST_URL, { type: 'GET', dataType: 'jsonp' });
    if (response.status !== 200) throw new ContactsException('Failed fetching contacts');
    const contacts = yield response.json();
    yield put(loadContactsSuccess(contacts));
  } catch (error) {
    yield put(loadContactsFail(new ContactsException(error.message)));
  }
}
