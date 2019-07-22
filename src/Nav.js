import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <header>
    <h1>Dad Joke 5000</h1>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/movies'>Jokes</Link>
    <Link to='/random'>Random</Link>
    <hr />
  </header>
)

export default Nav
