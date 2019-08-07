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
  _isMounted = false

  constructor (props) {
    super(props)
    this.state = {
      joke: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

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

  componentWillUnmount () {
    this._isMounted = false
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.random === true) {
      this.setState({ images: false, random: false })
    } else if (nextState.nonRandom === true) {
      this.setState({ randomImage: false, nonRandom: false })
    }
  }

  // componentDidMount () {
  //   axios({
  //     baseURL: 'https://icanhazdadjoke.com',
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   })
  //     .then(res => this.setState({ joke: res.data.joke }))
  //     .catch(console.error)
  // }

  randomSearch = event => {
    this.setState({ random: true })
    const { user } = this.props
    event.preventDefault()
    randomDadJoke(user)
      .then((res) => {
        if (res.data) {
          if (this._isMounted) {
            this.setState({ joke: res.data.joke })
          } else {
            this.setState({ joke: '' })
          }
        }
      })
      .catch(() => {
        this.setState({ joke: '' })
          .catch(console.error)
      })
  }

  render () {
    const { joke } = this.state

    // if (!joke) {
    //   return <p>Loading...</p>
    // }

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
          <Link to={this.randomSearch}>
            <Button variant="secondary">More Jokes</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default withRouter(Dad3rdparty)
