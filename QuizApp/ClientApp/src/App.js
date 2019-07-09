import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import TakeQuiz from './components/TakeQuiz';

export default () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/take-quiz" component={TakeQuiz} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
    </Layout>
  );
};
