import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { fetchEntityDetailsById } from '../../../Services/Entities/entities.service';
import Entity from '../../../Components/Entity/Entity';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import IconButton from '../../../Components/Buttons/IconButton';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  entityContainer: {
    height: '100%',
    overflowY: 'auto',
  },
  toolTip: {
    color: 'yellow',
  },
}));
export default function DetailsContainer({ entityId }) {
  const classes = useStyles();
  const history = useHistory();

  const [details, setDetails] = useState({
    properties: [],
    relations: [],
    type: '',
  });

  useEffect(() => {
    fetchEntityDetailsById(entityId)
      .then((details) => {
        details.relations.forEach((relation) => {
          relation.onClick = () =>
            history.push(`/entity/${relation.id}/properties`);
        });
        setDetails({
          properties: details.properties,
          relations: details.relations,
          type: details.type,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [entityId]);
  return (
    <div className={classes.entityContainer}>
      <div style={{ float: 'left' }}>
        <IconButton tooltip="add to relation maker" icon={<Add />}></IconButton>
      </div>
      <Entity
        elevation={0}
        properties={details.properties}
        relations={details.relations}
        entityType={details.type}
      ></Entity>
    </div>
  );
}

DetailsContainer.propTypes = {
  entityId: string.isRequired,
};
