import React, { Component } from 'react'
import Greet from './Greet'
import Logindata from './Logindata'

export default class Parentlogin extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           email:"" ,password:"" ,show:true
        }
      }
      
      changehandler = (event) => {
          event.preventDefault();
       let email = event.target.email.value ;      
       let password = event.target.password.value ;
          this.setState({
              email ,password ,show:false
          }) 
          
      }
      back=()=>{
        this.setState({
          show:true
        })
      }
  render() {
    return (
      <div> { this.state.show?
        <Logindata sub={this.changehandler}/> :
        <Greet email={this.state.email} password={this.state.password} back={this.back}/>}
      </div>
    )
  }
}

