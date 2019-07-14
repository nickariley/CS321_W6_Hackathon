import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const AnswerEditor = ({ index, answer, isNew, onChange }) => {
  const initialAnswerState = { content: '', isCorrect: false };
  const [answerState, setAnswerState] = useState(initialAnswerState);

  useEffect(() => {
    setAnswerState(answer || initialAnswerState);
  }, [answer]);

  function handlePromptChange(event) {
    const content = event.target.value;
    setAnswerState({ ...answerState, content });
    onChange(index, answerState);
  }

  function handleCorrectChange(event) {
    const isCorrect = event.target.checked;
    setAnswerState({ ...answerState, isCorrect });
    onChange(index, answerState);
  }

  return (
    <Container justify="center" maxWidth="md">
      <TextField
        id="standard-multiline-static"
        label={`Answer ${index + 1} Content`}
        helperText="You can use markdown in this field."
        multiline
        rows="8"
        fullWidth
        margin="normal"
        value={answerState.content}
        onChange={handlePromptChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={answerState.isCorrect}
            onChange={handleCorrectChange}
          />
        }
        label={`Answer ${index + 1} is correct.`}
      />
    </Container>
  );
};
export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(AnswerEditor);
