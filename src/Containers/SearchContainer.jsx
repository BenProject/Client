import Input from '../Components/Inputs/Input';
import Button from '../Components/Buttons/Button';
import React, { useState } from 'react';
import { Card, makeStyles } from '@material-ui/core';
import {
  advancedSearchButtonLabel,
  searchButtonLabel,
  searchInputLabel,
} from '../Constants/labelConstants';
import { v4 as uuid } from 'uuid';
import { fetchSuggestions } from '../Services/Entities/entities.service';
import config from '../Config';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90%',
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  autocomplete: {
    // gridArea: 'autocomplete',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // marginBottom: 'auto',
  },
}));

export default function SearchContainer() {
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  function onInputChange(event) {
    if (event.target.value === '') return setSuggestions([]);
    fetchSuggestions(config.maxNumberOfSuggestions, event.target.value)
      .then((res) => setSuggestions(res))
      .catch((err) => console.log(err));
  }

  return (
    <Card elevation={0} className={classes.root}>
      <div className={classes.search}>
        <div>
          <Input
            label={searchInputLabel}
            onChange={onInputChange}
            type="text"
          ></Input>
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
      </div>
      <div className={classes.autocomplete}>
        {suggestions.map((suggestion) => (
          <Button
            key={uuid()}
            onClick={() => history.push(`/entity/${suggestion.id}/properties`)}
            buttonText={suggestion.name}
          />
        ))}
      </div>
    </Card>
  );
}
