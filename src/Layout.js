import React from 'react'
// import './Layout.scss'
// import Body from './body/Body.js'
// import Jokes from './jokes/auth/components/Jokes.js'
// import TellJoke from './jokes/auth/components/TellJoke.js'

// children: defined name. Whatever is put intside Layout component becomes the children reference. Children is anything nested inside Layout.
// props: not reserved in this case, can be any name but 'props' works best.
// props can be explicity defined (like children) or any name you pass it like props
const Layout = ({ user }, props) => (
  <div>

    {props.children}

  </div>
)

export default Layout
