import React from 'react'
import Question from './Question'

export default function start(props) {

  const startGame = (props) => {
    props.setState({
      ...props.state,
      gameStage: 'quizStarted',
      currentQuestion: 1
    })
  }

  return (
    <div className="ready-container">
      {props.state.gameStage === 'quizStarted' ?
      <Question status={props}/> : 
      <button className="ready-clickable-button" onClick={() => startGame(props)}>Start</button>
      }
    </div>
  )
}
