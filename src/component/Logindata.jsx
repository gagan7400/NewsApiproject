
import React, { Component } from 'react';
import Styled from 'styled-components';
class Logindata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: true
        }
    }
    show = () => {
        this.setState({ type: !this.state.type })
    }
componentWillUnmount(){
    console.log("unmounted")
}

    render() {
         let Btn =Styled.button `
         border:none;
         color:red;
         background-color:${ props  => props.left? "aqua" :"yellow"};
         padding:5px 10px;
         border-radius:5px;
         transition:all 0.5s ease;
         float:${ props  => props.left? "left" :"right"};
         &:hover{
            transform:scale(1.09);
            background:blue;
            color:white;
         }
         `  
         let Div = Styled.div`
        width:400px;
        height:400px;
        background:grey;
        border:1px solid grey;
        border-radius:30px;
        margin:auto;
            `
        
         let Newdiv = Styled(Div)`
         background:black;
         `
        
         let passtype;
        let btntype;
        let cl;
        if (this.state.type) {
            passtype = "password";
            btntype="show";
            cl = "bg-success"
        } else {
            passtype = "text"
            btntype="hide";
            cl="bg-danger"
        }
        return (
            <div>
                <form className="m-auto my-5 w-50 border p-5 bg-info text-center" onSubmit={this.props.sub} >
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type={passtype} className="form-control" name="password" required />
                    </div>
                    <button type="button" className={`btn ${cl} float-start`} onClick={this.show}> {btntype}</button>
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                    <Btn> follow</Btn>
                    <Btn left > subscribe</Btn>
                </form>
                  <Div></Div>
                  <Newdiv>  </Newdiv>
            </div>
        );
    }
}

export default Logindata;
