import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { array } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function TopBar({ elements }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        {elements.map((element) => {
          return element;
        })}
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  elements: array.isRequired,
};
