import { createSelector } from 'reselect';

/**
 * Direct selector to the contactsPage state domain
 */
const selectContactsPageDomain = (state) => state.get('contactsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ContactsPage
 */

const makeSelectContactsPage = () => createSelector(
  selectContactsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectContactsPage;
export {
  selectContactsPageDomain,
};
