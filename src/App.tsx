import React from 'react';
import './App.css';
import {Routers} from './Routers/Routers'
import {BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import i18n from "./i18next"


const a = true

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                 root: {
                    '& .MuiInputLabel-root': {
                        textAlign: a ? 'right' : 'left',
                        right: a ? 0 : 'auto',
                        left: a ? 'auto' : 0,
                    },
                    '& .MuiInputBase-input': {
                        textAlign: a ? 'right' : 'left'
                    },
                },
            },
        },
    },
});
function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              {i18n.language}
            <header className="App-header">
              <Router>
                <Routers/>
              </Router>
            </header>
          </div>
      </ThemeProvider>
  );
}

export default App;
