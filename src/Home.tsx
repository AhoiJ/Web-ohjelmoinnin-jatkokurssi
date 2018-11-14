import Link from 'next/link'
import React from 'react';
import Clock from '../src/components/Clock'
import Countries from '../src/components/Countries'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Navbar from '../src/components/NavBar'
import PersistentDrawerLeft from '../src/components/Drawer'
import Typography from '@material-ui/core/Typography';

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
    <div> <PersistentDrawerLeft /></div>
    
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>

    <br />
    <br />
    <Grid container={true}>
      <Grid item={true}>
      </Grid>
      <Grid item={true}>
      </Grid>
    </Grid>
  </div>
  )
}

export default Home;
