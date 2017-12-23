/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';

import ContactsPage from 'containers/ContactsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AppBar from 'components/AppBar/Loadable';
import SearchBar from 'components/SearchBar/Loadable';

import media from '../../mediaTemplates';
import messages from './messages';

const AppContainer = styled.div`
  background: ${(props) => props.theme.background};
  min-height: calc(100VH);
`;

const MainContainer = styled.main`
  padding: 76px 0;
  ${media.tablet`padding: 40px 0;`}
  
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function App() {
  return (
    <AppContainer>
      <AppBar titleElement={<TitleLink to="/"><FormattedMessage {...messages.title} /></TitleLink>} rightElement={<SearchBar />} />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={ContactsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainContainer>
    </AppContainer>
  );
}
