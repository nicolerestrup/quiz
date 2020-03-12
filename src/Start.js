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
    <div className="start">
      <div className="start-greeting">
        <p className="start-greeting-header">💃 Welcome to the party! 🎉</p>
        <p className="start-greeting-text">-Diplo</p>
      </div>
      <p className="start-button" onClick={() => startGame(props)}>Start quiz</p>
    </div> :
    <div className="loading">
      <p className="loading-text">⚙️ Loading... ⚙️</p>
    <p className="loading-button">Start quiz</p>
    </div>
  )
}
