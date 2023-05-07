import React, { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = key => {
    this.setState(prevstate => ({ [key]: prevstate[key] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prevstate => ({
      total: prevstate.good + prevstate.neutral + prevstate.bad,
    }));
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevstate => ({
      positivePersent: (
        (prevstate.good /
          (prevstate.good + prevstate.neutral + prevstate.bad)) *
        100
      ).toFixed(0),
    }));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'start',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Plese, leave feadbeack">
          <FeedbackOptions
            state={this.state}
            handleFeadbeack={this.handleChange}
          />
        </Section>
        <Section title="Statistics">
          {!this.state.good && !this.state.neutral && !this.state.bad ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercent={this.state.positivePersent}
            />
          )}
        </Section>
      </div>
    );
  }
}
