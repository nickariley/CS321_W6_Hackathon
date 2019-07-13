import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Question';
import { withRouter } from 'react-router-dom';

import { Markdown } from 'react-markdown-tree';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import AnswerEditor from './AnswerEditor';
import Grid from '@material-ui/core/Grid';
import AnswerCard from './AnswerCard';
import { Button } from '@material-ui/core';

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
  grid: {
    margin: 5
  }
}));

const QuestionEditor = ({ match, isNew, question, requestQuestion }) => {
  const classes = useStyles();
  const [prompt, setPrompt] = useState(question && question.question ? question.question.prompt : "");
  const [answers, setAnswers] = useState([{}, {}, {}]);

  useEffect(() => {
    if (isNew) return;
    var id = match.params.questionId;
    if (!question || !question.question || question.question.id !== id) {
      fetchQuestion(id);
    }
  }, []);

  function fetchQuestion(id) {
    requestQuestion(id);
  }

  function handleQuestionChanged(event) {
    setPrompt(event.target.value);
  }

  function handleAnswerChanged(index, answer) {
    console.log(index, answer, answers);
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  }

  return (
    <Container justify="center" maxWidth="md">
      <h3 align="center">Edit Question</h3>

      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={4}>
          <Grid item md={12} >
            <TextField
              id="standard-multiline-static"
              label="Question Prompt"
              helperText="You can use markdown in the question prompt."
              multiline
              rows="5"
              // defaultValue=""
              //className={classes.textField}
              fullWidth
              margin="normal"
              value={prompt}
              onChange={handleQuestionChanged}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={4}>
            <AnswerEditor
              index={0}
              answer={answers[0]}
              onChange={handleAnswerChanged}
            />
          </Grid>
          <Grid item md={4}>
            <AnswerEditor
              index={1}
              answer={answers[1]}
              onChange={handleAnswerChanged}
            />
          </Grid>
          <Grid item md={4}>
            <AnswerEditor
              index={2}
              answer={answers[2]}
              onChange={handleAnswerChanged}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item>
            <Button variant="contained" color="primary">Save</Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Cancel</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(withRouter(QuestionEditor));
