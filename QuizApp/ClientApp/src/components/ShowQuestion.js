import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import AnswerCards from './AnswerCards';
import AnswerCard from './AnswerCard';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
    minHeight: '80vh',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const ShowQuestion = ({ question, onNext, onSubmitted }) => {
  const classes = useStyles();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleAnswerSelected(answer) {
    if (isSubmitted) return;

    if (question.type === 'multiChoice') {
      if (selectedAnswers.includes(answer)) {
        setSelectedAnswers(selectedAnswers.filter((a) => a.id !== answer.id));
      } else {
        setSelectedAnswers([...selectedAnswers, answer]);
      }
    } else {
      setSelectedAnswers([answer]);
    }
  }

  function handleSubmit() {
    setIsSubmitted(true);
    onSubmitted(question.id, selectedAnswers);
  }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {question.prompt}
        </Typography>
        <AnswerCards>
          {question.answers.map((a, i) => (
            <AnswerCard
              answer={a}
              key={i}
              selected={selectedAnswers.includes(a)}
              submitted={isSubmitted}
              onSelected={handleAnswerSelected}
            />
          ))}
        </AnswerCards>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              {isSubmitted ? (
                <Button variant="contained" color="default" onClick={onNext}>
                  Next Question
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={selectedAnswers.length === 0}
                >
                  Submit Answer
                </Button>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to={`/`}>Cancel Quiz</Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default connect()(ShowQuestion);
