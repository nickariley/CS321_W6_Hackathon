
const fetchJson = async (uri, options) => {
    const response = await fetch(uri, options);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

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

    static getRandomQuiz() {

    }
}

export default QuizApi;