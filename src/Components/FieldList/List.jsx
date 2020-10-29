import React from 'react';
import { array, bool } from 'prop-types';
import { v4 as uuid } from 'uuid';
import Input from '../Inputs/Input';
import './list.css';

export default function FieldList({ fields, must }) {
  if (!fields) return <div></div>;
  return (
    <div className="field-list">
      {fields.map((field) => {
        return (
          <span className="field-list--item" key={uuid()}>
            <Input
              key={uuid()}
              onChange={field.onChange}
              name={field.name}
              must={must}
              type={field.type}
              label={field.label}
            ></Input>
          </span>
        );
      })}
    </div>
  );
}

FieldList.propTypes = {
  fields: array.isRequired,
  must: bool,
};
