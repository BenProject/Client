import React from 'react';
import { IconButton as StyledButton, Tooltip } from '@material-ui/core';
import { func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function IconButton({
  icon,
  onClick,
  href,
  type,
  buttonText,
  tooltip = '',
}) {
  if (href) {
    return (
      <Link to={href}>
        {buttonText}
        <Tooltip title={tooltip}>
          <StyledButton type={type} onClick={onClick}>
            {icon}
          </StyledButton>
        </Tooltip>
      </Link>
    );
  }
  return (
    <div>
      {buttonText}
      <Tooltip title={tooltip}>
        <StyledButton type={type} onClick={onClick}>
          {icon}
        </StyledButton>
      </Tooltip>
    </div>
  );
}

IconButton.propTypes = {
  icon: object.isRequired,
  type: string,
  onClick: func,
  href: string,
  buttonText: string,
  tooltip: string,
};
