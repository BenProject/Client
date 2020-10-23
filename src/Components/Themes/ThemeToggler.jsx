import React from 'react';
import { Switch } from '@material-ui/core';
import { bool, func } from 'prop-types';

export default function Toggler({ isDarkTheme, toggleTheme }) {
  return <Switch checked={isDarkTheme} onChange={toggleTheme}></Switch>;
}

Toggler.propTypes = {
  isDarkTheme: bool.isRequired,
  toggleTheme: func.isRequired,
};
