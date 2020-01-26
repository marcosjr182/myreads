import React from 'react'
import PropTypes from 'prop-types'

const styleBookCover = (thumbnail) => ({
  width: 128,
  height: '100%',
  backgroundImage: `url("${thumbnail}")`,
  backgroundSize: 'cover',
})

const BookCover = ({ smallThumbnail }) => (
  <div
    className="book-cover"
    style={styleBookCover(smallThumbnail)}>
  </div>
)

BookCover.propTypes = {
  smallThumbnail: PropTypes.string,
  thumbnail: PropTypes.string,
}

export default BookCover        
