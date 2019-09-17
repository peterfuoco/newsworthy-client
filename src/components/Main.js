import React, { Component } from 'react';
import Slider from './Carousel.js';



class Questions extends Component {
	constructor(props){
        super(props)
        this.state = {
          
        }
        this.refs = React.createRef()
        this.nextSlide = this.nextSlide.bind(this);
		    this.previousSlide = this.previousSlide.bind(this);
  }
  
  
  nextSlide() {
    this.refs.slider.slickNext();
    console.log('next slide')
	}

	previousSlide() {
    this.refs.slider.slickPrev();
    console.log('previous slide')
	}

  render () {
    
      const settings = {
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        className: 'innerSliderDiv',
        draggable: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
        {
          this.props.questions.map(question => {
            return(
              // <Slider ref='slider' {...settings}>
              //   <div>
              // <h1>  {question.title} </h1>
              // <div className='image'> 
              // <img src='{question.image}' alt='alt title'/>
              // </div>
              // <button className='questionButton' onClick={this.nextSlide}>
							// 		Next Slide
							// 	</button>

              //   <button className='questionButton' onClick={this.previousSlide}>
							// 		Previous Slide
							// 	</button>
              // </div>
              // </Slider>
      <div></div>
          )})
        }
      </>
    )
  }
  }

// function Main (props) {
//     const {questions} = props
//       return (
//         <main>
//           <Questions
//            questions={questions}
//           />
//         </main>
//       )
//   }

// const Questions = props => {
//     const {question} = props
//       return (
//         <>
//           <label htmlFor={question}>{question}</label>
//           <input
//             question={question}
//           />
//         </>
//       )
//   }

// function Main (props) {
//     const { questions } = props
//       return (
//         <main>

//       )
//   }
   

export default Questions