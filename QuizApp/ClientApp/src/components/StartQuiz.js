import React from 'react';
import HeroUnit from './HeroUnit';
import { Button } from '@material-ui/core';

const StartQuiz = (props) => {
  const { onStartQuiz, quiz } = props;
  if (!quiz) return null;

  console.log('quiz', quiz);
  return (
    <React.Fragment>
        <HeroUnit heading={quiz.title}  />
        <Button onClick={onStartQuiz}>Start</Button>
    </React.Fragment>
  );
};

export default StartQuiz;