import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import SearchContainer from '../Containers/SearchContainer';
import TopBarContainer from '../Containers/TopBarContainer';
import PageContainer from '../Containers/PageContainer';
import IconButton from './Buttons/IconButton';

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <PageContainer>
          <div>
            <TopBarContainer toggleTheme={toggleTheme}></TopBarContainer>
          </div>
          <div>
            <SearchContainer></SearchContainer>
          </div>
        </PageContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;
