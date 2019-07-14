class TokenHelper {
    getToken() {
        var blogToken = JSON.parse(localStorage.getItem('blogToken'));
        return blogToken;
    }

    setToken(tokenObject) {
        localStorage.setItem('blogToken', JSON.stringify(tokenObject));

    }

    removeToken() {
        localStorage.removeItem('blogToken');
    }
}

export default new TokenHelper();