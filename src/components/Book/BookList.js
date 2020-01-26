import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const renderBookItem = handleMove => (book, i) => (
  <li key={`${i}-${book.value}`}>
    <Book {...book} onMove={handleMove} />
  </li>
)

const BookList = ({ books = [], handleMove }) => (
  <ol className="books-grid">
    { books.map(renderBookItem(handleMove)) }
  </ol>
)

BookList.propTypes = {
  books: PropTypes.array
}

export default BookList
