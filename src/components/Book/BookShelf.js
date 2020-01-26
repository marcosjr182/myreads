import React from 'react'
import PropTypes from 'prop-types'

import BookList from './BookList'

const BookShelf = ({ title = '', books=[], handleMove }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {title}
    </h2>
    <div className="bookshelf-books">
      <BookList books={books} handleMove={handleMove} />
    </div>
  </div>
)

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array
}

export default BookShelf
