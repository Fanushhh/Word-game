import React from "react";

function Banner({ isWon, guesses, answer, resetGame }) {

  return (
    <div className={`banner ${isWon === true ? "happy" : "sad"}`}>
      {isWon === true ? (
        <div className="resultInfo">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{" "}{guesses.length} {guesses.length > 1 ? "attempts" : 'attempt'}.</strong>
          
        </p>
        <button className="resetButton" onClick={() => resetGame()}>Reset game</button>
        </div>
      ) : (
        <div className="resultInfo">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
          
        </p>
        <button className="resetButton" onClick={() => resetGame()}>Reset game</button>
        </div>
      )}
    </div>
  );
}

export default Banner;
