import React from 'react';
import { checkGuess } from '../../game-helpers';

function Form({ onSubmitGuess, disabled, answer }) {
  const [guessInput, setGuessInput] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = { id: crypto.randomUUID(), results: checkGuess(guessInput, answer) };
    console.log(guess);
    onSubmitGuess(guess);
    setGuessInput('');
  };
  return <div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={disabled} pattern=".{5,5}" id="guess-input" type="text" value={guessInput} onChange={(e) => setGuessInput(e.target.value.toUpperCase())} />
    </form>
  </div>;
}

export default Form;
