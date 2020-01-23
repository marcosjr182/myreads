import React from 'react'
import PropTypes from 'prop-types'

const styleBookCover = (thumbnail) => ({
  width: 128,
  height: 193,
  backgroundImage: `url("${thumbnail}")`,
  backgroundSize: 'cover',
})

const BookCover = ({ thumbnail }) => (
  <div
    className="book-cover"
    style={styleBookCover(thumbnail)}>
  </div>
)

BookCover.propTypes = {
  thumbnail: PropTypes.string,
}

export default BookCover        
