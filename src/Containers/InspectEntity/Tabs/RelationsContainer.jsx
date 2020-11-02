import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import Graph from 'react-graph-vis';
import { fetchEntityRelationsById } from '../../../Services/Entities/entities.service';
import { Grid, makeStyles, Slider } from '@material-ui/core';
import config from '../../../Config';

const options = {
  layout: {
    hierarchical: false,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  slider: {
    color: theme.palette.text.primary,
    '& .MuiSlider-valueLabel': {
      color: theme.palette.secondary.light,
    },
  },
}));


export default function RelationsContainer({ entityId }) {
  const classes = useStyles();
  const [relations, setRelations] = useState({ nodes: [], edges: [] });
  const [hopsNumber, setHopsNumber] = useState(1);

  useEffect(() => {
    fetchEntityRelationsById(entityId, hopsNumber)
      .then((resRelations) => {
        return setRelations({
          nodes: resRelations.nodes,
          edges: resRelations.edges,
        });
      })
      .catch((err) => console.log(err));
  }, [entityId, hopsNumber]);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={8}>
          <Slider
            valueLabelDisplay="on"
            value={hopsNumber}
            onChange={(event, newVal) => setHopsNumber(newVal)}
            className={classes.slider}
            max={config.maxNumberOfHopsAllowed}
          />
        </Grid>
      </Grid>

      <Graph graph={relations} options={options} />
    </div>
  );
}
RelationsContainer.propTypes = {
  entityId: string.isRequired,
};
