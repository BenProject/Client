import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { array, func, string } from 'prop-types';
import { getKeyAndValOfObject } from '../../Utils/ObjectUtils';
import { v4 as uuid } from 'uuid';
import IconButton from '../Buttons/IconButton';
import { Search } from '@material-ui/icons';
import config from '../../Config';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export default function Entity({ onClick, entityType, properties, relations }) {
  const classes = useStyles();
  const [isRaised, setRaised] = useState(false);

  if (!properties) return <div />;
  return (
    <Card
      raised={isRaised}
      onMouseEnter={() => setRaised(!isRaised)}
      onMouseLeave={() => setRaised(!isRaised)}
      className={classes.root}
    >
      <CardHeader
        action={<IconButton icon={<Search />} onClick={onClick} />}
        title={entityType}
      ></CardHeader>
      <CardContent>
        {/* <Typography variant="h6">
          <div className="text-align-center">{entityPropertiesLabel}</div>
        </Typography> */}
        <Typography>
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
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="button">
          {/* <div className="text-align-center">{entityRelationsLabel}</div> */}
          {relations
            .slice(0, config.numberOfFieldsToSHow + 1)
            .map((relation, index) => {
              if (index >= config.numberOfFieldsToSHow) {
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
};
