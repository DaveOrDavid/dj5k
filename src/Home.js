import React, { Component } from 'react'
import './Home.scss'
// import Modal from 'react-bootstrap/Modal'
// import { Link } from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hello: null
    }
  }

  componentDidMount () {

  }

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
