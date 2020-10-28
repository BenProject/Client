import React from 'react';
import { useParams } from 'react-router-dom';

export default function ResultsContainer() {
  const { pageNumber } = useParams();
  return <div>page number: {pageNumber}</div>;
}
