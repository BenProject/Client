import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchCategoryById } from '../../Services/Ontology/ontology.service';
import config from '../../Config';
import FieldList from '../../Components/FieldList/List';
import './advancedSearch.css';
import Button from '../../Components/Buttons/Button';
import { useHistory } from 'react-router-dom';
import { searchButtonLabel } from '../../Constants/labelConstants';
import { getKeyAndValOfObject } from '../../Utils/ObjectUtils';
import { useDispatch } from 'react-redux';
import { updateParam } from '../../Redux/Actions/AdvancedSearchActions';

export default function AdvancedSearchParams({ typeId }) {
  const [params, setParams] = useState({ must: [], optional: [] });
  const dispatch = useDispatch();

  const history = useHistory();

  function handleClick(event) {
    event.preventDefault();
    history.push('/results/search?q=ben');
  }

  function propertiesArrayToFieldArray(arr) {
    return arr.map((property) => {
      let [key, value] = getKeyAndValOfObject(property);
      return {
        name: key,
        label: key,
        type: config.OntologyToHtml.entityTypeToInput[value],
        onChange: (event) =>
          dispatch(updateParam(event.target.name, event.target.value)),
      };
    });
  }

  useEffect(() => {
    if (typeId)
      fetchCategoryById(typeId)
        .then((res) => {
          setParams({
            must: propertiesArrayToFieldArray(res.properties.must),
            optional: propertiesArrayToFieldArray(res.properties.optional),
          });
        })
        .catch((err) => console.log(err));
  }, [typeId]);

  if (!params || !typeId) return <div />;

  return (
    <form className="params-container">
      <div className="params__fields">
        <div className="fields--must">
          <FieldList must={true} fields={params.must}></FieldList>
        </div>
        <div className="fields--optional">
          <FieldList must={false} fields={params.optional}></FieldList>
        </div>
      </div>
      <div className="params__submit">
        <Button
          onClick={handleClick}
          type="submit"
          buttonText={searchButtonLabel}
        ></Button>
      </div>
    </form>
  );
}

AdvancedSearchParams.propTypes = {
  typeId: string,
};
