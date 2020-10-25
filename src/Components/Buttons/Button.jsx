import { Button as StyledButton } from '@material-ui/core';
import React from 'react';
import { string, func } from 'prop-types';
import { Link } from '@material-ui/core';

export default function Button({ buttonText, onClick, href }) {
  if (href)
    return (
      <Link underline="none" href={href}>
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
