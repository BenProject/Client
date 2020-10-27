import React, { useEffect, useState } from 'react';
import { fetchAllCategories } from '../Services/Ontology/ontology.service';

export default function AdvancedSearchContainer() {
  const [categories, setCategories] = useState([{ type: 'aa', id: 1 }]);
  useEffect(() => {
    fetchAllCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{categories[0].type}</div>;
}
