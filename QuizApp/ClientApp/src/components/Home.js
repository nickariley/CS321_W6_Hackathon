import React from 'react';

import QuizAPI from '../QuizAPI';
import sampleData from '../sampleData';
import CardGrid from './CardGrid';
import QuizCard from './QuizCard';

class Home extends React.Component {

  state = {
    quizzes: [],
    error: '',
  };

  componentDidMount() {
    this.loadQuizzes();
    this.props.setViewName('Quizzes');
  }

  loadQuizzes = async () => {
    try {
      const quizzes = await QuizAPI.getQuizzes();
      this.setState({
        quizzes,
        error: ''
      })
    } catch (error) {
      this.setState({
        quizzes: sampleData.quizzes,
        error
      });
    }
  }

  render() {
    const { quizzes } = this.state;
    return (
      <React.Fragment>
        {/* <Button onClick={this.fetchQuizzes}>Test</Button>
        <HeroUnit /> */}
        <CardGrid items={quizzes} component={QuizCard} />
      </React.Fragment>
    );
  }
}

export default Home;
