import React, { Component } from 'react'

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      val:[0,0],
      i:0,
    }
  }
  // componentWillMount()
  //  {
  //    this.setState({color:'green'});
  //  }
  // componentDidMount()
  //  {  
  //   this.setState({color:'blue'});
  //  }
  shouldComponentUpdate(nextProps,nextState)
   {
    const {val} = this.state;
    const {i, val: nextValue} = nextState;
    console.log('Value', val);
    console.log('nextValue', nextValue);
    if (val[i] !== nextValue[i]){
        return true;
    }
    return false;
   }
  componentWillUpdate()
  {
     this.color1='blue';
     console.log('I will be updated soon');
  }
  componentDidUpdate()
  {
     console.log('I got Updated');
     this.color2='red';
  }
  handleClick1=()=>{
    const [, second] =this.state.val;
    this.setState({val: [1, second]});
    this.setState({i:0});
  }
  handleClick2=()=>{
    const [first,]=this.state.val;
    this.setState({val: [first, 1]});
    this.setState({i:1});
}
  render() {
    const color1=this.color1;
    const color2=this.color2; 
    return (
      <div>
        <div style={{backgroundColor: color1, height: '50vh'}}>
          <button type="button" onClick={this.handleClick1}>Click me1</button>
        </div>
        <div style={{backgroundColor: color2, height: '50vh'}}>
          <button type="button" onClick={this.handleClick2}>Click me2</button>
        </div>
      </div>

    )
  }
}
