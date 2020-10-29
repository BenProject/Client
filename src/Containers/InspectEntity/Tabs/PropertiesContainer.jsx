import React from 'react';
import { string } from 'prop-types';

export default function PropertiesContainer({ entityId }) {
  return <div>properties </div>;
}
PropertiesContainer.propTypes = {
  entityId: string.isRequired,
};