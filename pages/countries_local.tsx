import Link from 'next/link'
import React from 'react';
import Countries from '../src/components/Countries'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Navbar from '../src/components/NavBar'
import PersistentDrawerLeft from '../src/components/Drawer'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
    <div>
          <PersistentDrawerLeft/>
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
