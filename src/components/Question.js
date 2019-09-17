import React, { Component } from 'react';
import Slider from './Carousel.js';



class Question extends Component {
    constructor(props){
        super(props)
        this.state = { 
        }
  }

  render() {
    return (
    <>
        {/* {
            this.props.index+1 == this.props.question.id ? (
             <div className="actualImages">
             <img src= {this.props.question.image}>
             </img>
             </div>
            ) : null
        } */}
             <div className="actualImages">
             <img src= {this.props.question.image}>
             </img>
             </div>
       
    </>
    )
  }
}

export default Question