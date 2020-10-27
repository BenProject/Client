import React from 'react';
import { IconButton as StyledButton } from '@material-ui/core';
import { elementType, func, string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function IconButton({ icon, onClick, href }) {
  if (href) {
    return (
      <Link to={href}>
        <StyledButton onClick={onClick}>{icon}</StyledButton>
      </Link>
    );
  }
  return <StyledButton onClick={onClick}>{icon}</StyledButton>;
}

IconButton.propTypes = {
  icon: elementType.isRequired,
  onClick: func,
  href: string,
};
