import React from 'react'
import BookList from '../components/Book/BookList'
import { Link } from 'react-router-dom'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      searchTerm: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch({ target }) {
    const searchTerm = (target.value || '')
    const getSearchResults = this.props.handleSearch
    Promise.resolve(this.setState({ searchTerm }))
      .then(() => getSearchResults(searchTerm))
  }
  
  render() {
    const {
      handleBookMove,
      searchResults,
    } = this.props;
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
          <BookList
            books={searchResults}
            handleMove={handleBookMove}
          />
        </div>
      </div>
    )
  }
}

export default SearchPage
