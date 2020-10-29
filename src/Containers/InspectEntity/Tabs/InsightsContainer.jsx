import React from 'react';
import { string } from 'prop-types';

export default function InsightsContainer({ entityId }) {
  return <div>Insights</div>;
}

InsightsContainer.propTypes = {
  entityId: string.isRequired,
};
