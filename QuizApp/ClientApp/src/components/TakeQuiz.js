import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Quiz';

import StartQuiz from './StartQuiz';
import EndQuiz from './EndQuiz';
import ShowQuestion from './ShowQuestion';
import Stepper from './Stepper';

class TakeQuiz extends React.Component {
  state = {
    questionIndex: -1,
  };

  componentDidMount() {
    const { quiz } = this.props;
    const quizId = this.props.match.params.quizId;
    if (!quiz || quiz.id !== quizId) {
      this.props.requestQuiz(quizId);
    }
  }

  getQuestions = () => {
    const { quiz } = this.props;
    if (!quiz || !quiz.questions) return [];
    return quiz.questions;
  };

  isQuizNotStarted = () => {
    const { questionIndex } = this.state;
    return questionIndex < 0;
  };

  isQuizInProgress = () => {
    const { questionIndex } = this.state;
    const questions = this.getQuestions();
    return questionIndex >= 0 && questionIndex < questions.length;
  };

  isQuizCompleted = () => {
    const { questionIndex } = this.state;
    const questions = this.getQuestions();
    return questionIndex >= questions.length;
  };

  handleStartQuiz = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: questionIndex + 1,
    });
  };

  handleNextQuestion = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: questionIndex + 1,
    });
  };

  render() {
    //const { questionIndex } = this.state;
    const { quiz } = this.props;
    const questions = this.getQuestions();
    //const classes = useStyles();
    const questionCards = [
      <StartQuiz quiz={quiz} />,
      ...questions.map((q) => <ShowQuestion question={q} />),
      <EndQuiz  quiz={quiz} />,
    ];
    return (
      <React.Fragment>
        <Stepper items={questionCards} />
        {/* {this.isQuizNotStarted() ? (
          <StartQuiz onStartQuiz={this.handleStartQuiz} />
        ) : null}
        {this.isQuizInProgress() ? (
          <ShowQuestion
            question={questions[questionIndex]}
            onNextQuestion={this.handleNextQuestion}
          />
        ) : null}
        {this.isQuizCompleted() ? <EndQuiz /> : null} */}
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => state.quiz,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(TakeQuiz);
