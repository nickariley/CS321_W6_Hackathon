import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TokenHelper from './TokenHelper';
import QuizAPI from './QuizAPI';
import { actionCreators as userActionCreators } from './store/User';

import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import TakeQuiz from './components/TakeQuiz';
import QuestionList from './components/QuestionList';
import QuestionEditor from './components/QuestionEditor';
import Login from './components/Login';
import Register from './components/Register';

const App = ({ history, setUser }) => {

  useEffect(() => {
      const token = TokenHelper.getToken();
      setUser({
        loggedIn: !!token,
        email: token ? token.email : null
      })
  }, []);

  function logIn(loginModel) {
    QuizAPI.login(loginModel).then((res) => {
      console.log('login', res);
      TokenHelper.setToken(res);
      setUser({
        loggedIn: true,
        email: loginModel.email,
      });
      // this.setState({
      //   loggedIn: true,
      //   email: res.data.email,
      // });
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
    QuizAPI.register(registrationModel).then((res) => {
      history.push('/login');
    });
  }

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={() => <Login logIn={logIn} />} />
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
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Layout>
  );
};

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(withRouter(App));
