/**
*
* SearchBar
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import SearchIcon from './search-icon.png';

const SearchBarInput = styled.input`
  border-radius: 30px;
  padding: 7px 20px;
  width: 372px;
  max-width: calc(50VW);
  font-size: 0.9em;
  transition: all 0.2s linear;
  
  background: white url(${SearchIcon}) no-repeat right 10px top 5px/20px 20px;
  
  &:focus {
    width: 400px;
    max-width: calc(55VW);
  }
  
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
