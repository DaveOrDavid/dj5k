import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
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

  // error handling options:
  // 1. .catch(err => something (like this.setState({ error: err.stack })), then set this.state = {error: null}
  // remember to make .then(res => this.setState({ movie: res.data.movie }))

  render () {
    const { joke } = this.state

    console.log('joke is', joke)

    // if (deleted) {
    //   // return <Redirect to="/" />
    //   return <Redirect to={
    //     { pathname: '/jokes', state: { msg: 'Joke Successfully Deleted' } }
    //   } />
    // }

    // if (error) {
    //   return <p>ERROR: {error}</p>
    // }

    if (!joke) {
      return <p>Loading...</p>
    }

    // let smiley = joke.isfunny
    // if (smiley === false) {
    //   smiley = '🙄'
    // } else {
    //   smiley = '😂'
    // }

    return (
      <React.Fragment>
        <h4>{joke}</h4>
      </React.Fragment>
    )
  }
}

export default withRouter(Dad3rdparty)
