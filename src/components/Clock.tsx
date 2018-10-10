import Link from 'next/link'
import React from 'react';

interface IClockState{
  counter: number;
}



class Clock extends React.Component <{}, {IClockState}>{
private timerID = null;
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
    }
  };
  public componentDidMount() {
this.timerID = window.setInterval(
() => this.updateCounter(),
1000,
)
  }
  private updateCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }
  private componentWillUnmount(){
    window.clearInterval(this.timerID);
  }

public render() {
  let dateNow = new Date();
  const hourZero = dateNow.getHours() < 10 ? '0' :"" ;
  const minuteZero = dateNow.getMinutes() < 10 ? '0' :"" ;
  const secondZero = dateNow.getSeconds() < 10 ? '0' : "";
  const dateString = `Nyt on ${hourZero}${dateNow.getHours()}.${minuteZero}${dateNow.getMinutes()}.${secondZero}${dateNow.getSeconds()}`;
  return (
    <div>
===================================
      <br/>
      {dateString}
      <br />
      <br />
    ===================================
    </div>
  )
}
}


export default Clock;
