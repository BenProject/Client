import { Button as StyledButton } from '@material-ui/core';
import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ buttonText, onClick, href, type }) {
  if (href)
    return (
      <Link className="no-text-decoration" to={href}>
        <StyledButton type={type} onClick={onClick}>
          {buttonText}
        </StyledButton>
      </Link>
    );
  return (
    <StyledButton type={type} onClick={onClick}>
      {buttonText}
    </StyledButton>
  );
}

Button.propTypes = {
  href: string,
  type: string,
  buttonText: string.isRequired,
  onClick: func,
};
