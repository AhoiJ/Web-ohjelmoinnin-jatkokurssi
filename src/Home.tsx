import Link from 'next/link'
import React from 'react';


const Home: React.SFC<{prop1: string, prop2: number}> = () => {
  const dateNow = new Date();
  return (
   <div>
    <div>Hello World!</div>
      <Link href="/about">
      <a>About</a>
    </Link>
    <div>

{`Tänään on ${dateNow.getDate()}.${dateNow.getMonth()+1}.${dateNow.getFullYear()}`}

  </div>

</div>
  )
}

export default Home;
