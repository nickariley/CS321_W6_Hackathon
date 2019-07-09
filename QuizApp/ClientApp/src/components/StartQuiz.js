import React from 'react';
import { connect } from 'react-redux';
import HeroUnit from './HeroUnit';
import { Button } from '@material-ui/core';

//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({}));

const StartQuiz = (props) => {
  //const classes = useStyles();
  console.log('props', props);
  const { onStartQuiz } = props;
  return (
    <React.Fragment>
        <HeroUnit  />
        <Button onClick={onStartQuiz}>Start</Button>
    </React.Fragment>
  );
};

export default connect(state => state)(StartQuiz);
