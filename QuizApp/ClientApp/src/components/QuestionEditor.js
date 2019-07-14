import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as questionActionCreators } from '../store/Question';
import { actionCreators as viewNameActionCreators } from '../store/ViewName';
import { actionCreators as showNotificationActionCreators } from '../store/ShowNotification';
import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import AnswerEditor from './AnswerEditor';
import Notification from './Notification';

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
    margin: 5,
  },
}));

const QuestionEditor = ({
  match,
  isNew,
  question,
  requestQuestion,
  setViewName,
  showNotification,
  isNotificationOpen,
}) => {
  const classes = useStyles();
  const initialQuestionState = {
    prompt: '',
    answers: [{
      content: '',
      isCorrect: false
    },
    {
      content: '',
      isCorrect: false
    },
    {
      content: '',
      isCorrect: false
    }]
  };
  const [questionState, setQuestionState] = useState(initialQuestionState);
  
  // mounted
  useEffect(() => {
    if (isNew) {
      setViewName('New Question');
      return;
    }
    setViewName('Edit Question');
    var id = match.params.questionId;
    if (!question || !question.question || question.question.id !== id) {
      fetchQuestion(id);
    }
  }, []);

  // update state if question prop changes
  useEffect(() => {
    setQuestionState(question.question || initialQuestionState);
  }, [question]);

  function fetchQuestion(id) {
    requestQuestion(id);
  }

  function handleQuestionChanged(event) {
    const prompt = event.target.value;
    setQuestionState({ ...questionState, prompt});
  }

  function handleAnswerChanged(index, answer) {
    const newAnswers = [...questionState.answers];
    newAnswers[index] = answer;
    questionState.answers = newAnswers;
    //setQuestionState({ ...questionState, answers: newAnswers });
  }

  function handleClose() {
    showNotification(false);
  }

  return (
    <Container justify="center" maxWidth="md">
      <Notification
        isOpen={isNotificationOpen.isNotificationOpen}
        message={question.error}
        handleClose={handleClose}
      />
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={4}>
          <Grid item md={12}>
            <TextField
              id="standard-multiline-static"
              label="Question Prompt"
              helperText="You can use markdown in the question prompt."
              multiline
              rows="5"
              fullWidth
              margin="normal"
              value={questionState.prompt}
              onChange={handleQuestionChanged}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={4}>
            <AnswerEditor
              index={0}
              answer={questionState.answers[0]}
              onChange={handleAnswerChanged}
            />
          </Grid>
          <Grid item md={4}>
            <AnswerEditor
              index={1}
              answer={questionState.answers[1]}
              onChange={handleAnswerChanged}
            />
          </Grid>
          <Grid item md={4}>
            <AnswerEditor
              index={2}
              answer={questionState.answers[2]}
              onChange={handleAnswerChanged}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" component={Link} to="/questions">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default connect(
  (state) => state,
  (dispatch) =>
    bindActionCreators(
      {
        ...questionActionCreators,
        ...viewNameActionCreators,
        ...showNotificationActionCreators,
      },
      dispatch
    )
)(withRouter(QuestionEditor));
