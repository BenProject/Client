import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchCategoryById } from '../../Services/Ontology/ontology.service';
import config from '../../Config';
import FieldList from '../../Components/FieldList/List';
import './advancedSearch.css'

export default function AdvancedSearchParams({ typeId }) {
  const [params, setParams] = useState(undefined);

  useEffect(() => {
    if (typeId)
      fetchCategoryById(typeId)
        .then((res) => setParams(res))
        .catch((err) => console.log(err));
  }, [typeId]);

  if (!params || !typeId) return <div />;

  return (
    <div className="fields">
      <div className="fields--must">
        <FieldList
          must={true}
          textToInputTypeDictionary={config.OntologyToHtml.entityTypeToInput}
          fields={params.properties.must}
        ></FieldList>
      </div>
      <div className="fields--optional">
        <FieldList
          must={false}
          textToInputTypeDictionary={config.OntologyToHtml.entityTypeToInput}
          fields={params.properties.optional}
        ></FieldList>
      </div>
    </div>
  );
}

AdvancedSearchParams.propTypes = {
  typeId: string,
};
