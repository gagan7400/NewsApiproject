import React, { Component } from 'react';
import Card from './Card';
class Parentcard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                { id: 0, img: "https://picsum.photos/id/1/200/300", title: "firstcard" },
                { id: 1, img: "https://picsum.photos/id/237/200/300", title: "secondcard" },
                { id: 2, img: "https://picsum.photos/200/300?grayscale", title: "thirdcard" },
                { id: 3, img: "https://picsum.photos/200/300/?blur", title: "fourthcard" },
                { id: 4, img: "https://picsum.photos/id/870/200/300?grayscale&blur=2", title: "fifthcard" },
            ],
            show: true
        }
    }
    change = () => {
        console.log("before", this.state.show)
        this.setState({
            show: !this.state.show
        }, () => { console.log("then", this.state.show) })
    }
   deletecard=(i)=>{
    console.log(this.state.list)
      let copyarray = this.state.list;
       copyarray.splice(i ,1);
       this.setState({
        list: copyarray
       } ,()=>{console.log(this.state.list ,i)})
   }
    render() {
        let maping = this.state.list.map((value, index) => {
            return (
                <Card key={index} img={value.img} title={value.title} delete={ ()=>{this.deletecard(index)}} />
            )
        })
        return (
            <div>
                <button onClick={this.change}>toggle</button>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {this.state.show ? maping : ""}
                </div>
            </div>
        );
    }
}

export default Parentcard;
