import React from 'react';
import { lightTheme, darkTheme } from './Themes/themes.js';
import { ThemeProvider } from 'styled-components';
import { useToggleTheme } from './Themes/ToggleComponents/ToggleTheme';
import Toggeler from './Themes/ToggleComponents/Toggeler.jsx';
import { GlobalStyles } from './Themes/GlobalStyles.js';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useToggleTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) {
    return <div></div>;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="app">
        <Toggeler theme={theme} toggleTheme={themeToggler}></Toggeler>
      </div>
    </ThemeProvider>
  );
};

export default App;
