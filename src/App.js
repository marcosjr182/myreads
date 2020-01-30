import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { transformBooks, fixSearchResults } from './utils';

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: {},
      searchResults: [],
    }

    this.handleBookMove = this.handleBookMove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    return BooksAPI.getAll()
      .then((books) => {
        return this.setState({ books: transformBooks(books) })
      })
  }
  
  handleBookMove(event, book) {
    const searchResults = this.state.searchResults
    const targetShelf = ((event && event.target.value) || 'none')
    return BooksAPI.update(book, targetShelf)
      .then(() => {
        const allBooks = this.state.books;
        const updatedBooks = {
          ...allBooks,
          [book.id]: { ...book, shelf: targetShelf }
        }
      
        return this.setState({
          books: updatedBooks,
          searchResults: fixSearchResults(updatedBooks, searchResults)
        })
      })
  }

  handleSearch(searchTerm) {
    const allBooks = this.state.books;
    BooksAPI.search(searchTerm)
      .then((res) => {
        if (res && res.error) {
          return this.setState({ searchResults: [], error: res.error }) 
        }        
        return this.setState({
          searchResults: fixSearchResults(allBooks, res)
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <HomePage
              books={this.state.books}
              handleBookMove={this.handleBookMove}
            />
          </Route>

          <Route exact path='/search'>
            <SearchPage
              books={this.state.books}
              searchResults={this.state.searchResults}
              handleSearch={this.handleSearch}
              handleBookMove={this.handleBookMove}
            />
          </Route>

          <Route>
              <HomePage
                books={this.state.books}
                handleBookMove={this.handleBookMove}
              />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
