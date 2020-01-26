import React from 'react'
import PropTypes from 'prop-types'

const BookShelf = ({ title = '', books }) => {
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {title}
    </h2>
    <div className="bookshelf-books">
      <BooksGrid books={books} />
    </div>
  </div>
}

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array
}

export default BookShelf
