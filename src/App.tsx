import { useEffect, useState } from 'react';
import strawberry from './strawberry.png';
import './App.css';
import Box from '@mui/material/Box'
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

const CustomPaper2 = styled(Paper)(() => ({
  backgroundColor: 'none',
  elevation: 4,
  fontSize: '16px',
}))

function App() {
  const [plates, setPlates] = useState(['1234', '0000', '0000'])
  const [strawberryFlag, setStrawberryFlag] = useState(false)

  const reset = () => {
    setPlates(['1234', '0000', '0000'])
  }

  const move = (src: number, dst: number) => {
    const newPlates = plates.slice()
    labelMoved:
    for (let i = 0; i < newPlates[src].length; i++) {
      if ('0' == newPlates[src][i]) continue
      for (let j = newPlates[dst].length - 1; j >= 0 ; j--) {
        if ('0' != newPlates[dst][j]) continue
        //
        //
        newPlates[dst] = ''.concat(
          newPlates[dst].substring(0, j),
          newPlates[src][i],
          newPlates[dst].substring(j + 1)
          )
        newPlates[src] = ''.concat(
          newPlates[src].substring(0, i),
          '0',
          newPlates[src].substring(i + 1)
          )

        setPlates(newPlates)
        break labelMoved
      }
    }
  }

  useEffect(() => {
    if ('1234' == plates[2]) {
      setStrawberryFlag(true)
    } else {
      setStrawberryFlag(false)
    }
  }, [plates])

  return (
    <div className="App">
      <header className="App-header">
        パンケーキを右の皿へ移そう！
        <Grid container spacing={2} sx={{ width: '800px' }}>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.6}>
            <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
              {Array.from(plates[0]).map( value =>
                <CustomPaper
                  sx={ '0' == value ? {visibility: 'hidden'} : { width: `${25 * (parseInt(value) + 1)}px` }}
                >
                  &nbsp;
                </CustomPaper>
              )}
            </Stack>
          </Grid>
          <Grid item xs={2.6}>
            <Stack spacing={0.3} alignItems={'center'} justifyContent={'flex-end'} sx={{ height: '120px' }}>
              {Array.from(plates[1]).map( value =>
                <CustomPaper
                  sx={ '0' == value ? {visibility: 'hidden'} : { width: `${25 * (parseInt(value) + 1)}px` }}
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
              {Array.from(plates[2]).map( value =>
                <CustomPaper
                  sx={ '0' == value ? {visibility: 'hidden'} : { width: `${25 * (parseInt(value) + 1)}px` }}
                >
                  &nbsp;
                </CustomPaper>
              )}
            </Stack>
          </Grid>
          <Grid item xs={2.1}></Grid>

          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.6}>
            <CustomPaper2
              sx={{
                backgroundColor: 'seagreen',
                borderRadius: '0px 0px 15px 15px',
                height: '6px',
                position: 'relative',
                bottom: '9px'
              }}
            />
          </Grid>
          <Grid item xs={2.6}>
            <CustomPaper2
              sx={{
                backgroundColor: 'seagreen',
                borderRadius: '0px 0px 15px 15px',
                height: '6px',
                position: 'relative',
                bottom: '9px'
              }}
            />
          </Grid>
          <Grid item xs={2.6}>
            <CustomPaper2
              sx={{
                backgroundColor: 'seagreen',
                borderRadius: '0px 0px 15px 15px',
                height: '6px',
                position: 'relative',
                bottom: '9px'
              }}
            />
          </Grid>
          <Grid item xs={2.1}></Grid>

          <Grid item xs={2.1}></Grid>
          <Grid item xs={1.3}></Grid>
          <Grid item xs={1.3}>
            <Button
              variant="contained"
              disabled={ '0000' == plates[0] || parseInt(plates[0]).toString().charAt(0)
                >  ('0000' == plates[1] ? '5' : parseInt(plates[1]).toString().charAt(0)) }
              onClick={ () => move(0, 1) }
            >
              &nbsp;--&gt;&nbsp;
            </Button>
          </Grid>
          <Grid item xs={1.3}>
            <Button
              variant="contained"
              disabled={ '0000' == plates[1] || parseInt(plates[1]).toString().charAt(0)
                >  ('0000' == plates[0] ? '5' : parseInt(plates[0]).toString().charAt(0)) }
              onClick={ () => move(1, 0) }
            >
              &nbsp;&lt;--&nbsp;
            </Button>
          </Grid>
          <Grid item xs={1.3}>
            <Button
              variant="contained"
              disabled={ '0000' == plates[1] || parseInt(plates[1]).toString().charAt(0)
                >  ('0000' == plates[2] ? '5' : parseInt(plates[2]).toString().charAt(0)) }
              onClick={ () => move(1, 2) }
            >
              &nbsp;--&gt;&nbsp;
            </Button>
          </Grid>
          <Grid item xs={1.3}>
            <Button
              variant="contained"
              disabled={ '0000' == plates[2] || parseInt(plates[2]).toString().charAt(0)
                >  ('0000' == plates[1] ? '5' : parseInt(plates[1]).toString().charAt(0)) }
              onClick={ () => move(2, 1) }
            >
              &nbsp;&lt;--&nbsp;
            </Button>
          </Grid>
          <Grid item xs={1.3}></Grid>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={2.1}></Grid>
          <Grid item xs={1.3}></Grid>
          <Grid item xs={1.3}>
            <Button
              variant="contained"
              disabled={ '0000' == plates[0] || parseInt(plates[0]).toString().charAt(0)
                >  ('0000' == plates[2] ? '5' : parseInt(plates[2]).toString().charAt(0)) }
              onClick={ () => move(0, 2) }
            >
              ----&gt;
            </Button>
          </Grid>
          <Grid item xs={2.6}></Grid>
          <Grid item xs={1.3}>
            <Button
              variant="contained"
              disabled={ '0000' == plates[2] || parseInt(plates[2]).toString().charAt(0)
                >  ('0000' == plates[0] ? '5' : parseInt(plates[0]).toString().charAt(0)) }
              onClick={ () => move(2, 0) }>
              &lt;----
            </Button>
          </Grid>
        </Grid>
        <p>
          <Button variant="contained" onClick={ reset }>再チャレンジ</Button>
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
