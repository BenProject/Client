import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EntityList from '../Components/Entity/EntityList';
import Pagination from '../Components/Pagination/Pagination';
import config from '../Config';
import {
  fetchEntitiesByParams,
  fetchNumberOfPagesByParams,
} from '../Services/Entities/entities.service';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export default function ResultsContainer() {
  const classes = useStyles();
  const [entities, setEntities] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const history = useHistory();
  const params = useSelector((state) =>
    state.getIn(['AdvancedSearch', 'params'])
  );

  useEffect(() => {
    fetchEntitiesByParams(params.toJS(), pageNumber, config.entitiesPerPage)
      .then((entities) => {
        entities.forEach((entity) => {
          entity.onClick = () => {
            history.push(`/entity/${entity.id}/properties`);
          };
          entity.relations.forEach((relation) => {
            relation.onClick = () =>
              history.push(`/entity/${relation.id}/properties`);
          });
        });
        setEntities(entities);
      })
      .catch((err) => console.log(err));
  }, [pageNumber, params, history]);

  useEffect(() => {
    fetchNumberOfPagesByParams(params.toJS(), config.entitiesPerPage)
      .then((pageCount) => setPageCount(pageCount))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <EntityList
          maxFieldsToShowPerEntity={config.numberOfFieldsToSHow}
          entities={entities}
        ></EntityList>
      </div>
      <div>
        <Pagination
          pagesNumber={pageCount}
          onChange={(event, value) => setPageNumber(value)}
        ></Pagination>
      </div>
    </div>
  );
}
