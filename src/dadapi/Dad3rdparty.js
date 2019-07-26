import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import axios from 'axios'
// import apiUrl from '../../../apiConfig'

class Dad3rdparty extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joke: ''
    }
    // this.baseState = this.state
  }

  // resetJoke = () => {
  //   this.setState(this.baseState)
  // }

  // someMethod () {
  //   this.setState({ state: this.state })
  // }

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

  // error handling options:
  // 1. .catch(err => something (like this.setState({ error: err.stack })), then set this.state = {error: null}
  // remember to make .then(res => this.setState({ movie: res.data.movie }))

  render () {
    const { joke } = this.state

    // console.log('joke is', joke)

    if (!joke) {
      return <p>Loading...</p>
    }

    // const resetJoke = () => {
    //   this.forceUpdate(this.baseState)
    // }

    // const reRunApi = (onClick) => {
    //   reset() {
    //     this.setState({ joke })
    //   }

    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Random Joke</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h1>{joke}</h1>
        </Modal.Body>

        <Modal.Footer>
          <Link to={'/'}>
            <Button variant="secondary">Home</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default withRouter(Dad3rdparty)
