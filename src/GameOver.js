import React from 'react';
import './style/generalCard.css';

export default function GameOver(props) {

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    props.state.state.score / props.state.state.questions.length >= 0.5 ?
    <div className="container">
      <p className="score">
        You got {props.state.state.score} out of {props.state.state.questions.length} right! 🤯
      </p>
      <p className="button" onClick={refreshPage}>Try again</p>
    </div> :
    <div className="container">
    <p className="score">
      You got {props.state.state.score} out of {props.state.state.questions.length}. That was not good... 😬
    </p>
    <p className="button" onClick={refreshPage}>Try again</p>
  </div>
    )
};

