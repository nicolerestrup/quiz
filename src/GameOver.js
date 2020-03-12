import React from 'react';


export default function GameOver(props) {

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="game-over-container">
      You got {props.state.state.score} of {props.state.state.questions.length} right!
      <button onClick={refreshPage}>Try again</button>
    </div>
    )
};

