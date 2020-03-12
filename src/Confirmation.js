import React from 'react';

export default function Confirmation(props) {
  const updateState = (bool) => {
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
      You got this right!
      <button onClick={() => updateState(true)}>
        Next question
      </button>
    </div> :
    <div>
      You got this wrong
      <button onClick={() => updateState(false)}>
        Next question
      </button>
    </div>
    )
};

