const fetchJson = async (uri, options) => {
  const response = await fetch(uri, options);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

class QuizApi {
  static getQuestions() {
    const uri = `api/questions`;
    const options = {};
    return fetchJson(uri, options);
  }

  static getQuestion(questionId) {
    const uri = `api/questions/${questionId}`;
    const options = {};
    return fetchJson(uri, options);
  }

  static saveQuestion(question) {
    const body = JSON.stringify(question);
    let uri, options;
    // new
    if (!question.id) {
      uri = `api/questions`;
      options = {
        method: 'POST',
        body,
      };
    } else {
      // update
      uri = `api/questions/${question.id}`;
      options = {
        method: 'PUT',
        body,
      };
    }

    return fetchJson(uri, options);
  }

  static getQuizzes() {
    const uri = `api/quizzes`;
    const options = {};
    return fetchJson(uri, options);
  }

  static getQuiz(quizId) {
    const uri = `api/quizzes/${quizId}`;
    const options = {};
    return fetchJson(uri, options);
  }

  static getRandomQuiz() {}
}

export default QuizApi;
