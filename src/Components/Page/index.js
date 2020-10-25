import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export default function Page(props) {
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
}
