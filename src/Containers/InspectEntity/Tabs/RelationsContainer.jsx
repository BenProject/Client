import React from 'react';
import { string } from 'prop-types';

export default function RelationsContainer({ entityId }) {
  return <div>relations</div>;
}
RelationsContainer.propTypes = {
  entityId: string.isRequired,
};
