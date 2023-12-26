import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './GuessPage.css'; // Import the CSS file

const GuessPage = ({setScores, scores}) => {
  const history = useHistory();
  const location = useLocation();
  const { team, movie, hint1, hint2, hint3 } = location.state || {};

  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    if (guess === movie) {
      alert('Hurray! You guessed it right.');
      history.push('/');
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        alert(`Sorry, you've run out of attempts. The movie was ${movie}.`);
        history.push('/');
      } else {
        alert('Incorrect guess. Try again!');
        setGuess('');
      }
    }
    const handleGuess = (correctGuess) => {
        if (correctGuess) {
          alert('Hurray! You guessed it right.');
          // Increase the score only when the guess is correct
          setScores((prevScores) => ({
            ...prevScores,
            [team]: (prevScores[team] || 0) + 1,
          }));
        } else {
          alert(`Oh no! Wrong guess. The movie was ${movie}.`);
        }
        history.push('/');
      };
  };

  return (
    <div className="center-container">
      <div className="guess-page">
        <h1>Guess Page</h1>
        <p>Hi Oponent team its your turn to guess the movie</p>
        <p>Hints: {hint1}, {hint2}, {hint3}</p>
        <label>
          Enter your guess:
          <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
        </label>
        <br />
        <button onClick={handleGuess}>Submit Guess</button>
      </div>
     
    </div>
    
  );
};

export default GuessPage;
