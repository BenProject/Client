import React from 'react';
import { useParams } from 'react-router-dom';

export default function InspedEntityContainer() {
  const { entityId, inspectStatus } = useParams();
  return (
    <div>
      entity id: {entityId} {inspectStatus}
    </div>
  );
}
