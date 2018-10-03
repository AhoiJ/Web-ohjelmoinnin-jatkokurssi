import Link from 'next/link'
import React from 'react';
import Clock from '../src/components/Clock'
import Countries from '../src/components/Countries'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../src/components/AppBar'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
      <ButtonAppBar />
    <div>Hello worlds!!</div>
    <div>p
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
    <Button color="primary">Test Material UI</Button>
    <br />
    <br />
    <Grid container={true}>
      <Grid item={true}>
      </Grid>
      <Grid item={true}>
        <Countries />
      </Grid>
    </Grid>
  </div>
  )
}

export default Home;
