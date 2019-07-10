import QuizApi from "../quizAPI";

const requestQuizzes = 'REQUEST_QUIZZES';
const receiveQuizzes = 'RECEIVE_QUIZZES';
const initialState = { quizzes: [], isLoading: false };

export const actionCreators = {
  requestQuizzes: () => async (dispatch, getStatie) => {
    dispatch({ type: requestQuizzes });

    const quizzes = await QuizApi.getQuizzes();

    dispatch({ type: receiveQuizzes, quizzes });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestQuizzes) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveQuizzes) {
    return {
      ...state,
      quizzes: action.quizzes,
      isLoading: false
    };
  }

  return state;
};
