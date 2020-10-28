import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchCategoryById } from '../../Services/Ontology/ontology.service';
import config from '../../Config';
import FieldList from '../../Components/FieldList/List';
import './advancedSearch.css';
import Button from '../../Components/Buttons/Button';

export default function AdvancedSearchParams({ typeId }) {
  const [params, setParams] = useState(undefined);
  const [values, setValues] = useState({});

  function handleChange(event) {
    values[event.target.name] = event.target.value;
    setValues(values);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(values);
  }

  useEffect(() => {
    if (typeId)
      fetchCategoryById(typeId)
        .then((res) => setParams(res))
        .catch((err) => console.log(err));
  }, [typeId]);

  if (!params || !typeId) return <div />;

  return (
    <form className="params-container">
      <div className="params__fields">
        <div className="fields--must">
          <FieldList
            onChange={handleChange}
            must={true}
            textToInputTypeDictionary={config.OntologyToHtml.entityTypeToInput}
            fields={params.properties.must}
          ></FieldList>
        </div>
        <div className="fields--optional">
          <FieldList
            onChange={handleChange}
            must={false}
            textToInputTypeDictionary={config.OntologyToHtml.entityTypeToInput}
            fields={params.properties.optional}
          ></FieldList>
        </div>
      </div>
      <div className="params__submit">
        <Button onClick={handleClick} type="submit" buttonText={'חפש'}></Button>
      </div>
    </form>
  );
}

AdvancedSearchParams.propTypes = {
  typeId: string,
};
