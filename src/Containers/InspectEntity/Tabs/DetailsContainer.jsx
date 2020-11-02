import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchEntityDetailsById } from '../../../Services/Entities/entities.service';

export default function DetailsContainer({ entityId }) {
  const [details, setDetails] = useState({ properties: [], relations: [] });

  useEffect(() => {
    fetchEntityDetailsById(entityId)
      .then((details) =>
        setDetails({
          properties: details.properties,
          relations: details.realtions,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, [entityId]);
  return <div>{details}</div>;
}

DetailsContainer.propTypes = {
  entityId: string.isRequired,
};
