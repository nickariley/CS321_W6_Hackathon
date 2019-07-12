import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/Quiz';
import { withRouter } from 'react-router-dom';

import StartQuiz from './StartQuiz';
import EndQuiz from './EndQuiz';
import ShowQuestion from './ShowQuestion';
import Stepper from './Stepper';

class TakeQuiz extends React.Component {
  state = {
    questionIndex: 0,
    answers: {}
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

  handleStartQuiz = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: questionIndex + 1,
    });
  };

  handleCancelQuiz = () => {
    this.props.history.goBack();
  };

  handleNextQuestion = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: questionIndex + 1,
    });
  };

  handlePrevQuestion = () => {
    const { questionIndex } = this.state;
    this.setState({
      questionIndex: questionIndex - 1,
    });
  };

  handleQuestionSubmitted = (questionId, selectedAnswers) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [questionId]: selectedAnswers
      }
    });
  };

  render() {
    const { questionIndex, answers } = this.state;
    const { quiz } = this.props;
    const questions = this.getQuestions();
    const questionCards = [
      <StartQuiz
        quiz={quiz}
        onStart={this.handleStartQuiz}
        onCancel={this.handleCancelQuiz}
      />,
      ...questions.map((q) => (
        <ShowQuestion
          question={q}
          onNext={this.handleNextQuestion}
          onSubmitted={this.handleQuestionSubmitted}
        />
      )),
      <EndQuiz quiz={quiz} answers={answers} />,
    ];
    return (
      <React.Fragment>
        <Stepper
          items={questionCards}
          activeStep={questionIndex}
          onNext={this.handleNextQuestion}
          onBack={this.handlePrevQuestion}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => state.quiz,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(withRouter(TakeQuiz));
