import { Button as StyledButton } from '@material-ui/core';
import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ buttonText, onClick, href }) {
  if (href)
    return (
      <Link className="no-text-decoration" to={href}>
        <StyledButton onClick={onClick}>{buttonText}</StyledButton>
      </Link>
    );
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
}

Button.propTypes = {
  href: string,
  buttonText: string.isRequired,
  onClick: func,
};
