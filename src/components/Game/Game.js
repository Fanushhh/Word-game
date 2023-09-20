import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS)); // [answer, setAnswer
  const [guesses, setGuesses] = React.useState([]);
  const [isWon, setIsWon] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);

  // Check if the game is over.
  function resetGame() {
    setGuesses([]);
    setGameOver(false);
    setIsWon(false);
    setAnswer(sample(WORDS));
  }
  function handleSubmitGuess(tentativeGuess) {
    if (tentativeGuess === answer) {
      setIsWon(true);
      setGameOver(true);
    } else if (guesses.length >= 5) {
      setGameOver(true);
      setIsWon(false);
    }
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {gameOver ? (
        <Banner
          isWon={isWon}
          guesses={guesses}
          answer={answer}
          resetGame={resetGame}
        />
      ) : (
        <GuessForm handleSubmitGuess={handleSubmitGuess} />
      )}
    </>
  );
}

export default Game;
