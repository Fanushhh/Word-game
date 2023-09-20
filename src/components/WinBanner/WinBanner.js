import React from "react";
import Banner from "../Banner/Banner";
function WinBanner({ guesses, resetGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guesses > 1 ? `${guesses} guesses` : '1 guess'}.</strong>.
      </p>
      <button onClick={() => resetGame()}>Reset game</button>
    </Banner>
  );
}

export default WinBanner;
