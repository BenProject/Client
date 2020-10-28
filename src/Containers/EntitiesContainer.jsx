import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEntitiesByParams } from '../Services/Entities/entities.service';

export default function ResultsContainer() {
  const [entities, setEntities] = useState([]);
  const { pageNumber } = useParams();
  const params = useSelector((state) =>
    state.getIn(['AdvancedSearch', 'params'])
  );

  useEffect(() => {
    fetchEntitiesByParams(params, pageNumber)
      .then((res) => setEntities(res))
      .catch((err) => console.log(err));
  }, [pageNumber]);

  return <div>page number: {pageNumber}</div>;
}
