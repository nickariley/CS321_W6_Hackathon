import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const QuestionEditor = ({ match, isNew }) => {
  console.log('isNew:', isNew);
  return (
    <div>
      <h1>Question Editor</h1>

      <p>IsNew: {isNew ? 'true' : 'false'}</p>

    </div>
  );
};
export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(QuestionEditor);
