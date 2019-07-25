import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
    <NavDropdown.Item href='#/random'>Random Joke - Reach in the Cargo Short Pocket  </NavDropdown.Item>
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
  <Navbar className="main-header" expand="sm" bg="info" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
      <img src={require('../images/NB.png')} alt={ '' } className={ 'd-inline-block align-top' } />
    </Navbar.Brand>
    <h3>{ 'Dad Joke 5000' }</h3>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        { user && <span>Welcome, {user.email}</span>}
        <NavDropdown title="Main Menu" id="mainMenu-nav-dropdown">
          { user ? authenticatedOptions : unauthenticatedOptions }
        </NavDropdown>
        <NavDropdown title="Navigation" id="nav-nav-dropdown">
          { alwaysOptions }
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
