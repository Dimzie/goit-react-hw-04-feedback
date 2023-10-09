import { ButtonFeedback, ButtonsFeedbackWrapper } from "./Feedback.styled"

const Buttons = ({goodIncrement, neutralIncrement, badIncrement, incrementStatus}) => {
  return (
    <ButtonsFeedbackWrapper>
          <ButtonFeedback type="button" onClick={() => incrementStatus("good")}>Good</ButtonFeedback>
          <ButtonFeedback type="button" onClick={() => incrementStatus("neutral")}>Neutral</ButtonFeedback>
          <ButtonFeedback type="button" onClick={() => incrementStatus("bad")}>Bad</ButtonFeedback>
    </ButtonsFeedbackWrapper>
  )
}

export default Buttons