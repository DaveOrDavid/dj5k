import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { Link } from 'react-router-dom'

// JokeForm used my TellJoke for user to create a joke and POST

const JokeForm = ({ joke, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="string"
        placeholder="Title of Joke"
        value={joke.title}
        name="title"
        onChange={handleChange}
        aria-label="Joking title"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

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
  </Form>
)

// Link button takes us to cancelPath so no need for click handler
// submit button is within form listening for onSubmit so no need for click hanlder

export default JokeForm
