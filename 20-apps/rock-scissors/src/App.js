import React, { useState, useEffect, useMemo } from 'react';
import Rock from './icon/Rock'
import Paper from './icon/Paper'
import Scissors from './icon/Scissors'

import './App.css';

const choices = [
  {id: 1, name: 'rock', component: Rock, losesTo: 2},
  {id: 2, name: 'paper', component: Paper, losesTo: 3},
  {id: 3, name: 'scissor', component: Scissors, losesTo: 1}
] 

function App() {
  const [win, setWin] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); // win lose draw
  
  useEffect(() =>{
    restartGame()
  },[])
  
  const restartGame = () => {
    setGameState(null);
    setUserChoice(null);

    const handleComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(handleComputerChoice)
    setComputerChoice(handleComputerChoice)
  }

  const handleUserChoice = (choice) => {
    const chooseChoice = choices.find(v => v.id === choice)
    setUserChoice(chooseChoice)
    if(chooseChoice.losesTo === computerChoice.id) {
      setGameState("lose")
    } else if(chooseChoice.id === computerChoice.losesTo) {
      setGameState("win")
    } else if(chooseChoice.id === computerChoice.id) {
      setGameState("draw")
    }
  }

  console.log(gameState)
  return (
    <div className="app">
      {/* info */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* win vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}

      <div className="choices">
        {/* choices caption */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* my choice */}
        <div>
          <button onClick={() => handleUserChoice(1)} className="rock">
            <Rock />
          </button>
          <button onClick={() => handleUserChoice(2)} className="paper">
            <Paper />
          </button>
          <button onClick={() => handleUserChoice(3)} className="scissors">
            <Scissors />
          </button>
        </div>
        
        <div className="vs">vs</div>
        
        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}


export default App;
