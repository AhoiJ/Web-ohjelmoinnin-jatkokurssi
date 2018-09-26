import Link from 'next/link'
import React from 'react';
import Clock from '../src/components/Clock'
import Countries from '../src/components/Countries'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

/* Tehtävät React 2a asti
const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  const dateNow = new Date();
  const array = [...Array(10)];

  return (
   <div>
    <div>Hello World!</div>
      <Link href="/about">
      <a>About</a>
    </Link>

    <div>
      <Button color="primary">Material UI Test Button</Button>
        {`Tänään on ${dateNow.getDate()}.${dateNow.getMonth()+1}.${dateNow.getFullYear()}`}
  </div>

<div>
{array.map((item, index) =>(
   <Clock key={index}/>
 ))}
</div>


</div>
  )
}
*/




const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  return (
    <div>
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
