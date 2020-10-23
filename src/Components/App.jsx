import { Button, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useTheme } from './Themes/useTheme';
import ThemeToggler from './Themes/ThemeToggler';

const App = () => {
  const [theme, ToggleTheme, mountedComponent, darkState] = useTheme();

  if (!mountedComponent) {
    return <div></div>;
  }
  console.log(theme.palette.type);
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <ThemeToggler isDarkTheme={darkState} ToggleTheme={ToggleTheme} />
        <Button color="primary">button</Button>
      </ThemeProvider>
    </div>
  );
};

export default App;
