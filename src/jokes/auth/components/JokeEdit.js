import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class MovieEdit extends Component {
  // Step 1: initialize constructor and state
  constructor (props) {
    super(props)
    this.state = {
      joke: {
        title: '',
        setup: '',
        punchline: '',
        isfunny: !null
      },
      edited: false
    }
  }
  // Step 3: populate form - GET request
  // Step 3a: update state from successful API response
  // use a lifecycle method to do this on load!

  componentDidMount () {
    axios(`${apiUrl}/jokes/${this.props.match.params.id}`)
      .then(res => this.setState({ joke: res.data.joke }))
      .catch()
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
    axios.patch(`${apiUrl}/jokes/${this.props.match.params.id}`, {
      movie: this.state.joke
    })
      // Step 5a: update state & handle redirect in render
      .then(res => this.setState({
        joke: res.data.joke,
        edited: true
      }))
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
          pathname: `/jokes/${this.props.match.params.id}`,
          state: {
            msg: 'Updated Joke'
          }
        }
      } />
    }
    return (
      // import Layout & MovieForm
      // 2a: reuse MovieForm
      <Layout>
        <h3>Edit Your Joke</h3>
        <MovieForm
          joke={joke}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/jokes/:id" />
      </Layout>
    )
  }
}

export default MovieEdit
