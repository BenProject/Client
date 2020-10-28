import React from 'react';
import { IconButton as StyledButton } from '@material-ui/core';
import { func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function IconButton({ icon, onClick, href, type }) {
  if (href) {
    return (
      <Link to={href}>
        <StyledButton type={type} onClick={onClick}>
          {icon}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton type={type} onClick={onClick}>
      {icon}
    </StyledButton>
  );
}

IconButton.propTypes = {
  icon: object.isRequired,
  type: string,
  onClick: func,
  href: string,
};
