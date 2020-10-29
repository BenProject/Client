import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EntityList from '../Components/Entity/EntityList';
import { fetchEntitiesByParams } from '../Services/Entities/entities.service';

export default function ResultsContainer() {
  const [entities, setEntities] = useState([]);
  const { pageNumber } = useParams();
  const history = useHistory();

  const params = useSelector((state) =>
    state.getIn(['AdvancedSearch', 'params'])
  );

  useEffect(() => {
    fetchEntitiesByParams(params, pageNumber)
      .then((entities) => {
        entities.forEach((entity) => {
          entity.onClick = () => {
            history.push(`/entity/${entity.id}`);
          };
          entity.relations.forEach((relation) => {
            relation.onClick = () => history.push(`/entity/${relation.id}`);
          });
        });
        setEntities(entities);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  return (
    <div>
      <EntityList entities={entities}></EntityList>
    </div>
  );
}
