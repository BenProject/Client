import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ResultsContainer() {
  const { pageNumber } = useParams();

  useEffect(() => {}, [pageNumber]);

  return <div>page number: {pageNumber}</div>;
}
