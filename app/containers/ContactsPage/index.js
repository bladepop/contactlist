/**
 *
 * ContactsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ContactList from 'components/ContactList/Loadable';
import StatusMessage from 'components/StatusMessage/Loadable';

import makeSelectContactsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loadContacts } from './actions';
import messages from './messages';


export class ContactsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadContacts();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Drivers Contact List</title>
          <meta name="description" content="The contact list of our drivers" />
        </Helmet>
        {(() => {
          if (this.props.contactsPage.isLoading) {
            return <StatusMessage message={<FormattedMessage {...messages.loading} />} />;
          } else if (this.props.contactsPage.isError) {
            return <StatusMessage message={<FormattedMessage {...messages.error} />} />;
          }
          return <ContactList contacts={this.props.contactsPage.contacts} />;
        })()}
      </div>
    );
  }
}

ContactsPage.propTypes = {
  loadContacts: PropTypes.func.isRequired,
  contactsPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  contactsPage: makeSelectContactsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: () => dispatch(loadContacts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'contactsPage', reducer });
const withSaga = injectSaga({ key: 'contactsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactsPage);
