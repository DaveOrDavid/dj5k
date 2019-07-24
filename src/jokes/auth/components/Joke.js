import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../apiConfig'

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
      url: `${apiUrl}/jokes/${this.props.match.params._id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(err => this.setState({ error: err.stack }))
  }

  componentDidMount () {
    console.log('Props are', this.props)
    axios({
      url: `${apiUrl}/jokes/${this.props.match.params._id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { joke: this.state.joke }
    })
      .then(res => this.setState({ joke: res.data.joke, loaded: true }))
      .catch(err => this.setState({ error: err.message }))
  }

  // error handling options:
  // 1. .catch(err => something (like this.setState({ error: err.stack })), then set this.state = {error: null}
  // remember to make .then(res => this.setState({ movie: res.data.movie }))

  render () {
    const { joke, error, deleted } = this.state

    if (deleted) {
      // return <Redirect to="/" />
      return <Redirect to={
        { pathname: '/jokes', state: { msg: 'Joke Successfully Deleted' } }
      } />
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    if (!joke) {
      return <p>Loading...</p>
    }

    return (
      <React.Fragment>
        <h4>{joke.title}</h4>
        <p>Setup {joke.setup}</p>
        <p>Punchline {joke.punchline}</p>
        <Link to="/jokes">Back to more Dad Jokes</Link>
        <button onClick={this.deleteJoke}>Delete Joke</button>
        <Link to={`/jokes/${this.props.match.params._id}/edit`}>
          <button>Edit Joke</button>
        </Link>
      </React.Fragment>
      // could also do ${this.props.match.url}
      // original solution <button onClick={(event) => this.deleteMovie(movie.id)}>Delete Movie</button>
    )
  }
}

export default withRouter(Joke)
