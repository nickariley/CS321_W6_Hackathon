import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Quizzes';

//import { makeStyles } from '@material-ui/core/styles';
import HeroUnit from './HeroUnit';
import CardGrid from './CardGrid';
import QuizCard from './QuizCard';
import { Button } from '@material-ui/core';

//const useStyles = makeStyles((theme) => ({}));

class Home extends React.Component {

  componentDidMount() {
    this.fetchQuizzes()
      .then(quizzes => {
        this.setState({ quizzes })
      });
  }

  fetchQuizzes = () => {
    const { requestQuizzes } = this.props;
    return requestQuizzes();
  }

  render() {
    console.log('home props', this.props);
    //const classes = useStyles();
    const { quizzes } = this.props.quizzes;
    return (
      <React.Fragment>
        <Button onClick={this.fetchQuizzes}>Test</Button>
        <HeroUnit />
        <CardGrid items={quizzes} component={QuizCard} />
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(Home);
