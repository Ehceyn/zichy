import React from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:1386px)');

  return <span>{`(min-width:1386px) matches: ${matches}`}</span>;
}