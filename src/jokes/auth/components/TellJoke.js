import React, { Component } from 'react'
// import Body from '../../../body/Body'
import JokeForm from './JokeForm'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../../apiConfig'

// 1) initialize state
// 1a. render
// 2) interact with Form
// 2a. trigger onChange event
// 3) TellJoke handles onChange Event
// 3a) Updates State
// 4) Updates Form
// all of the form is based on state - as state changes, so will Form

class TellJoke extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joke: {
        title: '',
        setup: '',
        punchline: '',
        isfunny: !null
      },
      createdJokeID: null
    }
  }

  handleChange = event => {
    // create an object with updated field
    const updatedField = {
      [event.target.name]: event.target.value // will become title, setup, punchline, isfunny,
    }
    // event.target.TITLE/SETUP/PUNCHLINE/ISFUNNY needs to match the field it will go in to the JokeForm component on the JokeForm.js file.
    // use object to create updated state object
    const editedJoke = Object.assign(this.state.joke, updatedField)
    // finally setState with updated object
    this.setState({ joke: editedJoke })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/jokes`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { joke: this.state.joke }
    })
      .then(res => this.setState({ createdJokeID: res.data.joke._id }))
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { joke, createdJokeID } = this.state
    console.log(joke, createdJokeID)

    if (createdJokeID) {
      return <Redirect to={`/jokes/${createdJokeID}`} />
    }

    return (
      <React.Fragment>
        <h4>Create a new joke</h4>
        <JokeForm
          joke={joke}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/jokes'/>
      </React.Fragment>
    )
  }
}

export default TellJoke
