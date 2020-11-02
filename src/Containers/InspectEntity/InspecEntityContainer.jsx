import { Card, CardActions, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import IconButton from '../../Components/Buttons/IconButton';
import InsightsContainer from './Tabs/InsightsContainer';
import DetailsContainer from './Tabs/DetailsContainer';
import RelationsContainer from './Tabs/RelationsContainer';
import {
  InfoOutlined,
  AccountTreeRounded,
  Visibility,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '95%',
    paddingBottom: '6%',
  },
  cardActions: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
}));

export default function InspedEntityContainer() {
  const classes = useStyles();
  const { entityId, inspectStatus } = useParams();
  const [currentTab, setTab] = useState(<div />);
  const history = useHistory();

  useEffect(() => {
    if (inspectStatus === 'relations')
      setTab(<RelationsContainer entityId={entityId} />);
    else if (inspectStatus === 'properties')
      setTab(<DetailsContainer entityId={entityId} />);
    else if (inspectStatus === 'insights')
      setTab(<InsightsContainer entityId={entityId} />);
    else return <div></div>;
  }, [entityId, inspectStatus]);

  return (
    <Card className={classes.card}>
      <CardActions className={classes.cardActions}>
        <IconButton
          icon={<InfoOutlined />}
          onClick={() => history.push(`./properties`)}
        ></IconButton>
        <IconButton
          icon={<Visibility />}
          onClick={() => history.push(`./insights`)}
        ></IconButton>
        <IconButton
          icon={<AccountTreeRounded />}
          onClick={() => history.push(`./relations`)}
        ></IconButton>
      </CardActions>

      {/* <IconButton></IconButton>
        <IconButton></IconButton> */}
      <div style={{ height: '100%' }}>{currentTab}</div>
    </Card>
  );
}
