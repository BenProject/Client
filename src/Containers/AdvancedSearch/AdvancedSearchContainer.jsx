import React, { useEffect, useState } from 'react';
import Button from '../../Components/Buttons/Button';
import Select from '../../Components/Select/Select';
import config from '../../Config';
import {
  searchButtonLabel,
  selectEntityTypeLabel,
} from '../../Constants/labelConstants';
import { fetchAllCategories } from '../../Services/Ontology/ontology.service';
import AdvancedSearchParams from './AdvancedSearchParams';
import './advancedSearch.css';

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

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="advanced-search-container">
      <div className="advanced-search-container__select">
        <Select
          value={selected}
          onChange={handleSelected}
          label={selectEntityTypeLabel}
          options={categories}
          keysDictionary={config.OntologyToHtml.category}
        ></Select>
      </div>

      <div className="advanced-search-container__params">
        <AdvancedSearchParams typeId={selected}></AdvancedSearchParams>
      </div>
      {/* {selected ? (
        <div className="advanced-search-container__footer">
          <Button
            onClick={handleClick}
            type="submit"
            buttonText={searchButtonLabel}
          ></Button>
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
}
