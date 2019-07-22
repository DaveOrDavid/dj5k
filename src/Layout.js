import React from 'react'

import Jokes from './body/Jokes'
import Nav from './Nav'

// children: defined name. Whatever is put intside Layout component becomes the children reference. Children is anything nested inside Layout.
// props: not reserved in this case, can be any name but 'props' works best.
// props can be explicity defined (like children) or any name you pass it like props
const Layout = props => (
  <div>
    <Nav />
    <Jokes />
  </div>
)

export default Layout
