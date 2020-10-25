import SearchBox from '../Components/Search/SearchBox';
import Button from '../Components/Buttons/Button';
import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function SearchContainer() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <SearchBox></SearchBox>
      <Button buttonText="חפש!"></Button>
      <Button buttonText="חיפוש מתקדם"></Button>
    </Card>
  );
}
