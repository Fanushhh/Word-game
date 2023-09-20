import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessForm({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (tentativeGuess.length !== 5) {
      alert("Please enter a 5 letter word");
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          autoComplete="off"
          pattern="[A-Za-z]{5}"
          title="5 letters only"
          value={tentativeGuess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          id="guess-input"
          type="text"
        />
      </form>
    </div>
  );
}

export default GuessForm;
