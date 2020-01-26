import React from 'react'
import PropTypes from 'prop-types'

import BookCover from './BookCover'
import BookActions from './BookActions'

const Book = (props) => {
  const { title, authors, imageLinks, onMove } = props;
  return (
    <div className="book">
      <div className="book-top">
        <BookCover {...imageLinks} />
        <BookActions book={props} onMove={onMove} />
      </div>
      <div className="book-title">
        { title }
      </div>
      <div className="book-authors">
        { (authors || []).join(', ') }
      </div>
    </div>
  )
};

Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  imageLinks: PropTypes.object
}

export default Book
