import Feedback from 'components/feedback/Feedback';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // goodIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //     good: prevState.good + 1,
  //   }
  //   })
  // }

  // neutralIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //     neutral: prevState.neutral + 1,
  //   }
  //   })
  // }

  //  badIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //     bad: prevState.bad + 1,
  //   }
  //   })
  // }

  countPositivePercentage = (goodNum, totalNum) => {
    if (totalNum >= 0 && goodNum === 0) {
      return 0;
    } else {
      return Math.round((goodNum / totalNum) * 100);
    }
  };

  incrementStatus = status => {
    this.setState(prevState => ({
      [status]: prevState[status] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + bad + neutral;
    const positivePercentage = this.countPositivePercentage(
      good,
      totalFeedback
    );

    return (
      <Feedback
        title="Please leave feedback"
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        // goodIncrement={this.goodIncrement}
        // neutralIncrement ={this.neutralIncrement}
        // badIncrement ={this.badIncrement}
        incrementStatus={this.incrementStatus}
        positivePercentage={positivePercentage}
      />
    );
  }
}
