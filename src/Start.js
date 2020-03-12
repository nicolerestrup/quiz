import React from 'react'
import Question from './Question'

export default function start(props) {

  return (
    <div className="ready-container">
      {props.state.ready ? 
      <button className="ready-clickable-button" onClick={() => props.setState({
        ...props.state,
        gameStage: 'quizStarted',
        currentQuestion: 1
      })}>Start</button> :
        <button className="ready-unclickable-button">Start</button>
      }
      {props.state.gameStage === 'quizStarted' ?
      <Question status={props}/> : null}
    </div>
  )
}
