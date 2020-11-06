import React from 'react';
import { Pagination as StyledPagination } from '@material-ui/lab';
import { number, func } from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pagination: {
    direction: 'ltr',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),

    '& .MuiPagination-ul': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

export default function Pagination({ pagesNumber, onChange }) {
  const classes = useStyles();
  return (
    <StyledPagination
      className={classes.pagination}
      count={pagesNumber}
      onChange={onChange}
    ></StyledPagination>
  );
}

Pagination.propTypes = {
  pagesNumber: number.isRequired,
  onChange: func,
};
