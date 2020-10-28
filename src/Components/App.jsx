import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import SearchContainer from '../Containers/SearchContainer';
import TopBarContainer from '../Containers/TopBarContainer';
import { Route } from 'react-router-dom';
import Page from './Page/Page';
import AdvancedSearchContainer from '../Containers/AdvancedSearch/AdvancedSearchContainer';

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <Page>
          <div className="grid-container">
            <div className="grid-container__header">
              <TopBarContainer toggleTheme={toggleTheme}></TopBarContainer>
            </div>
            <div className="grid-container__body">
              <Route exact path="/">
                <SearchContainer />
              </Route>
              <Route exact path="/advanced-search">
                <AdvancedSearchContainer />
              </Route>
              <Route path="/results/page/:pageNumber">
                <div></div>
              </Route>
            </div>
          </div>
        </Page>
      </ThemeProvider>
    </div>
  );
};

export default App;
