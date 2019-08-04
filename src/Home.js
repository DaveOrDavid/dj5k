import React, { Component } from 'react'
import { Column, Row } from 'simple-flexbox'
import './Home.scss'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import { Link } from 'react-router-dom'

class Home extends Component {
  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     hello: null
  //   }
  // }
  //
  // componentDidMount () {
  //
  // }

  render () {
    // const { hello } = this.state

    return (
      <section className="homeBox">
        <Column flexGrow={1}>
          <Row horizontal='center'>
            <h1>Get Ready to Laugh!</h1>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <h3> What is Dad Joke 5000? </h3>
              <span> Dad Joke 5000 (or DJ5K as the kids say) is a library of all of puns, one-liners, and dad jokes that you can think of. Can&#39;t think of a joke? Use the Random Joke button to have one generated for you.</span>
            </Column>
            <Column flexGrow={1} horizontal='center'>
              <h3> Column 2  </h3>
              <span> column 2 content </span>
            </Column>
          </Row>
        </Column>
      </section>
    )
  }
}
//       <React.Fragment>
//         <div className="gone">{hello}</div>
//         <section>
//           <h1>Welcome to the Dad Joke 5000!</h1>
//           <h2>Click the Main Menu to get started</h2>
//         </section>
//       </React.Fragment>
//     )
//   }
// }

export default Home
