import React from 'react';
import strawberry from './strawberry.png';
import './App.css';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        パンケーキを右の皿へ移そう！
        <img src={strawberry} alt="strawberry" style={{
          width: "60px",
          position: "relative",
          top: "12px",
          left: "3px",
        }} />
        <Paper elevation={2} sx={{
          backgroundColor: 'wheat',
          border: '1px brown',
          width: '50px',
        }}>
          &nbsp;
        </Paper>
        <Paper elevation={2} sx={{
          backgroundColor: 'wheat',
          border: '1px brown',
          width: '75px',
        }}>
          &nbsp;
        </Paper>
        <Paper elevation={2} sx={{
          backgroundColor: 'wheat',
          border: '1px brown',
          width: '100px',
        }}>
          &nbsp;
        </Paper>
        <p>
          <Button variant="contained">再チャレンジ</Button>
          <br />
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </header>
    </div>
  );
}

export default App;
