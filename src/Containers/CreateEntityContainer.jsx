import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createEntityLabel } from '../Constants/labelConstants';
import { createEntity } from '../Services/Entities/entities.service';
import OntologyContainer from './Ontology/OntologyContainer';

export default function CreateEntityContainer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div style={{ height: '100%' }}>
      <OntologyContainer
        formButtonLabel={createEntityLabel}
        title={'יצירת ישות'}
        onSubmit={onSubmit}
      />
      <div style={{ display: 'none' }}>
        {isSubmitted ? <IntermediateCreating /> : <div />}
      </div>
    </div>
  );
}

function IntermediateCreating() {
  const params = useSelector((state) =>
    state.getIn(['OntologyParams', 'params'])
  );

  const history = useHistory();

  useEffect(() => {
    createEntity(params)
      .then((entityId) => history.push(`/entity/${entityId}/properties`))
      .catch((err) => console.log(err));
  }, []);

  return <span />;
}

CreateEntityContainer.propTypes = {};
