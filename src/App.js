// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TeamSelection from './TeamSelection';
import EnterDetails from './EnterDetails';
import GuessPage from './GuessPage';
import Chat from './Chat'; // Import the Chat component

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [scores, setScores] = useState({});

  const addMessage = (message) => {
    setChatMessages([...chatMessages, message]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TeamSelection scores={scores} setScores={setScores} />
        </Route>
        <Route path="/enterdetails">
          <EnterDetails addMessage={addMessage} scores={scores} setScores={setScores} />
        </Route>
        <Route path="/guess">
          <GuessPage scores={scores} />
        </Route>
        <Route path="/chat">
          <Chat chatMessages={chatMessages} addMessage={addMessage} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
