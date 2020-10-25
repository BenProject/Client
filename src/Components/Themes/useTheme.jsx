import { createMuiTheme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './themes';
import { toggleTheme } from '../../Redux/Actions/ThemeActions';
import { useDispatch } from 'react-redux';

export const useTheme = () => {
  const darkState = useSelector((state) =>
    state.getIn(['Themes', 'isDarkTheme'])
  );

  const dispatch = useDispatch();

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
      text: {
        primary: darkState ? darkTheme.textColor : lightTheme.textColor,
      },
    },
  });

  return [theme, () => dispatch(toggleTheme())];
};
