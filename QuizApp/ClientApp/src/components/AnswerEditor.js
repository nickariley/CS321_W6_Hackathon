import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const AnswerEditor = ({ index, answer, isNew, onChange }) => {
  const classes = useStyles();

  function handlePromptChange(event) {
    answer.content = event.target.value;
    onChange(index, answer);
  }

  function handleCorrectChange(event) {
    answer.isCorrect = event.target.checked;
    onChange(index, answer);
  }

  return (
    <Container justify="center" maxWidth="md">
      <TextField
        id="standard-multiline-static"
        label={`Answer ${index + 1} Content`}
        helperText="You can use markdown in this field."
        multiline
        rows="8"
        defaultValue=""
        //className={classes.textField}
        fullWidth
        margin="normal"
        value={answer.content}
        onChange={handlePromptChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={answer.isCorrect}
            onChange={handleCorrectChange}
            // value="checkedA"
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
