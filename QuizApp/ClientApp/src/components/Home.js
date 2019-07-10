import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Quiz';

//import { makeStyles } from '@material-ui/core/styles';
import HeroUnit from './HeroUnit';
import CardGrid from './CardGrid';
import QuizCard from './QuizCard';
import { Button } from '@material-ui/core';

//const useStyles = makeStyles((theme) => ({}));

const Home = (props) => {
  //const classes = useStyles();

  const onClick = () => {
    props.requestQuiz(1);
  };

  return (
    <React.Fragment>
      <Button
        onClick={onClick}
      >
        Test
      </Button>
      <HeroUnit />
      <CardGrid cards={[1, 2, 3, 4]} component={QuizCard} />
    </React.Fragment>
  );
};

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(Home);
