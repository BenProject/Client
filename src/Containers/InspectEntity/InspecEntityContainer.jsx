import { Card, CardHeader } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import IconButton from '../../Components/Buttons/IconButton';
import InsightsContainer from './Tabs/InsightsContainer';
import PropertiesContainer from './Tabs/PropertiesContainer';
import RelationsContainer from './Tabs/RelationsContainer';
import { Info } from '@material-ui/icons';

export default function InspedEntityContainer() {
  const { entityId, inspectStatus } = useParams();
  const [currentTab, setTab] = useState(<div />);
  const history = useHistory();

  useEffect(() => {
    if (inspectStatus === 'relations') setTab(<RelationsContainer />);
    else if (inspectStatus === 'properties') setTab(<PropertiesContainer />);
    else if (inspectStatus === 'insights') setTab(<InsightsContainer />);
    else return <div></div>;
  }, [inspectStatus]);

  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            icon={<Info />}
            onClick={() => history.push(`/entity/${entityId}/properties`)}
          ></IconButton>
        }
      />

      {/* <IconButton></IconButton>
        <IconButton></IconButton> */}
      {currentTab}
    </Card>
  );
}
