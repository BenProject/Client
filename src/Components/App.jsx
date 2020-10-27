import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import SearchContainer from '../Containers/SearchContainer';
import TopBarContainer from '../Containers/TopBarContainer';
import { Route } from 'react-router-dom';
import Page from './Page';
import AdvancedSearchContainer from '../Containers/AdvancedSearchContainer';

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <Page>
          <TopBarContainer toggleTheme={toggleTheme}></TopBarContainer>
          <Route exact path="/">
            <SearchContainer />
          </Route>
          <Route exact path="/advanced-search">
            <AdvancedSearchContainer />
          </Route>
        </Page>
      </ThemeProvider>
    </div>
  );
};

export default App;
