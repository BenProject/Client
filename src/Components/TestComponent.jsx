import React from 'react';
import { checkPropTypes, object } from 'prop-types';
import { useParams } from 'react-router-dom';

export default function TestComponent() {
  let params = useParams();
  console.log(params);
  return <div></div>;
}

// TestComponent.PropTypes = {
//   match: object.isRequired,
// };
