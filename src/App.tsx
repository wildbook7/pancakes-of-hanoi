import React from 'react';
import strawberry from './strawberry.png';
import './App.css';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const CustomPaper = styled(Paper)(() => ({
  backgroundColor: 'khaki',
  elevation: 4,
  fontSize: '16px',
}))

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
        <Stack spacing={0.3} alignItems="center">
          <CustomPaper sx={{ width: '50px' }}>&nbsp;</CustomPaper>
          <CustomPaper sx={{ width: '75px' }}>&nbsp;</CustomPaper>
          <CustomPaper sx={{ width: '100px' }}>&nbsp;</CustomPaper>
        </Stack>
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
