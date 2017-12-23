/**
*
* ContactCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { CardText, CardHiddenText, CardWrapper, ProfileImage, DriverType, ContactName } from './ContactCardComponents';


class ContactCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render(props) {
    const { contact } = props;
    return (
      <CardWrapper>
        <ProfileImage src={contact.profile_image} size="144" />
        <DriverType driverType={contact.driverType} alt={contact.driverType} title={contact.driverType} />
        <ContactName title={contact.name}>{contact.name}</ContactName>
        <CardText title={contact.driverRank}><FormattedMessage {...messages.driverRank} />: {contact.driverRank}</CardText>
        <CardHiddenText title={contact.phone}><FormattedMessage {...messages.phone} />: {contact.phone}</CardHiddenText>
        <CardHiddenText title={contact.email}><FormattedMessage {...messages.email} />: {contact.email}</CardHiddenText>
      </CardWrapper>
    );
  }
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactCard;
