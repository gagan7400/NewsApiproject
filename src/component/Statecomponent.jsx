import React, { Component } from 'react'

export default class Statecomponent extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0,   
      } 
      //  this.inc = this.inc.bind(this) 
    }
    inc(){     
  this.setState({ count:this.state.count+1})
    }
     dec =()=>{
       if( this.state.count<=0){

       }else{
           this.setState({ count:this.state.count-1})
       }
    }  
  render() {  
    return (
      <div>
        <button onClick={this.inc.bind(this)}> increment</button>
        <h1> {this.state.count}</h1>
        <button onClick={this.dec}> decrement</button>
       </div>
    )
  }
}

