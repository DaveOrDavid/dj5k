import React, { Component } from 'react'
// import { Column, Row } from 'simple-flexbox'
import './Home.scss'
import Carousel from 'react-bootstrap/Carousel'
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

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='images/WelcomeQuestion.png'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='images/blankbg.png'
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='images/blankbg.png'
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    // <section className="homeBox">
    //   <Column flexGrow={1}>
    //     <Row horizontal='center'>
    //       <h1>Get Ready to Laugh!</h1>
    //     </Row>
    //     <Row vertical='center'>
    //       <Column flexGrow={1} horizontal='center'>
    //         <h3> What is Dad Joke 5000? </h3>
    //         <span> Dad Joke 5000 (or DJ5K as the kids say) is a library of all of puns, one-liners, and dad jokes that you can think of. Can&#39;t think of a joke? Use the Random Joke button to have one generated for you.</span>
    //       </Column>
    //       <Column flexGrow={1} horizontal='center'>
    //         <h3> Column 2  </h3>
    //         <span> column 2 content </span>
    //       </Column>
    //     </Row>
    //   </Column>
    // </section>
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
