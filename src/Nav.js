import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <Link to='/'>Go Home (and Don&apos;t touch that thermostat!) | </Link>
    <Link to='/about'>Tell us a Joke | </Link>
    <Link to='/jokes'>Get All Jokes | </Link>
    <Link to='/random'>Random Joke - Reach in the Cargo Short Pocket  </Link>
  </nav>
)

export default Nav
