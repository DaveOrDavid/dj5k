import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
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
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { joke: this.state.joke }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(err => this.setState({ error: err.stack }))
  }

  componentDidMount () {
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

    // console.log('joke is', joke)

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

    let smiley = joke.isfunny
    if (smiley === false) {
      smiley = '🙄'
    } else {
      smiley = '😂'
    }

    return (
      <React.Fragment>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title><h4>{joke.title}</h4></Modal.Title>
          </Modal.Header>

          <Modal.Body className="jokeSetupDisplay">
            <p>Setup: {joke.setup}</p>
            <ButtonToolbar>
              {['right'].map(direction => (
                <DropdownButton
                  drop={direction}
                  variant="primary"
                  title={' Reveal Punchline '}
                  id={`dropdown-button-drop-${direction}`}
                  key={direction}
                >
                  <Dropdown.Item eventKey="Reveal Punchline">{joke.punchline}</Dropdown.Item>
                </DropdownButton>
              ))}
            </ButtonToolbar>
            <br></br>
            <p>Funny or Not? {String(smiley)}</p>
          </Modal.Body>

          <Modal.Footer>
            <Link to={`/jokes/${this.props.match.params._id}/edit`}>
              <Button variant="secondary">Edit Joke</Button>
            </Link>
            <Button variant="warning" onClick={this.deleteJoke}>Delete Joke</Button>
            <Link to={'/jokes'}>
              <Button variant="primary">Back to More Dad Jokes</Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </React.Fragment>
    )
  }
}

export default withRouter(Joke)
