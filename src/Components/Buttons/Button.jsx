import { Button as StyledButton } from '@material-ui/core';
import React from 'react';
import { string, func } from 'prop-types';

export default function Button({ buttonText, onClick }) {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
}

Button.propTypes = {
  buttonText: string.isRequired,
  onClick: func,
};
