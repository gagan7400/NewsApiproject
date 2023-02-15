import React, { Component } from 'react';
import cs from  '../assets/css/Home.module.css';
import img from '../assets/images/img.jpg';

class Home extends Component {
    render() {       
        return (
        <>
            <div className={cs.main_home}>
                <div className={cs.inner}>                  
                    <img src={img} alt="" />
                    <h2 > hello Home page</h2>
                    <h3 > WelCome to My Page </h3>
                </div>    
            </div>    
        </>
        );
    }
}

export default Home;

