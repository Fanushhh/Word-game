import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS)); // [answer, setAnswer
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");
  
  // Check if the game is over.
  function resetGame() {
    setGuesses([]);
    setGameStatus("playing");
    setAnswer(sample(WORDS));
  }
  function handleSubmitGuess(tentativeGuess) {
    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (guesses.length >= 5) {
      setGameStatus("lost");
    }
    setGuesses([...guesses, tentativeGuess]);
  }
  console.log(answer);
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {gameStatus === "won" && <WinBanner guesses={guesses.length} resetGame={resetGame}/>}
      {gameStatus === "lost" && <LostBanner answer={answer} guesses={guesses.length} resetGame={resetGame}/>}
    </>
    
  );
}

export default Game;
