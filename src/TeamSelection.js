import React from 'react';
import { useHistory } from 'react-router-dom';
import './TeamSelection.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const TeamSelection = ({ setScores }) => {
    const history = useHistory();
  
    const handleTeamSelection = (selectedTeam, correctGuess) => {
      console.log(`Team selected: ${selectedTeam}`);
      // Navigate to the next page after selecting a team
      history.push('/enterdetails', { team: selectedTeam });
      if (correctGuess) {
        setScores((prevScores) => ({
          ...prevScores,
          [selectedTeam]: (prevScores[selectedTeam] || 0) + 1,
        }));
      }
    };

  return (
    <div className="center-container"> {/* Add a container div with a class */}
      <div className="team-selection">
        <h1>Team Selection</h1>
        <button onClick={() => handleTeamSelection(1)}>Team 1</button>
        <button onClick={() => handleTeamSelection(2)}>Team 2</button>
      </div>
    </div>
  );
};

export default TeamSelection;
