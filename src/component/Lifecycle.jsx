import React, { Component } from 'react'
export default class Lifecycle extends Component {
  constructor(props) {
    console.log("hello constructor");
    super(props)
    this.state = {
      name: "rahul"
    }
  }
  componentDidMount() {

    console.log("hello didmount");
  }


  change = () => {
    this.setState({
      name: "rajesh"
    })
  }
  shouldComponentUpdate(nextp ,nexts){
    console.log("should",    nexts)
     return true;
  }
  componentDidUpdate(){
    console.log("updated")
  }
  render() {
    console.log('hello render');
    return (
      <div>
        <h3> hello Life cycle methods {this.state.name}</h3>
        <button onClick={this.change}>change name</button>
      </div>
    )
  }
}
