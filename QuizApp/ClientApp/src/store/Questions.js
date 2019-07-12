import QuizApi from '../QuizAPI';
import sampleQuiz from '../sampleQuiz';

const requestQuestions = 'REQUEST_QUESTIONS';
const receiveQuestions = 'RECEIVE_QUESTIONS';
const initialState = { questions: [], isLoading: false };

export const actionCreators = {
  requestQuestions: () => async (dispatch, getStatie) => {
    dispatch({ type: requestQuestions });

    try {
      const questions = await QuizApi.getQuestions();
      dispatch({ type: receiveQuestions, questions });
    } catch (error) {
      dispatch({ type: receiveQuestions, questions: sampleQuiz.questions, error: "Unable to fetch questions. Using sample data." });
    }
  },
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestQuestions) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === receiveQuestions) {
    return {
      ...state,
      questions: action.questions,
      isLoading: false,
      error: action.error
    };
  }

  return state;
};
