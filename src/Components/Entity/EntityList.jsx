import React from 'react';
import Entity from './Entity';
import { v4 as uuid } from 'uuid';
import { array, number } from 'prop-types';
import './Entity.css';

export default function EntityList({ entities, maxFieldsToShowPerEntity }) {
  if (!entities) return <div />;

  return (
    <div className="entity-list">
      {entities.map((entity) => {
        return (
          <div key={uuid()} className={'entity-list__item'}>
            <Entity
              maxFieldsToShow={maxFieldsToShowPerEntity}
              onClick={entity.onClick}
              entityType={entity.type}
              properties={entity.properties}
              relations={entity.relations}
            ></Entity>
          </div>
        );
      })}
    </div>
  );
}
EntityList.propTypes = {
  entities: array.isRequired,
  maxFieldsToShowPerEntity: number,
};
