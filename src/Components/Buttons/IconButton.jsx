import React from 'react';
import { IconButton as StyledButton } from '@material-ui/core';
import { elementType, func } from 'prop-types';

export default function IconButton({ icon, onClick }) {
  return <StyledButton onClick={onClick}>{icon}</StyledButton>;
}

IconButton.propTypes = {
  icon: elementType.isRequired,
  onClick: func,
};
