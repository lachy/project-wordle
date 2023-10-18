import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form'
import Results from '../Results'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('');
  const onSubmitGuess = (guess) => {
    const newHistory = [...guessHistory, guess];
    setGuessHistory(newHistory);

    if (guess.results.every(r => r.status === 'correct')) {
      setGameStatus('win');
    } else {
      if (newHistory.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lose');
      }
    }
  };
  
  return <>
          <Results guessHistory={guessHistory} />
          <Form 
            answer={answer}
            onSubmitGuess={onSubmitGuess} 
            disabled={gameStatus === 'win' || gameStatus === 'lose'}
          />
          {
            gameStatus &&
            <GameStatus status={gameStatus} answer={answer} numOfGuesses={guessHistory.length} />
          }
        </>;
}

function GameStatus({ status, answer, numOfGuesses }) {
  if (status === 'win') {
    return <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {numOfGuesses} guesses</strong>.
              </p>
            </div>;
  }
  if (status === 'lose') {
    return  <div className="sad banner">
              <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>;
  }
  return <></>;
}

export default Game;
