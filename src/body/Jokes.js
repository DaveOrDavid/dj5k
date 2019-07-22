import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../Layout'

import axios from 'axios'
import apiUrl from '../apiConfig'

class Jokes extends Component {
  constructor (props) {
    super(props)
    // super will take Component class and apply constructor to it.

    this.state = {
      jokes: [], // state will be initialized as empty array, when movies load from API. It will tell our state that it will display in JSX
      loaded: false,
      error: null
    }
  }

  componentDidMount () {
    // api request!!  default method is GET, so no need to type 'GET'
    axios(`${apiUrl}/jokes`)
      .then(res => this.setState({ jokes: res.data.jokes, loaded: true }))
      .catch(err => this.setState({ error: err.message }))
  }
  // err.stack returns big message, err.message just returns 40x short message

  // Async/Await version:
  // async componentDidMount () {
  //   try {
  //     const response = await axios(`${apiUrl}/movies`)
  //     this.setState({ movies: response.data.movies })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  render () {
    const { jokes, error, loaded } = this.state
    // we are looping over the array below
    const jokesList = jokes.map(joke => (
      // React needs a key property, so key is used to identify items that need to be updated.
      <li key={joke.id}>
        <Link to={`/jokes/${joke.id}`}>{joke.setup}</Link>
      </li>
    ))

    if (!loaded) {
      return <p>Loading...</p>
    }

    if (jokes.length === 0) {
      return <p>No movies to return - tell us a joke instead!</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }

    return (
      <React.Fragment>
        <h4>Jokes</h4>
        <ul>
          {jokesList}
        </ul>
      </React.Fragment>
    )
  }
}

export default Jokes
