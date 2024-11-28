import React from 'react';
import './App.css';
import {Routers} from './Routers/Routers'
import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./Context/DataContext";
import {AuthProvider} from "./Context/AuthContext";

function App() {
  return (
      <DataProvider>
          <AuthProvider>
              <div className="App">
                <header className="App-header">
                  <Router>
                    <Routers/>
                  </Router>
                </header>
              </div>
          </AuthProvider>
      </DataProvider>
  );
}

export default App;
