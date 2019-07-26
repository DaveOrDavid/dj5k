import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
// import Joke from './Joke'
import JokeForm from './JokeForm'
import axios from 'axios'
import apiUrl from '../../../apiConfig'

class JokeEdit extends Component {
  // Step 1: initialize constructor and state
  constructor (props) {
    super(props)
    this.state = {
      joke: {
        title: '',
        setup: '',
        punchline: '',
        isfunny: ''
      },
      edited: false
    }
  }
  // Step 3: populate form - GET request
  // Step 3a: update state from successful API response
  // use a lifecycle method to do this on load!

  componentDidMount () {
    // console.log('This state is ', this.state)
    axios({
      url: `${apiUrl}/jokes/${this.props.match.params._id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { joke: this.state.joke }
    })
      // .then()
      .then(res => this.setState({ joke: res.data.joke }))
      .catch(err => this.setState({ error: err.message }))
  }
  // Step 4: handleChange, handleSubmit
  handleChange = event => {
    // create an object with only the updated field name and the updated value => { title: 'My  Movie' }
    const updatedField = {
      [event.target.name]: event.target.value
    }

    // combine the previous object with our movie state object
    const editedJoke = Object.assign(this.state.joke, updatedField)

    // use setState to update the state with our combined objects
    // we wrap [event.target.name] in brackets because it's a variable
    // finally setState with updated object
    this.setState({ joke: editedJoke })
  }

  handleSubmit = event => {
    // Step 5: on submit - update state and handle redirect in render
    event.preventDefault()
    axios({
      url: `${apiUrl}/jokes/${this.props.match.params._id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { joke: this.state.joke }
    })
    // Step 5a: update state & handle redirect in render
      .then(() => this.setState({ edited: true }))
      .catch(console.error)
  }
  // Step 2: render function to display jsx
  render () {
    const { joke, edited } = this.state // make sure to destructure your object "movie"
    const { handleChange, handleSubmit } = this

    // handle redirect for updated movie:
    if (edited) {
      return <Redirect to={
        {
          pathname: `/jokes/${this.props.match.params._id}`,
          state: {
            msg: 'Updated Joke'
          }
        }
      } />
    }

    // if (cancelEdit) {
    //   return <Redirect to={
    //     {
    //       pathname: `/jokes/${this.props.match.params._id}`,
    //       state: {
    //         msg: 'Cancelled Editing Joke'
    //       }
    //     }
    //   } />
    // }

    return (
      <React.Fragment>
        <h3>Edit Your Joke</h3>
        <JokeForm
          joke={joke}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/jokes/${this.props.match.params._id}`} />
      </React.Fragment>
    )
  }
}

export default withRouter(JokeEdit)
