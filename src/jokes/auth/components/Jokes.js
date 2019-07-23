import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../Layout'
import axios from 'axios'
import apiUrl from '../../../apiConfig'

class Jokes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      jokes: [],
      loaded: false,
      error: null
    }
  }

  componentDidMount () {
    console.log(this.props.user.token)
    axios({
      url: `${apiUrl}/jokes`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ jokes: res.data.jokes, loaded: true }))
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    const { jokes, error, loaded } = this.state
    const jokesList = jokes.map(joke => (
      <li key={joke._id}>
        <Link to={`/jokes/${joke._id}`}>{joke.setup}</Link>
      </li>
    ))

    if (!loaded) {
      return <p>Loading...</p>
    }

    if (jokes.length === 0) {
      return <p>No jokes to return - tell us a joke instead!</p>
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
