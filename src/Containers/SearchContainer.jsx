import Input from '../Components/Inputs/Input';
import Button from '../Components/Buttons/Button';
import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import {
  advancedSearchButtonLabel,
  searchButtonLabel,
  searchInputLabel,
} from '../Constants/labelConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function SearchContainer() {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.root}>
      <Input label={searchInputLabel} type="text"></Input>
      <Button buttonText={searchButtonLabel}></Button>
      <Button
        href="advanced-search"
        buttonText={advancedSearchButtonLabel}
      ></Button>
    </Card>
  );
}
