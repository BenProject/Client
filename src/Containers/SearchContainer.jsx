import Input from '../Components/Inputs/Input';
import Button from '../Components/Buttons/Button';
import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import {
  advancedSearchButtonLabel,
  searchButtonLabel,
  searchInputLabel,
} from '../Constants/labelConstants';

const useStyles = makeStyles(() => ({
  root: {
    height: '90%',
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function SearchContainer() {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.root}>
      <div>
        <Input label={searchInputLabel} type="text"></Input>
      </div>
      <div>
        <Button buttonText={searchButtonLabel}></Button>
      </div>
      <div>
        <Button
          href="advanced-search"
          buttonText={advancedSearchButtonLabel}
        ></Button>
      </div>
    </Card>
  );
}
