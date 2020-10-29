import React from 'react';
import { IconButton as StyledButton } from '@material-ui/core';
import { func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function IconButton({ icon, onClick, href, type, buttonText }) {
  if (href) {
    return (
      <Link to={href}>
        {buttonText}
        <StyledButton type={type} onClick={onClick}>
          {icon}
        </StyledButton>
      </Link>
    );
  }
  return (
    <div>
      {buttonText}
      <StyledButton type={type} onClick={onClick}>
        {icon}
      </StyledButton>
    </div>
  );
}

IconButton.propTypes = {
  icon: object.isRequired,
  type: string,
  onClick: func,
  href: string,
  buttonText: string,
};
