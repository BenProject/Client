import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Select from '../../Components/Select/Select';
import config from '../../Config';
import { selectEntityTypeLabel } from '../../Constants/labelConstants';
import { fetchAllCategories } from '../../Services/Ontology/ontology.service';
import AdvancedSearchParams from './AdvancedSearchParams';

export default function AdvancedSearchContainer() {
  const [selected, setSelected] = useState('');

  const handleSelected = (event) => {
    setSelected(event.target.value);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid>
      <div className="grid-container">
        <div className="grid-container__select">
          <Select
            value={selected}
            onChange={handleSelected}
            label={selectEntityTypeLabel}
            options={categories}
            keysDictionary={config.OntologyToHtml.category}
          ></Select>
        </div>
        <div>
          <AdvancedSearchParams typeId={selected}></AdvancedSearchParams>
        </div>
      </div>
    </Grid>
  );
}
