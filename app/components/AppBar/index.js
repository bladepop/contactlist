/**
*
* AppBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../mediaTemplates';

import AppBarTitle from './AppBarTitle';


const AppBarWrapper = styled.div`
  background: ${(props) => props.theme.main};
  margin: 0;
  height: 64px;
  line-height: 48px;
  padding: 0 40px 0 86px;
  display: flex;
  align-items: center;
  
  ${media.tablet`padding: 0 20px;`}

  
`;

const AppBarLeft = styled.div`
  flex-grow: 1; 
`;

const AppBarRight = styled.div`
  ${media.phone`display: none;`}
`;


class AppBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBarWrapper>
        <AppBarLeft>
          {this.props.leftElement && this.props.leftElement}
          {this.props.titleElement && <AppBarTitle> {this.props.titleElement} </AppBarTitle>}
        </AppBarLeft>
        { this.props.children }
        <AppBarRight>
          {this.props.rightElement && this.props.rightElement}
        </AppBarRight>
      </AppBarWrapper>
    );
  }
}

AppBar.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  leftElement: PropTypes.node,
  rightElement: PropTypes.node,
  titleElement: PropTypes.node,
};

AppBar.defaultProps = {
  theme: {
    main: 'cyan',
  },
};

export default AppBar;
