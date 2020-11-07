import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchCategoryById } from '../../Services/Ontology/ontology.service';
import config from '../../Config';
import FieldList from '../../Components/FieldList/List';
import './advancedSearch.css';
import { getKeyAndValOfObject } from '../../Utils/ObjectUtils';
import { useDispatch } from 'react-redux';
import {
  updateParam,
  resetParams,
} from '../../Redux/Actions/AdvancedSearchActions';

export default function AdvancedSearchParams({ typeId }) {
  const [params, setParams] = useState({ must: [], optional: [] });
  const dispatch = useDispatch();

  function propertiesArrayToFieldArray(arr) {
    return arr.map((property) => {
      let [key, value] = getKeyAndValOfObject(property);
      return {
        name: key,
        label: key,
        type: config.OntologyToHtml.entityTypeToInput[value],
        onChange: (event) => {
          if (event.target.type === 'number') {
            dispatch(updateParam(event.target.name, +event.target.value));
          } else {
            dispatch(updateParam(event.target.name, event.target.value));
          }
        },
      };
    });
  }
  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(resetParams());
    return () => (mounted = false);
  }, []);

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
    <div className="fields">
      <div className="fields--must">
        <FieldList must={true} fields={params.must}></FieldList>
      </div>
      <div className="fields--optional">
        <FieldList must={false} fields={params.optional}></FieldList>
      </div>
    </div>
  );
}

AdvancedSearchParams.propTypes = {
  typeId: string,
};
