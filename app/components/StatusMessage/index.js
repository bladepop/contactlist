/**
*
* StatusMessage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  text-align: center;
`;

class StatusMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MessageWrapper>
        <h1>{this.props.message}</h1>
      </MessageWrapper>
    );
  }
}

StatusMessage.propTypes = {
  message: PropTypes.node.isRequired,
};

export default StatusMessage;
