import React from 'react'
import Home from './Home'
import Edit from './Edit'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


const Root = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Root
