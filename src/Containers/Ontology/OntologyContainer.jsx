import { func, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Button from '../../Components/Buttons/Button';
import Select from '../../Components/Select/Select';
import config from '../../Config';
import { selectEntityTypeLabel } from '../../Constants/labelConstants';
import { fetchAllCategories } from '../../Services/Ontology/ontology.service';
import OntologyParams from './OntologyParams';
import './advancedSearch.css';
import { useDispatch } from 'react-redux';
import { updateType } from '../../Redux/Actions/AdvancedSearchActions';

export default function OntologyContainer({
  onSubmit,
  formButtonLabel,
  title,
}) {
  const [selected, setSelected] = useState('');
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllCategories()
      .then((categories) => {
        console.log(categories);
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelected = (event) => {
    setSelected(event.target.value);
    dispatch(
      updateType(
        categories.find((category) => category.id === event.target.value).type
      )
    );
  };

  return (
    <div className="advanced-search-container">
      <div className="advanced-search-container__title">{title}</div>
      <div className="advanced-search-container__select">
        <Select
          value={selected}
          onChange={handleSelected}
          label={selectEntityTypeLabel}
          options={categories}
          keysDictionary={config.OntologyToHtml.category}
        ></Select>
      </div>
      <form
        onSubmit={onSubmit}
        className="advanced-search-container__form-container"
      >
        <div className="advanced-search-container__params">
          <OntologyParams typeId={selected}></OntologyParams>
        </div>
        {selected ? (
          <div className="advanced-search-container__footer">
            <Button type="submit" buttonText={formButtonLabel}></Button>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
}

OntologyContainer.propTypes = {
  title: string.isRequired,
  onSubmit: func,
  formButtonLabel: string,
};
