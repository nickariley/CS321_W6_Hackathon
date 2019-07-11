import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Quizzes';

import CardGrid from './CardGrid';
import QuizCard from './QuizCard';

class Home extends React.Component {

  componentDidMount() {
    this.fetchQuizzes();
  }

  fetchQuizzes = () => {
    const { requestQuizzes } = this.props;
    return requestQuizzes();
  }

  render() {
    const { quizzes } = this.props.quizzes;
    return (
      <React.Fragment>
        {/* <Button onClick={this.fetchQuizzes}>Test</Button>
        <HeroUnit /> */}
        <CardGrid items={quizzes} component={QuizCard} />
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(Home);
