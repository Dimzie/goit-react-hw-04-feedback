import { ButtonFeedback, ButtonsFeedbackWrapper } from './Feedback.styled';

const Buttons = ({ keys, onClickBtn }) => {
  return (
    <ButtonsFeedbackWrapper>
      {keys.map(key => (
        <ButtonFeedback key={key} type="button" onClick={() => onClickBtn(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
        </ButtonFeedback>
      ))}
    </ButtonsFeedbackWrapper>
  );
};

export default Buttons;
