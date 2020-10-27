import React from 'react';
import { array } from 'prop-types';
import uuid from 'uuid';
export default function FieldList({ fields }) {
  return (
    <div>
      {fields.map((field) => {
        return <div key={uuid.v4()}>{field}</div>;
      })}
    </div>
  );
}

FieldList.propTypes = {
  fields: array.isRsequired,
};
