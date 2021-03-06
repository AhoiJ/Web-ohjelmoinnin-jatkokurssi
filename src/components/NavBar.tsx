import Link from 'next/link';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Navbar: React.SFC<{}> = () => (
  <AppBar position="static">
    <Toolbar>
      <Link href="/"><Button color="inherit">Lainausjärjestelmä</Button></Link>

    </Toolbar>
  </AppBar>
)

export default Navbar;


/* <Link href="/clock"><Button color="inherit">Clock</Button></Link>
  <Link href="/countries_local"><Button color="inherit">Local Countries</Button></Link>
  <Link href="/countries_remote"><Button color="inherit">Remote Countries</Button></Link>*/
