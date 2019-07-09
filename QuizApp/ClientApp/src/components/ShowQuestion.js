import React from 'react';
import { connect } from 'react-redux';
import HeroUnit from './HeroUnit';
import { Button } from '@material-ui/core';

//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({}));

const ShowQuestion = (props) => {
  //const classes = useStyles();
  const { onNextQuestion } = props;
  return (
    <React.Fragment>
        The question is...
        <Button onClick={onNextQuestion}>Next Question</Button>
    </React.Fragment>
  );
};

export default connect()(ShowQuestion);
