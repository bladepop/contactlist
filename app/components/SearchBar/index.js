/**
*
* SearchBar
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SearchBarInput = styled.input`
  background: white;
  border-radius: 30px;
  padding: 8px 10px;
  width: 200px;
  min-width: 100px;
  font-size: 0.75em;
  
  ::placeholder {
    color:  ${(props) => props.theme.placeholderColor};
  }
`;

class SearchBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FormattedMessage {...messages.placeholder}>
        { (placeholder) => (<SearchBarInput type="text" placeholder={placeholder} />) }
      </FormattedMessage>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
