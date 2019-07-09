import React from 'react';
import { connect } from 'react-redux';

//import { makeStyles } from '@material-ui/core/styles';
import HeroUnit from './HeroUnit';
import CardGrid from './CardGrid';

//const useStyles = makeStyles((theme) => ({}));

const Home = (props) => {
  //const classes = useStyles();
  return (
    <React.Fragment>
      <HeroUnit />
      <CardGrid cards={[1,2,3,4]} />
    </React.Fragment>
  );
};

export default connect()(Home);
