import React from 'react';
import { range } from '../../utils';

const Guess = ({ guess }) => {

  if (!guess) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }

  // if (guess.results.some((r) => r.status === 'correct')) {
  //   onSuccess();
  // }

  return (
    <p className="guess">
      {
        guess.results.map((result, i) => (
          <span 
            key={`${result.letter}-${i}`} 
            className={`cell ${result.status}`}
          >
            {result.letter}
          </span>
        ))
      }
    </p>
  );
};

function Results({ guessHistory, answer }) {
  return <div className="guess-results">
    {
      range(0, 6).map((i) => {
        const guess = guessHistory[i];
        return <Guess key={i} guess={guess} />;
      })
    }
</div>;
}

export default Results;
