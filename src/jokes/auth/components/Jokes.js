import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../apiConfig'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

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
    // console.log('Token is ', this.props.user.token)
    // console.log('Props is ', this.props)
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
    const { jokes } = this.state
    const jokesList = jokes.map(joke => (
      <Card key={joke._id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{joke.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the cards content.
          </Card.Text>
          <Card.Link href={`#/jokes/${joke._id}`}>Card Link</Card.Link>
        </Card.Body>
      </Card>
    ))

    //   <ListGroup.Item
    //     key={joke._id}
    //     variant="secondary"
    //     action href={`#/jokes/${joke._id}`}>
    //     {joke.title}
    //   </ListGroup.Item>
    // ))

    // const jokesList = jokes.forEach(function (joke) {
    // const jokesList = (joke) => {
    //   for (let i = 0; i < jokes.length; i++) {
    //     return <ListGroup.Item key={joke._id} action href={`#/jokes/${joke._id}`}>
    //       {joke.title}
    //     </ListGroup.Item>
    //   }

    if (jokes.length === 0) {
      return <p>No jokes to return - tell us a joke instead!</p>
    }

    return (
      <React.Fragment>
        <h4>Jokes</h4>
        <CardColumns>
          {jokesList}
        </CardColumns>
      </React.Fragment>
    )
  }
}

export default Jokes
