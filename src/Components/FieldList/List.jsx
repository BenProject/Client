import React from 'react';
import { array, bool, object } from 'prop-types';
import { v4 as uuid } from 'uuid';
import Input from '../Inputs/Input';
import './list.css'
export default function FieldList({ fields, textToInputTypeDictionary, must }) {
  return (
    <div className="field-list">
      {fields.map((field) => {
        return (
          <span className="field-list--item" key={uuid()}>
            <Input
              must={must}
              type={textToInputTypeDictionary[Object.values(field)[0]]}
              label={Object.keys(field)[0]}
            ></Input>
          </span>
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
