import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const renderBook = (book, i) => (
  <li key={`${i}-${book.value}`}>
    <Book {...book} />
  </li>
)

const BookList = ({ books = [] }) => (
  <ol className="books-grid">
    { books.map(renderBook) }
  </ol>
)

BookList.propTypes = {
  books: PropTypes.array
}

export default BookList
