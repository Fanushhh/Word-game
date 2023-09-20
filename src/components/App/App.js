import Game from '../Game';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';
import Header from '../Header';
import React from 'react';

function App() {
  
  

  return (
    <div className="wrapper">
      <Header />
      
      <div className="game-wrapper">
        
        <Game />
        
      </div>
    </div>
  );
}

export default App;
