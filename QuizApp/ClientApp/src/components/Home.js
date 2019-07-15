import React from 'react';

import QuizAPI from '../QuizAPI';
import sampleData from '../sampleData';
import CardGrid from './CardGrid';
import QuizCard from './QuizCard';
import Notification from './Notification';

class Home extends React.Component {

  state = {
    quizzes: [],
    error: '',
    isNotificationOpen: false
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
        error: 'Unable to GET /api/quizzes. Using sample data.',
        isNotificationOpen: true
      });
    }
  }

  handleCloseNotification = () => {
    this.setState({
      isNotificationOpen: false
    });
  }

  render() {
    const { quizzes, error, isNotificationOpen } = this.state;
    return (
      <React.Fragment>
      <Notification
        isOpen={isNotificationOpen}
        message={error}
        handleClose={this.handleCloseNotification}
      />
        {/* <Button onClick={this.fetchQuizzes}>Test</Button>
        <HeroUnit /> */}
        <CardGrid items={quizzes} component={QuizCard} />
      </React.Fragment>
    );
  }
}

export default Home;
