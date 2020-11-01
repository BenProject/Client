import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import Graph from 'react-graph-vis';
import { fetchEntityRelationsById } from '../../../Services/Entities/entities.service';

const options = {
  layout: {
    hierarchical: false,
  },
};

const events = {
  select: function (event) {
    var { nodes, edges } = event;
    console.log('Selected nodes:');
    console.log(nodes);
    console.log('Selected edges:');
    console.log(edges);
  },
};

export default function RelationsContainer({ entityId }) {
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

  return <Graph graph={relations} options={options} events={events} />;
}
RelationsContainer.propTypes = {
  entityId: string.isRequired,
};
