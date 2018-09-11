import Link from 'next/link'
import React from 'react';

class Clock extends React.Component{
  render() {
    return(
    <div>
      <h2>Kello on {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}
componentDidMount(){
setInterval (Date, 1000);
}
}


export default Clock;
