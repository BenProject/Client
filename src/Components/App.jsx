import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import ThemeToggler from './Themes/ThemeToggler';
import SearchContainer from '../Containers/SearchContainer';
import { Route } from 'react-router-dom';
const App = () => {
  const [theme, darkState, toggleTheme] = useTheme();
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <ThemeToggler isDarkTheme={darkState} toggleTheme={toggleTheme} />
        <SearchContainer></SearchContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;
