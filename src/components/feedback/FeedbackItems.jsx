import { PFeedback } from './Feedback.styled';

const FeedbackItems = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <PFeedback>Good: {good}</PFeedback>
      <PFeedback>Neutral: {neutral}</PFeedback>
      <PFeedback>Bad: {bad}</PFeedback>
      <PFeedback>Total: {total}</PFeedback>
      {total === 0 ? (
        <PFeedback>No feedbacks</PFeedback>
      ) : (
        <PFeedback>Positive feedbacks: {positivePercentage} %</PFeedback>
      )}
    </>
  );
};

export default FeedbackItems;
