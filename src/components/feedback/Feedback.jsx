import Buttons from './Buttons';
import {
  DivFeedback,
  H1Feedback,
  H2Feedback,
  SectionFeedback,
} from './Feedback.styled';
import FeedbackItems from './FeedbackItems';

const Feedback = ({
  good,
  neutral,
  bad,
  // goodIncrement,
  // neutralIncrement,
  // badIncrement,
  total,
  title,
  positivePercentage,
  incrementStatus
}) => {
  return (
    <SectionFeedback>
      <DivFeedback>
        <H1Feedback>{title}</H1Feedback>
        <Buttons
          // goodIncrement={goodIncrement}
          // neutralIncrement={neutralIncrement}
          // badIncrement={badIncrement}
          incrementStatus ={incrementStatus}
        />
        <H2Feedback>Statistics</H2Feedback>
        <FeedbackItems
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </DivFeedback>
    </SectionFeedback>
  );
};

export default Feedback;

