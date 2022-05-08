import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button variant="contained">Hello mui</Button>
          <br />
          Edit <code>src/App.tsx</code>(v2) and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
