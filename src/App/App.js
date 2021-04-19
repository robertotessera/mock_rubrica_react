import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'

const App = () => (

  <Switch>
    <Route path='/' component={HomePage} /> }
  </Switch>
)

export default App
