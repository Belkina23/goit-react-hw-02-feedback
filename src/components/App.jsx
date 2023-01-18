import { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <h1 className="Title">Please leave fedback</h1>
        <FeedbackOptions options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback} />
      </Container>
    );
  }
}

export default App;
