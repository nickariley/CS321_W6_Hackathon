import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import CardGrid from './CardGrid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 0, 2),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));
  
const ShowQuestion = (props) => {
  const classes = useStyles();
  const { onNextQuestion, question } = props;
  const answerCards = question.answers.map(a => ({
    heading: "test",
    content: a.content
  }));
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        {/* <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Album layout
        </Typography> */}
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {question.prompt}
        </Typography>
        <CardGrid cards={answerCards} />
      </Container>
    </div>

    // <React.Fragment>
    //     {question.prompt}
    //     <CardGrid cards={answerCards} />
    //     <Button onClick={onNextQuestion}>Next Question</Button>
    // </React.Fragment>
  );
};

export default connect()(ShowQuestion);
