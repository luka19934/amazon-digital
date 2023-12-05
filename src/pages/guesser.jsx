import React, { useState } from "react";

const NumberGuesser = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState("");
  const [answer, setAnswer] = useState("");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleChange = (event) => {
    setUserGuess(event.target.value);
  };

  const guess = parseInt(userGuess);

  if (guess === randomNumber) {
    setAnswer("correct number!");
  } else {
    setAnswer("wrong number!");
  }

  const handleSubmit = () => {
    setRandomNumber(generateRandomNumber());
    setUserGuess("");
    setAnswer("");
  };

  return (
    <div>
      <h1>Number Guesser Game</h1>
      <input type="number" value={userGuess} onChange={handleChange} />
      Result number: <span>{`${answer}`}</span>
      <button onClick={handleSubmit}>Start Game</button>
    </div>
  );
};

export default NumberGuesser;
