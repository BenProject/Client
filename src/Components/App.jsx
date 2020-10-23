import { Button, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import ThemeToggler from './Themes/ThemeToggler';

const App = () => {
  const [theme, darkState, toggleTheme] = useTheme();
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <ThemeToggler isDarkTheme={darkState} toggleTheme={toggleTheme} />
        <Button color="primary">button</Button>
      </ThemeProvider>
    </div>
  );
};

export default App;
