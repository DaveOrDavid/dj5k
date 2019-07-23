import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../shared/Layout'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class Joke extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using 'null' because null = nothing, vs. undefined  = not defined. We want a 'falsy' value (empty objects/arrays will always be truthy, need falsy for our state use)
      joke: null,
      error: null,
      deleted: false
    }
  }

  deleteJoke = () => {
    axios({
      url: `${apiUrl}/jokes/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(err => this.setState({ error: err.stack }))
  }

  componentDidMount () {
    axios(`${apiUrl}/jokes/${this.props.match.params.id}`)
      .then(res => this.setState({ joke: res.data.joke }))
      .catch(err => this.setState({ error: err.stack }))
  }
  // error handling options:
  // 1. .catch(err => something (like this.setState({ error: err.stack })), then set this.state = {error: null}
  // remember to make .then(res => this.setState({ movie: res.data.movie }))

  render () {
    const { joke, error, deleted } = this.state

    if (deleted) {
      // return <Redirect to="/" />
      return <Redirect to={
        { pathname: '/', state: { msg: 'Joke Successfully Deleted' } }
      } />
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    if (!joke) {
      return <p>Loading...</p>
    }

    return (
      <Layout>
        <h4>{joke.title}</h4>
        <p>Setup {joke.setup}</p>
        <p>Punchline {joke.punchline}</p>
        <Link to="/jokes">Back to more Dad Jokes</Link>
        <button onClick={this.deleteJoke}>Delete Joke</button>
        <Link to={`/jokes/${this.props.match.params.id}/edit`}>
          <button>Edit Joke</button>
        </Link>
      </Layout>
      // could also do ${this.props.match.url}
      // original solution <button onClick={(event) => this.deleteMovie(movie.id)}>Delete Movie</button>
    )
  }
}

export default Joke
