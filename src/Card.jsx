import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <span style={{width:"10px" ,marginLeft:"263px"}} onClick={this.props.delete}>&#10540;</span>
                    <img src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="ll" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
