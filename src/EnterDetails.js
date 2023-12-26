// EnterDetails.js

import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const EnterDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const team = location.state.team || null;

  const [movie, setMovie] = useState('');
  const [hint1, setHint1] = useState('');
  const [hint2, setHint2] = useState('');
  const [hint3, setHint3] = useState('');

  const handleNext = () => {
    history.push('/guess', {
      team,
      movie,
      hint1,
      hint2,
      hint3,
    });
  };

  return (
    <div className="center-container">
      <div>
        <h1>Enter Details</h1>
        
        <label>
          Movie Name:
          <div className="input-container">
            <input
              type="password"  
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              placeholder="Enter movie name"
            />
          </div>
        </label>
        
        <label>
          Hint 1:
          <div className="input-container">
            <input type="text" value={hint1} onChange={(e) => setHint1(e.target.value)} />
          </div>
        </label>
        
        <label>
          Hint 2:
          <div className="input-container">
            <input type="text" value={hint2} onChange={(e) => setHint2(e.target.value)} />
          </div>
        </label>
        
        <label>
          Hint 3:
          <div className="input-container">
            <input type="text" value={hint3} onChange={(e) => setHint3(e.target.value)} />
          </div>
        </label>
        
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default EnterDetails;
