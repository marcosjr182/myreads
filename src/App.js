import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage';
import './App.css'

const BooksApp = () => (
  <div className="app">
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/search' component={SearchPage} />
      <Route component={HomePage} />
    </Switch>
  </div>
)

export default BooksApp
