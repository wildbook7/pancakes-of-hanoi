import React from 'react';
import strawberry from './strawberry.png';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        パンケーキを右の皿へ移そう！
        <img src={strawberry} alt="strawberry" style={{ width: "50px"}} />
        <p>
          <Button variant="contained">再チャレンジ</Button>
          <br />
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </header>
    </div>
  );
}

export default App;
