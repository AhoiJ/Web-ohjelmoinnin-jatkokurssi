import Link from 'next/link'
import React from 'react';
import Clock from '../src/components/Clock'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Navbar from '../src/components/AppBar'


const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
    <div>
          <Navbar/>
    </div>
    <Button color="primary">Test Material UI</Button>
    <br />
    <br />
    <Grid container={true}>
      <Grid item={true}>
      </Grid>
      <Grid item={true}>
        <Clock />
      </Grid>
    </Grid>
  </div>
  )
}
export default Home;