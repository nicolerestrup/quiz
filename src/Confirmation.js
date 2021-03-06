import React from 'react';
import './style/generalCard.css';

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
    <div className="container">
      <p className="score">You got it right! 🥳</p>
      <p className="button" onClick={() => updateState(true)}>
        Next question
      </p>
    </div> :
    <div className="container">
      <p className="score">Ooops, this was wrong...</p>
      <p className="button" onClick={() => updateState(false)}>
        Next question
      </p>
    </div>
    )
};

