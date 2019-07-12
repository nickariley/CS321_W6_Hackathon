import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const QuestionList = ({ questions }) => {
  useEffect(() => {
    console.log('QuestionList mounted');
  }, []);

  return (
    <div>
      <h1>Question List</h1>

      <p>This is a simple example of a React component.</p>
    </div>
  );
};

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(QuestionList);
