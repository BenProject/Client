import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { array, func, string } from 'prop-types';
import { getKeyAndValOfObject } from '../../Utils/ObjectUtils';
import { v4 as uuid } from 'uuid';
import Button from '../Buttons/Button';
import { entityRelationsLabel } from '../../Constants/labelConstants';
import IconButton from '../Buttons/IconButton';
import { Search } from '@material-ui/icons';
import config from '../../Config';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '20%',
    minHeight: '40%',
  },
}));

export default function Entity({ onClick, entityType, properties, relations }) {
  const classes = useStyles();
  const [isRaised, setRaised] = useState(false);

  if (!properties) return <div />;
  return (
    <Card
      //   key={uuid()}
      raised={isRaised}
      onMouseEnter={() => setRaised(!isRaised)}
      onMouseLeave={() => setRaised(!isRaised)}
      className={classes.root}
    >
      {/* <CardActionArea onClick={onClick}> */}
      <CardHeader
        action={<IconButton icon={<Search />} onClick={onClick} />}
        title={entityType}
      ></CardHeader>
      <CardContent>
        {properties
          .slice(0, config.numberOfFieldsToSHow + 1)
          .map((prop, index) => {
            if (index >= config.numberOfFieldsToSHow) {
              return <div>...</div>;
            }

            let [key, value] = getKeyAndValOfObject(prop);
            return (
              <div key={uuid()}>
                {key}: {value}
              </div>
            );
          })}
      </CardContent>
      {/* </CardActionArea> */}
      <div>
        <CardContent>
          {entityRelationsLabel}
          {relations.map((relation) => {
            return (
              <div key={uuid()}>
                <Button
                  onClick={relation.onClick}
                  buttonText={`${relation.type}: ${relation.relationType}`}
                ></Button>
              </div>
            );
          })}
        </CardContent>
      </div>
    </Card>
  );
}

Entity.propTypes = {
  entityType: string,
  properties: array,
  relations: array,
  onClick: func,
};
