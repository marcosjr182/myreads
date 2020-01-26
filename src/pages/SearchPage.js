import React from 'react'
import BookList from '../components/Book/BookList'

import { search as fetchSearch } from '../BooksAPI'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: '',
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch({ target }) {
    const searchTerm = (target.value || '')
    fetchSearch(searchTerm)
      .then((res) => {
        return (res.error)
          ? this.setState({ books: [], error: res.error })
          : this.setState({ books: res })
      })
  }

  render() {
    const { books, searchTerm } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.handleSearch}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={books} />
        </div>
      </div>
    )
  }
}

export default SearchPage
