import React, { Component } from 'react'
import { Column, Row } from 'simple-flexbox'
import './Home.scss'
// import Modal from 'react-bootstrap/Modal'
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
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>HEADER</h1>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 2  </h3>
            <span> column 2 content </span>
          </Column>
        </Row>
      </Column>
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
