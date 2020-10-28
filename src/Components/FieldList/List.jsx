import React from 'react';
import { array, bool, object } from 'prop-types';
import { v4 as uuid } from 'uuid';
import Input from '../Inputs/Input';

export default function FieldList({ fields, textToInputTypeDictionary, must }) {
  return (
    <div>
      {fields.map((field) => {
        return (
          <Input
            must={must}
            type={textToInputTypeDictionary[Object.values(field)[0]]}
            label={Object.keys(field)[0]}
            key={uuid()}
          ></Input>
        );
      })}
    </div>
  );
}

FieldList.propTypes = {
  fields: array.isRequired,
  textToInputTypeDictionary: object.isRequired,
  must: bool,
};
