import React from 'react'
import './App.css'
import Main from './components/Main.js'
import axios from 'axios'
import Carousel from './components/Carousel'
import Modal from 'react-modal';



class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        questions: [],
        modalIsOpen: false,
			  currentModal: '',
      }
      this.openModal = this.openModal.bind(this);
		  this.closeModal = this.closeModal.bind(this); 
    }

    openModal(keyModal) {
      this.setState({ modalIsOpen: true, currentModal: keyModal });
    }
  
    closeModal() {
      this.setState({
        modalIsOpen: false,
        displayName: 'Peter'
      });
    }

    componentDidMount() {
      this.getQuestions()
    }

    // getQuestions () {
    //   fetch('http://localhost:3000/questions')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //     .catch(error => console.error(error))
    // }

    async getQuestions() {
      const response = await axios('https://newsworthy-api.herokuapp.com/questions')
      const data = response.data;
      this.setState({
        questions: data
      })
      console.log(data)
    }

    render () {
      return (
        <div className="container">
          <div className="headerContainer">
          <a href='/'>
          <h1> NEWSWORTHY </h1>
          </a>
          <button onClick={this.openModal}>Spotting Fake News</button>
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>
          <div className="modal">
          <img src="https://www.ifla.org/files/assets/hq/topics/info-society/images/how-to-spot-fake-news_440px.jpg"></img>
          </div>
          </h2>
            <img src="https://www.ifla.org/files/assets/hq/topics/info-society/images/how-to-spot-fake-news_440px.jpg"></img>
         
        </Modal>
            {/* <> */}
								{/* <button
									className='headerButton headerButtonImportant'
									onClick={() => this.openModal('keyModal')}
								>
								Key
								</button>
								<button
									className='headerButton'
									onClick={() => this.closeModal('login')}
								>
									Close
								</button> */}
							{/* </> */}
          </div>
          <Carousel 
          questions={this.state.questions}
          />
        </div>
      );
    }
}

export default App
