import React from 'react';
import { Switch } from '@material-ui/core';
import { bool, func } from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Toggler({ isDarkTheme, ToggleTheme }) {
  return (
    <Switch checked={isDarkTheme} onChange={ToggleTheme} >
      <DeleteIcon></DeleteIcon>
    </Switch>
  );
}

Toggler.propTypes = {
  isDarkTheme: bool.isRequired,
  ToggleTheme: func.isRequired,
};
