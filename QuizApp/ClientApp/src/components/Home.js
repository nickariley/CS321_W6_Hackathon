import React from 'react';
import { connect } from 'react-redux';

//import { makeStyles } from '@material-ui/core/styles';
import HeroUnit from './HeroUnit';
import CardGrid from './CardGrid';
import QuizCard from './QuizCard';

//const useStyles = makeStyles((theme) => ({}));

const Home = (props) => {
  //const classes = useStyles();
  return (
    <React.Fragment>
      <HeroUnit />
      <CardGrid cards={[1,2,3,4]} component={QuizCard} />
    </React.Fragment>
  );
};

export default connect()(Home);
