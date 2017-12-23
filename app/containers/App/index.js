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
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AppBar from 'components/AppBar/Loadable';
import SearchBar from 'components/SearchBar/Loadable';

import { APP_TITLE } from './constants';

const AppContainer = styled.div`
  background: ${(props) => props.theme.background};
  min-height: calc(100VH);
`;

export default function App() {
  return (
    <AppContainer>
      <AppBar titleElement={APP_TITLE} rightElement={<SearchBar />} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppContainer>
  );
}
