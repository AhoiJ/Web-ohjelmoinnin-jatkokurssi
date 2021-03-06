import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Navbar from '../src/components/Navbar'
import User from '../src/components/Users'
import UserSearch from '../src/components/UserWithSearch'
import PersistentDrawerLeft from '../src/components/Drawer'

const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
    <div>
          <PersistentDrawerLeft/>
    </div>

    <Grid container={true}>
      <Grid item={true}>
      </Grid>
      <Grid item={true}>
        <UserSearch />
      </Grid>
    </Grid>
  </div>
  )
}
export default Home;
