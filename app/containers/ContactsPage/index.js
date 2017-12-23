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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ContactsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Drivers Contact List</title>
          <meta name="description" content="The contact list of our drivers" />
        </Helmet>
      </div>
    );
  }
}

ContactsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactspage: makeSelectContactsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
