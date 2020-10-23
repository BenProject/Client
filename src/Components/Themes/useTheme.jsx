import { createMuiTheme } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from './themes';

export const useTheme = () => {
  const [darkState, setDarkState] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setDarkState(mode);
  };

  const ToggleTheme = () => {
    setMode(!darkState);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkState ? 'dark' : 'light',
      primary: {
        main: darkState
          ? darkTheme.mainPrimaryColor
          : lightTheme.mainPrimaryColor,
      },
      secondary: {
        main: darkState
          ? darkTheme.mainSecondaryColor
          : lightTheme.mainSecondaryColor,
      },
    },
  });

  useEffect(() => {
    const localThemeState = window.localStorage.getItem('theme') === 'true';
    localThemeState ? setDarkState(localThemeState) : setMode(false);
    setMountedComponent(true);
  }, []);

  return [theme, ToggleTheme, mountedComponent, darkState];
};
