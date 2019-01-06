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
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
    <h1> Tervetuloa lainausjärjestelmään </h1>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '1vh'}}>
    <body>
    Vasemmasta yläkulmasta löydät valikon, jonka avulla navigoit sivua.
    </body>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
    <body>
    Editorial nootti: syystä x y ja z kun ajaa yarn dev, navigointinäppäimet eivät toimi ennenkuin on kerran manuaalisesti navigoinut johonkin päätepisteeseen
    </body>
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

/*
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
*/
