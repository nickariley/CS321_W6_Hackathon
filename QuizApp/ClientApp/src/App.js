import React from 'react';
import { Route } from 'react-router';
import TokenHelper from './TokenHelper';
import QuizAPI from './QuizAPI';

import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import TakeQuiz from './components/TakeQuiz';
import QuestionList from './components/QuestionList';
import QuestionEditor from './components/QuestionEditor';
import Login from './components/Login';
import Register from './components/Register';

export default () => {
  function logIn(loginModel) {
    const { history } = this.props;
    QuizAPI.login(loginModel).then((res) => {
      TokenHelper.setToken(res.data);
      this.setState({
        loggedIn: true,
        email: res.data.email,
      });
      history.push('/');
    });
  }

  function logOut() {
    TokenHelper.removeToken();
    this.setState({
      loggedIn: false,
    });
  }

  function register(registrationModel) {
    const { history } = this.props;
    QuizAPI.register(registrationModel).then((res) => {
      history.push('/login');
    });
  }

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={() => <Login login={logIn} />} />
      <Route exact path="/register" component={() => <Register register={register} />} />
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
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Layout>
  );
};
