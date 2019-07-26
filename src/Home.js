import React, { Component } from 'react'
import './Home.scss'
// import Modal from 'react-bootstrap/Modal'
// import { Link } from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using 'null' because null = nothing, vs. undefined  = not defined. We want a 'falsy' value (empty objects/arrays will always be truthy, need falsy for our state use)
      hello: null
    }
  }

  componentDidMount () {

  }

  // error handling options:
  // 1. .catch(err => something (like this.setState({ error: err.stack })), then set this.state = {error: null}
  // remember to make .then(res => this.setState({ movie: res.data.movie }))

  render () {
    const { hello } = this.state

    // console.log('joke is', joke)

    return (
      <React.Fragment>
        <div className="gone">{hello}</div>
        <section>
          <h1>Welcome to the Dad Joke 5000!</h1>
          <h2>Click the Main Menu to get started</h2>
        </section>
      </React.Fragment>
    )
  }
}

export default Home
