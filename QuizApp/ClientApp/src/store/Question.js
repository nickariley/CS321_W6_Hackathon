import QuizApi from "../QuizAPI";

const requestQuestion = 'REQUEST_QUESTION';
const receiveQuestion = 'RECEIVE_QUESTION';
const initialState = { question: null, isLoading: false };

export const actionCreators = {
  requestQuestion: questionId => async (dispatch, getState) => {
    dispatch({ type: requestQuestion, questionId: questionId });

    const question = await QuizApi.getQuestion(questionId);

    dispatch({ type: receiveQuestion, question });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestQuestion) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveQuestion) {
    return {
      ...state,
      question: action.question,
      isLoading: false
    };
  }

  return state;
};
