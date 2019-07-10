import React from 'react';
import { connect } from 'react-redux';
import HeroUnit from './HeroUnit';

//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({}));

const EndQuiz = (props) => {
  //const classes = useStyles();
  return (
    <React.Fragment>
        <HeroUnit heading="End Quiz" />
    </React.Fragment>
  );
};

export default connect()(EndQuiz);
