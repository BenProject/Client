import React from 'react';
import { Input as StyledInput, TextField } from '@material-ui/core';
import { string } from 'prop-types';

export default function Input({ type, label }) {
  return <StyledInput type={type} placeholder={label}></StyledInput>;
}

Input.propTypes = {
  type: string.isRequired,
  label: string,
};
