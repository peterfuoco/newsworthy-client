import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import {Button, Card, Row, Col} from "react-materialize";
import axios from 'axios';
import Question from './Question';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrows"> 
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height:"50px", fontSize:"50px"}}
      onClick={onClick}
    />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}


class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
     showQuestionResult: 'none',
     correctAnswerResult: null
    }
    this.doIt = this.doIt.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  // nextSlide() {
  //   slickNext();
  //   console.log('next slide')
	// }
	// previousSlide() {
  //   slickPrev();
  //   console.log('previous slide')
  // }
// doIt = (question_id, result) => fetch.get('/results/create', { question_id, result } ) }
componentDidMount() {
//  this.doIt()
}

async doIt (correctAnswer, userAnswer) {  
  if (correctAnswer == userAnswer)
  {
    this.setState({
      showQuestionResult: true,
      correctAnswerResult: true
    })
  }
  else 
  {
    this.setState({
      showQuestionResult: false,
      correctAnswerResult: false
    })
  }

  // await axios.get('/results/create', 
  // {
  //   question_id: question_id,
  //   user_result: result
  // } )

 }

 reset() {
   this.setState({
     showQuestionResult: 'none',
     correctAnswerResult: 'none'
   })
 }

 renderResult() {
   if(this.state.showQuestionResult!= 'none')
   {
     if(this.state.showQuestionResult){
       return (
         <h1>CORRECT!</h1>

       )
     } else {
       return (
         <h1>WRONG</h1>
       )
     }
   } else {
     return null;
   }
 }


    render () {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: this.reset,
            afterChange: this.reset,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
          return (    
            <Slider {...settings}>
            {this.props.questions.map((question) => {
                return (
                  <div className='cardContainer'> 
                <Row>
                <Col m={6} s={12}>
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
                >
                <Question question={question} index={this.state.currentQuestionIndex}  />
                  <Button onClick={()=> this.doIt(question.answer, true)}
                    //  /results/create?=user_id=5&question_id=6&result=false
                    //on click function for both buttons
                    // </div>')
                    className="trueButton" 
                    title='button' 
                    >
                  TRUE  
                  </Button>
                  <Button onClick={()=> this.doIt(question.answer, false)}
                    className="falseButton" 
                    title='button' 
                    >     
                  FAKE
                  </Button>
                  {this.renderResult()}
                  {
                    this.state.correctAnswerResult == true ? <p id="correct">TRUE{question.correctExp}</p> :
                    <p></p>
                  }
                  {
                    this.state.correctAnswerResult == false ? <p id="incorrect">FALSE{question.incorrectExp}</p> :
                    <p></p>
                  }
                  
                  
                  </Card>
                  

                 
                  
                  </Col>
                </Row>
                </div>
  )
}
)
}

{/* /* function for both buttons
doIt = (question_id, result) => fetch.get('/results/create', { question_id, result } ) }
 */


                // <div className='shit'>
                //   <h1>  {question.title} </h1>
                // </div>          
                  // <div className="card"> 
                  // <h1>  {question.title} </h1>
                  // <img src={question.image} alt='alt title'/>
                  // <a class="waves-effect waves-light btn">button</a>
                  // <button className='questionButton' onClick={this.nextSlide}>
									// Next Slide
								  // </button>

                  // <button className='questionButton' onClick={this.previousSlide}>
									// Previous Slide
								  // </button>
                  
                  // </div>
            }
            
          </Slider>

          )
    }
}

export default Carousel