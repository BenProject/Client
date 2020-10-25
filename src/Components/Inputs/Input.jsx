import React from 'react';
import { Input as StyledInput, makeStyles } from '@material-ui/core';
import { string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:after': {
      borderBottomColor: theme.palette.secondary.main, // Solid underline on focus
    },
  },
}));

export default function Input({ type, label }) {
  const classes = useStyles();
  return (
    <StyledInput
      className={classes.root}
      type={type}
      placeholder={label}
    ></StyledInput>
  );
}

Input.propTypes = {
  type: string.isRequired,
  label: string,
};
