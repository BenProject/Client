import React from 'react';
import { func } from 'prop-types';
import TopBar from '../Components/TopBar';
import { Add, Home } from '@material-ui/icons';
import IconButton from '../Components/Buttons/IconButton';
import ThemeToggeler from '../Components/Themes/ThemeToggler';
import { useSelector } from 'react-redux';

export default function TopBarContainer({ toggleTheme }) {
  const darkState = useSelector((state) =>
    state.getIn(['Themes', 'isDarkTheme'])
  );

  return (
    <TopBar
      elements={[
        <IconButton href="/" icon={<Home />} key="2"></IconButton>,
        <IconButton icon={<Add />} key="1"></IconButton>,
        <img
          alt="mini-kick"
          id="kick-logo"
          key="3"
          src="kick_without_colors.svg"
        ></img>,
        <ThemeToggeler
          isDarkTheme={darkState}
          toggleTheme={toggleTheme}
          key="4"
        ></ThemeToggeler>,
      ]}
    ></TopBar>
  );
}

TopBarContainer.propTypes = {
  toggleTheme: func.isRequired,
};
