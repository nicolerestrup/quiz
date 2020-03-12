import React from 'react';
import Confirmation from './Confirmation';
import GameOver from './GameOver';

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
      <div className="current-question" key={question.currentQuestion}>
        Current Question: {question.currentQuestion}
        Current Score: {question.score}
        <div className="question">
         {question.questions[question.currentQuestion - 1].question}
        </div>
        <div className="question-buttons"></div>
        <button onClick={() => answerSelectedTrue(props.status)}>True</button>
        <button onClick={() => answerSelectedFalse(props.status)}>False</button>
      </div>
    )
  }
  return (
    props.status.state.currentQuestion === props.status.state.questions.length ?
    <GameOver state={props.status}/> :
    props.status.state.nextQuestion ? 
    <Confirmation state={props.status}/>
    : 
    template(props.status.state)
    )
};
