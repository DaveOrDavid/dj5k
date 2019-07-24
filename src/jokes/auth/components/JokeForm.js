import React from 'react'

import { Link } from 'react-router-dom'

// JokeForm used my TellJoke for user to create a joke and POST

const JokeForm = ({ joke, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Joke Title"
      value={joke.title}
      name="title"
      onChange={handleChange}
    />
    <label>Setup</label>
    <input
      placeholder="Director"
      value={joke.setup}
      name="setup"
      onChange={handleChange}
    />
    <label>Punchline</label>
    <input
      placeholder="Punchline"
      value={joke.punchline}
      name="punchline"
      onChange={handleChange}
    />
    <label>Funny?</label>
    <input
      placeholder="😂 or 🙄"
      value={joke.isfunny}
      name="isfunny"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)
// Link button takes us to cancelPath so no need for click handler
// submit button is within form listneing for onSubmit so no need for click hanlder

export default JokeForm
