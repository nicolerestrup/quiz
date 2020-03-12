import React from 'react';

export default function GameOver(props) {
  return (
    <div className="game-over-container">
      You got {props.state.state.score} of {props.state.state.questions.length} right!
    </div>
    )
};

