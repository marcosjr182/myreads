import React from 'react'
import PropTypes from 'prop-types'

import * as BooksAPI from '../BooksAPI'
import BookShelf from '../components/Book/BookShelf'

const booksByShelf = (prev, book) => {
  const { shelf = 'N/A' } = book
  const shelfBooks = (prev[shelf] || [])
  return {
    ...prev, 
    [shelf]: shelfBooks.concat(book)
  }
}
const transformBookShelf = (books) => books.reduce(booksByShelf, {})

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookShelf: {},
      loading: true
    }
  }

  componentDidMount() {
    return BooksAPI.getAll()
      .then(books => {
        this.setState({ loading: false, bookShelf: transformBookShelf(books) })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      });
  }

  render() {
    const {
      currentlyReading,
      wantToRead,
      read
    } = this.state.bookShelf;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title='Currently Reading' books={currentlyReading} />
            <BookShelf title='Want to Read' books={wantToRead} />
            <BookShelf title='Read' books={read} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={this.handleAddBook}>
            Add a book
          </button>
        </div>
      </div>
    )
  }
}

export default HomePage
