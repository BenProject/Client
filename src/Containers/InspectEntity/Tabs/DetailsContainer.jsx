import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import {
  editEntityFieldById,
  fetchEntityDetailsById,
} from '../../../Services/Entities/entities.service';
import Entity from '../../../Components/Entity/Entity';
import { useHistory } from 'react-router-dom';
import { makeStyles, Modal } from '@material-ui/core';
import IconButton from '../../../Components/Buttons/IconButton';
import { Add } from '@material-ui/icons';
import { getKeyAndValOfObject } from '../../../Utils/ObjectUtils';
import Input from '../../../Components/Inputs/Input';
import Button from '../../../Components/Buttons/Button';
import config from '../../../Config';

const useStyles = makeStyles((theme) => ({
  entityContainer: {
    height: '100%',
    overflowY: 'auto',
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
export default function DetailsContainer({ entityId }) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [editDetail, setEditDetail] = useState({ key: '', value: '' });

  const [details, setDetails] = useState({
    properties: [],
    relations: [],
    type: '',
  });

  useEffect(() => {
    fetchEntityDetailsById(entityId)
      .then((details) => {
        // details.relations.forEach((relation) => {
        //   relation.onClick = () =>
        //     history.push(`/entity/${relation.id}/properties`);
        // });
        details.properties.forEach((prop) => {
          prop.onClick = (prop) => {
            const [key, value] = getKeyAndValOfObject(prop);
            setEditDetail({ key: key, value: value });
            setOpen(true);
          };
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

  function handleSubmit(event) {
    event.preventDefault();
    editEntityFieldById(
      entityId,
      editDetail.key,
      event.target.editDetailInput.value
    )
      .then((res) => console.log('success ', res))
      .catch((err) => console.log('err ', err));

    setOpen(false);
  }

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

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modalContainer}
      >
        <div className={classes.modalContent}>
          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <Input
              name="editDetailInput"
              type={
                config.OntologyToHtml.jsTypeToInput[typeof editDetail.value]
              }
              defaultValue={editDetail.value}
              label={editDetail.key}
              must={true}
            ></Input>
            <Button type="submit" buttonText="submit!" />
          </form>
        </div>
      </Modal>
    </div>
  );
}

DetailsContainer.propTypes = {
  entityId: string.isRequired,
};
