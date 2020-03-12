import React from 'react';
import './style/Confirmation.css';

export default function Confirmation(props) {
  const updateState = (bool) => {
    console.log(props)
    props.state.setState({
      ...props.state.state,
      nextQuestion: false,
      currentQuestion: props.state.state.currentQuestion + 1,
      score: bool ? props.state.state.score += 1 : props.state.state.score
    })
  }
  
  return (
    props.state.state.answer === props.state.state.questions[props.state.state.currentQuestion - 1].correct_answer ?
    <div className="confirmation-container">
      <h1>Music Quiz</h1>
      <p className="confirmaton-answer">You got this right!</p>
      <p className="confirmation-button" onClick={() => updateState(true)}>
        Next question
      </p>
    </div> :
    <div className="confirmation-container">
      <h1>Music Quiz</h1>
      <p className="confirmaton-answer">You got this wrong</p>
      <p className="confirmation-button" onClick={() => updateState(false)}>
        Next question
      </p>
    </div>
    )
};

