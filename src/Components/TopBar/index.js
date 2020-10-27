import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { array } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: 'sticky',
    right: 'auto',
    top: 0,
  },
  toolbar: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function TopBar({ elements }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
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
