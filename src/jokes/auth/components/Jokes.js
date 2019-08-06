import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Jokes.scss'
import axios from 'axios'
import apiUrl from '../../../apiConfig'
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'

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
      <Row key={joke._id}>
        <Card bg="light">
          <Card.Header><h4>{joke.title}</h4></Card.Header>
          <Card.Body>
            <Card.Text>
              {joke.setup}
            </Card.Text>
            <Card.Link href={`#/jokes/${joke._id}`}>Card Link</Card.Link>
          </Card.Body>
        </Card>
      </Row>
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
      return <Card>
        <Card.Body>
          <Card.Title><h1>No jokes to return</h1></Card.Title>
          <Card.Text>
            <Card.Link href={'#/telljoke'}>How about telling us a joke?</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    }

    // <Container>
    //   <Row>
    //     <Col xs={12} md={8}>
    //       xs=12 md=8
    //     </Col>
    //     <Col xs={6} md={4}>
    //       xs=6 md=4
    //     </Col>
    //   </Row>
    // </Container>

    return (
      <React.Fragment>
        <h4>Jokes</h4>
        <Container>
          <CardDeck>
            {jokesList}
          </CardDeck>
        </Container>
      </React.Fragment>
    )
  }
}

export default Jokes
