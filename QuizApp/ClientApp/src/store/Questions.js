import QuizApi from "../QuizAPI";

const requestQuestions = 'REQUEST_QUESTIONS';
const receiveQuestions = 'RECEIVE_QUESTIONS';
const initialState = { questions: [], isLoading: false };

export const actionCreators = {
  requestQuestions: () => async (dispatch, getStatie) => {
    dispatch({ type: requestQuestions });

    const questions = await QuizApi.getQuestions();

    dispatch({ type: receiveQuestions, questions });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestQuestions) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveQuestions) {
    return {
      ...state,
      questions: action.questions,
      isLoading: false
    };
  }

  return state;
};
