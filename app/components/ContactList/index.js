/**
*
* ContactList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactCard from 'components/ContactCard/Loadable';

const ContactListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  
  
`;

const ItemWrapper = styled.div`
  display: block;
  margin: 5px;
`;

class ContactList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContactListWrapper>
        { this.props.contacts.map((contact, i) =>
// eslint-disable-next-line react/no-array-index-key
          (<ItemWrapper key={i}>
            <ContactCard contact={contact} />
          </ItemWrapper>))}
      </ContactListWrapper>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
