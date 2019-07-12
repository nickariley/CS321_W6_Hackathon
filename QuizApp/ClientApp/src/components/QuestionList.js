import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Questions';

const QuestionList = ({ questions, requestQuestions }) => {

  useEffect(() => {
    console.log('QuestionList mounted');
    fetchQuestions();
  }, []);


  function fetchQuestions() {
    return requestQuestions();
  }

  return (
    <div>
      <h1>Question List</h1>

      <ul>
      {questions.map(q => (
        <li>{q.prompt}</li>
      ))}
</ul>

    </div>
  );
};

export default connect(
  (state) => state.questions,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(QuestionList);
