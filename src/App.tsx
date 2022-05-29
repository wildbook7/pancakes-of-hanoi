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
  const [plates, setPlates] = useState([[1,2,3,4],[0,0,0,0],[0,0,0,0]])
  const [strawberryFlag, setStrawberryFlag] = useState(false)

  const change = () => setStrawberryFlag(!strawberryFlag)

  const move = (src: number, dst: number) => {
    const newPlates = plates.slice()
    labelMoved:
    for (let i = 0; i < newPlates[src].length; i++) {
      if (!(newPlates[src][i])) continue
      for (let j = newPlates[dst].length - 1; j >= 0 ; j--) {
        if (newPlates[dst][j]) continue
        //
        newPlates[dst][j] = newPlates[src][i]
        newPlates[src][i] = 0

        setPlates(newPlates)
        break labelMoved
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        [開発中] パンケーキを右の皿へ移そう！
        <Grid container spacing={2} sx={{ width: '800px' }}>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.6}>
          <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
            {plates[0].map( value =>
              <CustomPaper
                sx={ value === 0 ? {visibility: 'hidden'} : { width: `${25 * (value + 1)}px` }}
              >
                &nbsp;
              </CustomPaper>
            )}
          </Stack>
          </Grid>
          <Grid item xs={2.6}>
          <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
            {plates[1].map( value =>
                <CustomPaper
                  sx={ value === 0 ? {visibility: 'hidden'} : { width: `${25 * (value + 1)}px` }}
                >
                  &nbsp;
                </CustomPaper>
              )}
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
              {plates[2].map( value =>
                <CustomPaper
                  sx={ value === 0 ? {visibility: 'hidden'} : { width: `${25 * (value + 1)}px` }}
                >
                  &nbsp;
                </CustomPaper>
              )}
            </Stack>
          </Grid>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={1.3}></Grid>
          <Grid item xs={1.3}>
            <Button variant="contained" onClick={ () => move(0, 1) }>&nbsp;--&gt;&nbsp;</Button>
          </Grid>
          <Grid item xs={1.3}>
            <Button variant="contained" onClick={ change }>&nbsp;&lt;--&nbsp;</Button>
          </Grid>
          <Grid item xs={1.3}>
            <Button variant="contained" onClick={ () => move(1, 2) }>&nbsp;--&gt;&nbsp;</Button>
          </Grid>
          <Grid item xs={1.3}>
            <Button variant="contained" onClick={ change }>&nbsp;&lt;--&nbsp;</Button>
          </Grid>
          <Grid item xs={1.3}></Grid>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={1.3}></Grid>
          <Grid item xs={1.3}>
            <Button variant="contained" onClick={ change }>----&gt;</Button>
          </Grid>
          <Grid item xs={2.6}></Grid>
          <Grid item xs={1.3}>
            <Button variant="contained" onClick={ change }>&lt;----</Button>
          </Grid>
        </Grid>
        <p>
          <Button variant="contained" onClick={ change }>再チャレンジ</Button>
          <br />
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </header>
    </div>
  );
}

export default App
