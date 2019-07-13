import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as quizActionCreators } from '../store/Quizzes';
import { actionCreators as viewNameActionCreators } from '../store/ViewName';

import CardGrid from './CardGrid';
import QuizCard from './QuizCard';

class Home extends React.Component {

  componentDidMount() {
    const { setViewName } = this.props;
    setViewName("Quizzes");
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
  (dispatch) => bindActionCreators({ ...viewNameActionCreators, ...quizActionCreators }, dispatch)
)(Home);
