import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import TokenHelper from './TokenHelper';
import QuizAPI from './QuizAPI';

import Layout from './components/Layout';
import Home from './components/Home';
import TakeQuiz from './components/TakeQuiz';
import QuestionList from './components/QuestionList';
import QuestionEditor from './components/QuestionEditor';
import Login from './components/Login';
import Register from './components/Register';

const App = ({ history }) => {
  
  const [user, setUser] = useState({
    loggedIn: false,
    email: ''
  });
  useEffect(() => {
    QuizAPI.verifyToken()
      .then((token) => {
        setUser({
          loggedIn: true,
          email: token.email,
        });
        console.log('token verified');
      })
      .catch((error) => {
        setUser({
          loggedIn: false,
          email: '',
        });
      });
  }, []);

  function logIn(loginModel) {
    return QuizAPI.login(loginModel).then((res) => {
      TokenHelper.setToken(res);
      setUser({
        loggedIn: true,
        email: loginModel.email,
      });
      return user;
    });
  }

  function logOut() {
    TokenHelper.removeToken();
    setUser({
      loggedIn: false,
      email: '',
    });
  }

  function register(registrationModel) {
    QuizAPI.register(registrationModel).then((res) => {
      history.push('/login');
    });
  }

  return (
    <Layout user={user} logOut={logOut}>
      <Route exact path="/login" component={() => <Login user={user} logIn={logIn} />} />
      <Route
        exact
        path="/register"
        component={() => <Register register={register} />}
      />
      <Route exact path="/take-quiz/:quizId" component={TakeQuiz} />
      <Route exact path="/questions" component={QuestionList} />
      <Route
        exact
        path="/edit-question"
        component={() => <QuestionEditor isNew={true} />}
      />
      <Route
        exact
        path="/edit-question/:questionId"
        component={() => <QuestionEditor isNew={false} />}
      />
      <Route
        exact
        path="/quizzes"
        component={() => <Home  />}
      />
      <Route exact path="/" component={() => <Home  />} />
    </Layout>
  );
};

export default withRouter(App);
