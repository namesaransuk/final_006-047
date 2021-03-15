import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'

const App = () => {
  return (
    <>
      <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/home">
            <img src="https://static1.squarespace.com/static/5fee2c8f0400f40890036523/t/6009c8880832de18e0d773e7/1611253896457/unsplash_logo.png" alt="logo" width="125" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>

      <div className="App container">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/profile/:id" component={Profile} />
      </div>
    </>
  );
}

export default App;
