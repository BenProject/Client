import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchEntityPropertiesById } from '../../../Services/Entities/entities.service';

export default function PropertiesContainer({ entityId }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchEntityPropertiesById(entityId)
      .then((details) => setDetails(details))
      .catch((err) => {
        console.log(err);
      });
  }, [entityId]);
  return <div>properties</div>;
}

PropertiesContainer.propTypes = {
  entityId: string.isRequired,
};
