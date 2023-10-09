import styled from 'styled-components';

export const SectionFeedback = styled.section`
    padding: 100px 0;
`;

export const DivFeedback = styled.div`
  width: 450px;
  margin: 0 auto;
  text-align: center;
`;

export const H1Feedback = styled.h1`
  font-size: 42px;
  margin-bottom: 32px;
`;

export const ButtonsFeedbackWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 32px;
`

export const ButtonFeedback = styled.button`
    font-size: 18px;
    padding: 4px 16px;
    border-radius: 6px;
    &:hover {
        background-color: lightblue;
        color: white;
    }
`

export const H2Feedback = styled.h2`
    font-size: 32px;
    margin-bottom: 20px;
`

export const PFeedback = styled.p`
    font-size: 20px;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`