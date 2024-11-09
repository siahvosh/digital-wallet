import React from 'react';
import './App.css';
import {Routers} from './Routers/Routers'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Routers/>
          </Router>
        </header>
      </div>
  );
}

export default App;
