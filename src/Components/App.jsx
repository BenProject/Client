import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import SearchContainer from '../Containers/SearchContainer';
import TopBarContainer from '../Containers/TopBarContainer';
import PageContainer from '../Containers/PageContainer';
import { Route } from 'react-router-dom';

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <PageContainer>
          <TopBarContainer toggleTheme={toggleTheme}></TopBarContainer>
          <Route exact path="/">
            <SearchContainer></SearchContainer>
          </Route>
        </PageContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;
