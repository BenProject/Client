import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import {
  fetchEntityInsightsById,
  saveInsights,
} from '../../../Services/Entities/entities.service';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import he from 'he';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '../../../Components/Buttons/Button';

export default function InsightsContainer({ entityId }) {
  const [insights, setInsights] = useState(EditorState.createEmpty());

  useEffect(() => {
    fetchEntityInsightsById(entityId)
      .then((res) => {
        if (res.text !== '') {
          const message = JSON.parse(he.decode(res.text));
          const contentState = convertFromRaw(message);
          const editorState = EditorState.createWithContent(contentState);
          setInsights(editorState); //setting the message state in editor
        }
      })
      .catch((err) => console.log(err));
  }, [entityId]);

  const onSave = () => {
    const newMessage = {
      message: JSON.stringify(convertToRaw(insights.getCurrentContent())),
    };
    saveInsights(entityId, newMessage);
  };

  return (
    <div>
      <Editor editorState={insights} onEditorStateChange={setInsights}></Editor>
      <Button onClick={onSave} buttonText={'save'}></Button>
    </div>
  );
}

InsightsContainer.propTypes = {
  entityId: string.isRequired,
};
