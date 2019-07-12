import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import TakeQuiz from './components/TakeQuiz';
import QuestionList from './components/QuestionList';
import QuestionEditor from './components/QuestionEditor';

export default () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/take-quiz/:quizId" component={TakeQuiz} />
      <Route exact path="/questions" component={QuestionList} />
      <Route exact path="/edit-question" component={() => <QuestionEditor isNew={true} />} />
      <Route exact path="/edit-question/:questionId" component={() => <QuestionEditor isNew={false} />} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Layout>
  );
};
