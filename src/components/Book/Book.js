import React from 'react'
import PropTypes from 'prop-types'

import BookCover from './BookCover'
import BookActions from './BookActions'

const Book = ({ title, authors, imageLinks, setBookShelf }) => (
  <div className="book">
    <div className="book-top">
      <BookCover thumbnail={imageLinks.smallThumbnail} />
      <BookActions onChangeHandler={setBookShelf} />
    </div>
    <div className="book-title">
      { title }
    </div>
    <div className="book-authors">
      { authors.join(', ') }
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  imageLinks: PropTypes.instanceOf(BookCover)
}

export default Book
