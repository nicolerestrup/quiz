import React from 'react';
import './style/generalCard.css';

export default function GameOver(props) {

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="container">
      <p className="score">
        You got {props.state.state.score} of {props.state.state.questions.length} right!
      </p>
      <p className="button" onClick={refreshPage}>Try again</p>
    </div>
    )
};

