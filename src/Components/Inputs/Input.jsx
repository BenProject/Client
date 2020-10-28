import React from 'react';
import { Input as StyledInput, makeStyles, TextField } from '@material-ui/core';
import { bool, string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.text.primary,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: 'blue',
      // },
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}));

export default function Input({ type, label, must }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      type={type}
      label={label}
      required={must}
      variant="outlined"
      InputProps={{ className: classes.root }}
    ></TextField>
  );
}

Input.propTypes = {
  type: string.isRequired,
  label: string,
  must: bool,
};
