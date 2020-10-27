import React from 'react';
import {
  Select as StyledSelect,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from '@material-ui/core';
import { array, func, object, string } from 'prop-types';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '8rem',
    minHeight: '8rem',
  },
  root: {
    '&:after': {
      borderBottomColor: theme.palette.secondary.main, // Solid underline on focus
    },
  },
}));

export default function Select({
  options,
  value,
  label,
  onChange,
  keysDictionary,
}) {
  const classes = useStyles();

  if (!options) {
    return <div></div>;
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <StyledSelect className={classes.root} value={value} onChange={onChange}>
        {options.map((option) => {
          return (
            <MenuItem
              value={option[keysDictionary['key']].toString()}
              key={uuid()}
            >
              {option[keysDictionary['value']]}
            </MenuItem>
          );
        })}
      </StyledSelect>
    </FormControl>
  );
}

Select.propTypes = {
  options: array.isRequired,
  value: string.isRequired,
  label: string,
  onChange: func,
  keysDictionary: object.isRequired,
};
