import React from 'react'
import BookList from '../components/Book/BookList'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: '',
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }

  handleSearch({ target }) {
    const searchTerm = (target.value || '')
    BooksAPI.search(searchTerm)
      .then((res) => {
        return (res && res.error)
          ? this.setState({ books: [], error: res.error })
          : this.setState({ books: res })
      })
  }

  handleMove(event, book) {
    const targetShelf = (event && event.target.value) || book.shelf
    const currentBooks = this.state.books
      .filter(b => b.id !== book.id)
      .concat({ ...book, shelf: targetShelf })

    return BooksAPI.update(book, targetShelf)
      .then(() => this.setState({ books: currentBooks }))
  }

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.handleSearch}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={books} handleMove={this.handleMove} />
        </div>
      </div>
    )
  }
}

export default SearchPage
