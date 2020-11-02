import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { array, func, number, string } from 'prop-types';
import { getKeyAndValOfObject } from '../../Utils/ObjectUtils';
import { v4 as uuid } from 'uuid';
import IconButton from '../Buttons/IconButton';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export default function Entity({
  onClick,
  entityType,
  properties,
  relations,
  maxFieldsToShow,
  elevation,
}) {
  const classes = useStyles();
  const [isRaised, setRaised] = useState(false);
  if (!properties) return <div />;
  return (
    <Card
      elevation={elevation}
      raised={isRaised}
      onMouseEnter={() => setRaised(!isRaised)}
      onMouseLeave={() => setRaised(!isRaised)}
      className={classes.root}
    >
      <CardHeader
        action={
          onClick ? (
            <IconButton icon={<Search />} onClick={onClick} />
          ) : (
            <div></div>
          )
        }
        title={entityType}
      ></CardHeader>
      <CardContent>
        <Typography component={'span'}>
          {maxFieldsToShow
            ? properties?.slice(0, maxFieldsToShow + 1).map((prop, index) => {
                if (index >= maxFieldsToShow) {
                  return <div>...</div>;
                }
                let [key, value] = getKeyAndValOfObject(prop);
                return (
                  <div key={uuid()}>
                    {key}: {value}
                  </div>
                );
              })
            : properties?.map((prop, index) => {
                let [key, value] = getKeyAndValOfObject(prop);
                return (
                  <div key={uuid()}>
                    {key}: {value}
                  </div>
                );
              })}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent>
        <Typography component={'span'} variant="button">
          {maxFieldsToShow
            ? relations
                ?.slice(0, maxFieldsToShow + 1)
                .map((relation, index) => {
                  if (index >= maxFieldsToShow) {
                    return <div>...</div>;
                  }
                  return (
                    <div className="relation-button" key={uuid()}>
                      <IconButton
                        onClick={relation.onClick}
                        buttonText={`${relation.type}: ${relation.relationType}`}
                        icon={<Search />}
                      ></IconButton>
                    </div>
                  );
                })
            : relations?.map((relation, index) => {
                return (
                  <div className="relation-button" key={uuid()}>
                    <IconButton
                      onClick={relation.onClick}
                      buttonText={`${relation.type}: ${relation.relationType}`}
                      icon={<Search />}
                    ></IconButton>
                  </div>
                );
              })}
        </Typography>
      </CardContent>
    </Card>
  );
}

Entity.propTypes = {
  entityType: string,
  properties: array,
  relations: array,
  onClick: func,
  maxFieldsToShow: number,
  elevation: number,
};
