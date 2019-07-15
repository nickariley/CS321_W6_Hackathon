import React from 'react';
import { withRouter } from 'react-router-dom';

import StartQuiz from './StartQuiz';
import EndQuiz from './EndQuiz';
import ShowQuestion from './ShowQuestion';
import Stepper from './Stepper';

import QuizAPI from '../QuizAPI';
import sampleData from '../sampleData';

class TakeQuiz extends React.Component {
  state = {
    questionIndex: 0,
    answers: {},
    quiz: {}
  };

  loadQuiz = async (id) => {
    try {
      const quiz = await QuizAPI.getQuiz(id);
      this.setState({
        quiz,
        error: ''
      })
    } catch (error) {
      console.log('loadQuiz error', id);
      const quiz = sampleData.quizzes.find(q => q.id === Number(id));
      this.setState({
        quiz,
        error
      });
    }
  };

  componentDidMount() {
    const { quiz } = this.state;
    const quizId = this.props.match.params.quizId;
    if (!quiz || quiz.id !== quizId) {
      this.loadQuiz(quizId);
    }
  }

  getQuestions = () => {
    const { quiz } = this.state;
    if (!quiz || !quiz.questions) return [];
    return [...quiz.questions.map((q) => ({ ...q }))];
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

  handleStartOver = () => {
    // reset state
    this.setState({
      questionIndex: 0,
      answers: {},
    });
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

  handleAnswerSelected = (questionId, answer) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [questionId]: answer,
      },
    });
  };

  render() {
    const { questionIndex, answers } = this.state;
    const { quiz } = this.state;
    const questions = this.getQuestions();
    const questionCards = [
      <StartQuiz
        quiz={quiz}
        onStart={this.handleStartQuiz}
        onCancel={this.handleCancelQuiz}
      />,
      ...questions.map((q, i) => (
        <ShowQuestion
          key={i}
          question={q}
          answer={answers[q.id]}
          onNext={this.handleNextQuestion}
          onAnswerSelected={this.handleAnswerSelected}
        />
      )),
      <EndQuiz
        quiz={quiz}
        answers={answers}
        onStartOver={this.handleStartOver}
        onFindAnotherQuiz={this.handleCancelQuiz}
      />,
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

export default withRouter(TakeQuiz);