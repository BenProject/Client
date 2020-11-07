import React from 'react';
import { createEntityLabel } from '../Constants/labelConstants';
import OntologyContainer from './Ontology/OntologyContainer';

export default function CreateEntityContainer() {
  return (
    <OntologyContainer
      formButtonLabel={createEntityLabel}
      title={'יצירת ישות'}
    ></OntologyContainer>
  );
}

CreateEntityContainer.propTypes = {};
