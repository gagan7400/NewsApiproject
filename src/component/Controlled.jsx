import React, { Component } from 'react'

export default class Controlled extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "sc", password: "sc"
    }
  }
  sub = (event) => {
    event.preventDefault()
  }
 
  render() {
   
    return (
      <div>
        <form className="m-auto my-5 w-50 border p-5 bg-info text-center z-index-5" onSubmit={this.sub} >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input  type="password" className="form-control" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} required /> 
          </div>
        
        
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
