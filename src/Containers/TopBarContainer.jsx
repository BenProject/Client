import React from 'react';
import { func } from 'prop-types';
import TopBar from '../Components/TopBar';
import { Add } from '@material-ui/icons';
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
        <IconButton icon={<Add />} key="1"></IconButton>,
        <ThemeToggeler
          darkState={darkState}
          toggleTheme={toggleTheme}
          key="2"
        ></ThemeToggeler>,
      ]}
    ></TopBar>
  );
}

TopBarContainer.propTypes = {
  toggleTheme: func.isRequired,
};
