import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchCategoryById } from '../../Services/Ontology/ontology.service';
import { v4 as uuid } from 'uuid';
import Input from '../../Components/Inputs/Input';

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
    <div>
      {params.properties.must.map((param) => {
        return (
          <Input
            key={uuid()}
            label={Object.keys(param)[0]}
            type={Object.values(param)[0]}
          ></Input>
        );
      })}
    </div>
  );
}

AdvancedSearchParams.propTypes = {
  typeId: string,
};
