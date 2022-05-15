import React, { useState } from 'react';
import strawberry from './strawberry.png';
import './App.css';
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material';

const CustomPaper = styled(Paper)(() => ({
  backgroundColor: 'khaki',
  elevation: 4,
  fontSize: '16px',
}))

function App() {
  const [strawberryFlag, setStrawberryFlag] = useState(false)

  const change = () => setStrawberryFlag(!strawberryFlag)

  return (
    <div className="App">
      <header className="App-header">
        パンケーキを右の皿へ移そう！
        <Grid container spacing={2} sx={{ width: '800px' }}>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.6}>
          <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
              <CustomPaper sx={{ width: '50px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '75px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '100px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '125px' }}>&nbsp;</CustomPaper>
            </Stack>
          </Grid>
          <Grid item xs={2.6}>
          <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
              <CustomPaper sx={{ width: '50px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '75px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '100px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '125px' }}>&nbsp;</CustomPaper>
            </Stack>
          </Grid>
          <Grid item xs={2.6}>
            <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
              <img src={strawberry} alt="strawberry" style={{
                width: "60px",
                position: "relative",
                top: "13px",
                left: "5px",
                visibility: strawberryFlag? "visible" : "hidden",
              }} />
              <CustomPaper sx={{ width: '50px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '75px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '100px' }}>&nbsp;</CustomPaper>
              <CustomPaper sx={{ width: '125px' }}>&nbsp;</CustomPaper>
            </Stack>
          </Grid>
        </Grid>
        <p>
          <Button variant="contained" onClick={ change }>再チャレンジ</Button>
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
