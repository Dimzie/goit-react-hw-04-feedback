import Buttons from './Buttons';
import {
  DivFeedback,
  H1Feedback,
  H2Feedback,
  SectionFeedback,
} from './Feedback.styled';
import FeedbackItems from './FeedbackItems';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { bad, good, neutral };

  const onClickBtn = key => {
    if (key === 'good') {
      setGood(oldState => oldState + 1);
    }
    if (key === 'neutral') {
      setNeutral(oldState => oldState + 1);
    }
    if (key === 'bad') {
      setBad(oldState => oldState + 1);
    }
  };

  const posPercent = () => Math.round((good / total()) * 100);

  const total = () => good + neutral + bad;
  const keys = Object.keys(feedbacks);

  return (
    <SectionFeedback>
      <DivFeedback>
        <H1Feedback>Please leave feedback</H1Feedback>
        <Buttons keys={keys} onClickBtn={onClickBtn} />
        <H2Feedback>Statistics</H2Feedback>
        <FeedbackItems posPercent={posPercent} good={good} bad={bad} neutral={neutral} total={total()}/>
      </DivFeedback>
    </SectionFeedback>
  );
};