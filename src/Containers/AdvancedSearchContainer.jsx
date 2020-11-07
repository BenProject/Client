import React from 'react';
import { searchButtonLabel } from '../Constants/labelConstants';
import { useHistory } from 'react-router-dom';
import OntologyContainer from './Ontology/OntologyContainer';

export default function AdvancedSearchContainer() {
  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();
    history.push('/entities/results');
  }

  return (
    <OntologyContainer
      formButtonLabel={searchButtonLabel}
      onSubmit={onSubmit}
      title={'חיפוש מתקדם'}
    />
  );
}
