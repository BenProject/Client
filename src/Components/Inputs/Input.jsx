import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { bool, string, func } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}));

export default function Input({ type, label, must, onChange, name }) {
  const classes = useStyles();
  if (type == 'date')
    return (
      <TextField
        name={name}
        onChange={onChange}
        className={classes.root}
        type={type}
        required={must}
        label={label}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        InputProps={{ className: classes.root }}
      ></TextField>
    );
  return (
    <TextField
      name={name}
      onChange={onChange}
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
  onChange: func,
  name: string,
};
