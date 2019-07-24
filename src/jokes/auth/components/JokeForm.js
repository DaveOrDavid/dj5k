import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
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

    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Setup</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="string"
        placeholder="Setup"
        value={joke.setup}
        name="setup"
        onChange={handleChange}
        aria-label="setup"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Punchline</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="string"
        placeholder="Punchline"
        value={joke.punchline}
        name="punchline"
        onChange={handleChange}
        aria-label="joking punchline"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">😂 or 🙄</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="string"
        placeholder="😂 or 🙄"
        value={joke.isfunny}
        name="isfunny"
        onChange={handleChange}
        aria-label="funnyness?"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Link to={cancelPath}>
      <Button variant="secondary">Cancel</Button>
    </Link>
  </Form>
)

// Link button takes us to cancelPath so no need for click handler
// submit button is within form listening for onSubmit so no need for click hanlder

export default JokeForm
