import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import AutoDismissAlert from './AutoDismissAlert/AutoDismissAlert'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Dad3rdparty from './dadapi/Dad3rdparty.js'
import Layout from './Layout'
import Joke from './jokes/auth/components/Joke'
import Jokes from './jokes/auth/components/Jokes'
import JokeEdit from './jokes/auth/components/JokeEdit'
import TellJoke from './jokes/auth/components/TellJoke.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts && alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            alert={alert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>

        <Layout user={user} />
        <section className="humorDisplay">
          <Route path='/random' render={() => (
            <Dad3rdparty user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/jokes' render={() => (
            <Jokes user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/telljoke' render={() => (
            <TellJoke user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/jokes/:_id' render={() => (
            <Joke user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/jokes/:_id/edit' render={() => (
            <JokeEdit user={user} />
          )} />
        </section>
      </React.Fragment>
    )
  }
}

export default App
