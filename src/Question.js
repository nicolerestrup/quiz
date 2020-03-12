import React from 'react';
import Confirmation from './Confirmation';

export default function Question(props) {

  const template = (question) => {
    console.log(question)
    const answerSelected = (state) => {
      state.setState({
        ...state.state,
          nextQuestion: true,
      })
    }

    return (
      <div className="current-question" key={question.currentQuestion}>
        Current Question: {question.currentQuestion}
        <div className="question">
         {question.questions[question.currentQuestion - 1].question}
        </div>
        <div className="question-buttons"></div>
        <button onClick={() => answerSelected(props.status)}>True</button>
        <button onClick={() => answerSelected(props.status)}>False</button>
      </div>
    )
  }
  return (
    props.status.state.nextQuestion ? 
    <Confirmation state={props}/>
    : 
    template(props.status.state)
    )
};
