import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import randomDadJoke from './dadapi.js'
// import apiUrl from '../../../apiConfig'

class Dad3rdparty extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joke: ''
    }
  }

  componentDidMount () {
    axios({
      baseURL: 'https://icanhazdadjoke.com',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => this.setState({ joke: res.data.joke }))
      .catch(console.error)
  }

   getJoke = () => {
     axios({
       baseURL: 'https://icanhazdadjoke.com',
       headers: {
         Accept: 'application/json'
       }
     })
       .then(res => this.setState({ joke: res.data.joke }))
       .catch(console.error)
   }

   render () {
     const { joke } = this.state
     const { getJoke } = this

     if (!joke) {
       return <p>Loading...</p>
     }

     return (
       <Modal.Dialog>
         <Modal.Header>
           <Modal.Title>Random Joke from Dad&apos;s Cargo Pocket</Modal.Title>
         </Modal.Header>

         <Modal.Body>
           <h1>{joke}</h1>
         </Modal.Body>

         <Modal.Footer>
           <Link to={'/'}>
             <Button variant="secondary">Home</Button>
           </Link>
           <Button variant="secondary" onClick={getJoke}>Click for More Jokes!</Button>
         </Modal.Footer>
       </Modal.Dialog>
     )
   }
}

export default withRouter(Dad3rdparty)
