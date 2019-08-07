import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Container from 'react-bootstrap/Container'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <NavDropdown.Item href="#/change-password">Change Password</NavDropdown.Item>
    <NavDropdown.Item href="#/sign-out">Sign Out</NavDropdown.Item>
    <NavDropdown.Item href="#/jokes">All Jokes</NavDropdown.Item>
    <NavDropdown.Item href="#/telljoke">Tell a Joke</NavDropdown.Item>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <NavDropdown.Item href="#/sign-up">Sign Up</NavDropdown.Item>
    <NavDropdown.Item href="#/sign-in">Sign In</NavDropdown.Item>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <NavDropdown.Item href="#/">Go Home (and Don&apos;t touch that thermostat!)</NavDropdown.Item>
    <NavDropdown.Item href='#/random'>Random Joke - Reach in the Cargo Short Pocket </NavDropdown.Item>
  </React.Fragment>
)

// const Header = ({ user }) => (
//   <React.Fragment>
//     <header className="main-header">
//       <h1>Dad Joke 5000</h1>
//       <nav>
//         { user && <span>Welcome, {user.email}</span>}
//         { user ? authenticatedOptions : unauthenticatedOptions }
//         { alwaysOptions }
//       </nav>
//     </header>
//     <section className="joke-body">
//       <div>
//       </div>
//     </section>
//   </React.Fragment>

const Header = ({ user }) => (
  <Navbar className="main-header" collapseOnSelect expand="md" bg="info" variant="dark" sticky="top">
    <Navbar.Brand href="#/">
      <img src={require('../images/NB.png')} alt={ '' }/>
      <h1 className="mt-4 d-none d-sm-inline-block"><span className="dadJokeTitle">Dad Joke</span>&nbsp;<span className="fiveK">5000</span></h1>
      <h1 className="mt-4 d-inline-flex d-sm-none"><span className="m-0 dadJokeTitle">DJ</span><span className="m-0 fiveK">5K</span></h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Navbar.Text>{ user && `Welcome, ${user.email}` }</Navbar.Text>
        <NavDropdown title="Main Menu" alignRight id="mainMenu-nav-dropdown">
          { user ? authenticatedOptions : unauthenticatedOptions }
          { alwaysOptions }
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
