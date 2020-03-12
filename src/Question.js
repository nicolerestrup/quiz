import React from 'react';
import Confirmation from './Confirmation';
import GameOver from './GameOver';
import './style/Question.css';

export default function Question(props) {
  const template = (question) => {
    const answerSelectedTrue = (state) => {
      state.setState({
        ...state.state,
          nextQuestion: true,
          answer: 'True'
      })
    }
    const answerSelectedFalse = (state) => {
      state.setState({
        ...state.state,
          nextQuestion: true,
          answer: 'False'
      })
    }

    return (
      <div className="current-question-container" key={question.currentQuestion}>
        <div className="current-question-header">
        <p className="current-question-score">Score: {question.score}</p>
        <p className="current-question-number-question">Question: {question.currentQuestion}</p>
        </div>
        <div className="current-question-question">
         {question.questions[question.currentQuestion - 1].question}
        </div>
        <div className="current-question-buttons">
        <p className="current-question-button" onClick={() => answerSelectedTrue(props.status)}>True</p>
        <p className="current-question-button" onClick={() => answerSelectedFalse(props.status)}>False</p>
        </div>
      </div>
    )
  }
  return (
    props.status.state.currentQuestion === props.status.state.questions.length + 1 ?
    <GameOver state={props.status}/> :
    props.status.state.nextQuestion ? 
    <Confirmation state={props.status}/>
    : 
    template(props.status.state)
    )
};
