import React, { useEffect, useState } from 'react';
import './style/App.css';
import Start from './Start';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    ready: false,
    gameStage: 'start',
    score: 0
  })

  useEffect( () =>{
     axios.get('http://localhost:3000/questions')
      .then(result => 
        setState({
          ...state,
          ready: true,
          questions: result.data
        }));
  }, []);

  return (
    <div className="App">
        <h1>🎶 Music Quiz 🎶</h1>
        <Start state={state} setState={setState}/>
    </div>
  );
}

export default App;
