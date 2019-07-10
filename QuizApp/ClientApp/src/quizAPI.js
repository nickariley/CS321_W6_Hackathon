
const fetchJson = (uri, options) => {
    return fetch(uri, options)
    .then(data => data.json());
}
class QuizApi {
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