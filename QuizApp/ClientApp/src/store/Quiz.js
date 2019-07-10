import QuizApi from "../quizAPI";

const requestQuiz = 'REQUEST_QUIZ';
const receiveQuiz = 'RECEIVE_QUIZ';
const initialState = { quiz: null, isLoading: false };

export const actionCreators = {
  requestQuiz: quizId => async (dispatch, getState) => {
    dispatch({ type: requestQuiz, quizId });

    const quiz = await QuizApi.getQuiz(quizId);

    dispatch({ type: receiveQuiz, quiz });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestQuiz) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveQuiz) {
    return {
      ...state,
      quiz: action.quiz,
      isLoading: false
    };
  }

  return state;
};
