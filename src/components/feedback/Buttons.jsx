import { ButtonFeedback, ButtonsFeedbackWrapper } from './Feedback.styled';

const Buttons = ({ keys, onClickBtn }) => {
  return (
    <ButtonsFeedbackWrapper>
      {keys.map(key => (
        <ButtonFeedback key={key} type="button" onClick={() => onClickBtn(key)}>
          {key}
        </ButtonFeedback>
      ))}
    </ButtonsFeedbackWrapper>
  );
};

export default Buttons;
