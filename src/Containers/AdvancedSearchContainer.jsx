import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../Services/Ontology/ontology.service';

export default function AdvancedSearchContainer() {
  const [categories, setCategories] = useState([{ type: 'aa', id: 1 }]);
  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return <div>{categories[0].type}</div>;
}
