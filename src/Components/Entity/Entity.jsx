import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { array } from 'prop-types';
import { getKeyAndValOfObject } from '../../Utils/ObjectUtils';
import { v4 as uuid } from 'uuid';

export default function Entity({ properties, relations }) {
  return (
    <Card>
      <CardContent>
        {properties.map((prop) => {
          let [key, value] = getKeyAndValOfObject(prop);
          return (
            <div key={uuid()}>
              {key}:{value}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

Entity.propTypes = {
  properties: array,
  relations: array,
};
