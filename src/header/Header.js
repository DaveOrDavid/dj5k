import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/jokes">All Jokes</Link>
    <Link to="/telljoke">Tell a Joke</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Go Home (and Don&apos;t touch that thermostat!)</Link>
    <Link to='/random'>Random Joke - Reach in the Cargo Short Pocket  </Link>
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
  <Navbar className="main-header" expand="lg" bg="info" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
      <img src={require('./NB.png')} alt={ '' } className={ 'd-inline-block align-top' } />
    </Navbar.Brand>
    <h3>{ 'Dad Joke 5000' }</h3>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        { user && <span>Welcome, {user.email}</span>}
        <NavDropdown title="Main Menu" id="mainMenu-nav-dropdown">
          <NavDropdown.Item>
            { user ? authenticatedOptions : unauthenticatedOptions }
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Navigation" id="nav-nav-dropdown">
          <NavDropdown.Item>
            { alwaysOptions }
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
