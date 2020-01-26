import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage';
import './App.css'

const BooksApp = () => (
  <div className="app">
    <Route exact path='/' component={HomePage} />
    <Route exact path='/search' component={SearchPage} />
  </div>
)

export default BooksApp
