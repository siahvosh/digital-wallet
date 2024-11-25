import React from 'react';
import './App.css';
import {Routers} from './Routers/Routers'
import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./Context/DataContext";

function App() {
  return (
      <DataProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <Routers/>
          </Router>
        </header>
      </div>
      </DataProvider>
  );
}

export default App;
