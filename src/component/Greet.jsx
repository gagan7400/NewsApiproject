import React, { Component } from 'react'

export default class Greet extends Component {
  render() {
    return (
      <div className='w-50 h-50 m-auto p-5 border border-5 text-white'>
        <h3> email:{this.props.email}</h3>
        <h3> password:{this.props.password}</h3>
        <button onClick={this.props.back}>back</button>
      </div>
    )
  }
}
