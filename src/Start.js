import React from 'react';
import Question from './Question';
import './style/Start.css';

export default function start(props) {

  const startGame = (props) => {
    props.setState({
      ...props.state,
      gameStage: 'quizStarted',
      currentQuestion: 1
    })
  }

  return (
    props.state.gameStage === 'quizStarted' ?
    <Question status={props}/> :
    props.state.ready ?
    <button className="ready-button" onClick={() => startGame(props)}>Start</button> :
    <div className="loading">
    <button className="ready-button-disabled">Start</button>
    <p>Loading...</p>
    </div>
  )
}
