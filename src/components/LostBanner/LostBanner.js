import React from "react";
import Banner from "../Banner/Banner";
function LostBanner({ answer, resetGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={() => resetGame()}>Reset game</button>
    </Banner>
  );
}

export default LostBanner;
