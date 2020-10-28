import React from 'react';
import { array, bool, func, object } from 'prop-types';
import { v4 as uuid } from 'uuid';
import Input from '../Inputs/Input';
import './list.css';

export default function FieldList({
  fields,
  textToInputTypeDictionary,
  must,
  onChange,
}) {
  return (
    <div className="field-list">
      {fields.map((field) => {
        let fieldName = Object.keys(field)[0];
        return (
          <span className="field-list--item" key={uuid()}>
            <Input
              onChange={onChange}
              name={fieldName}
              must={must}
              type={textToInputTypeDictionary[Object.values(field)[0]]}
              label={fieldName}
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
  onChange: func,
};
