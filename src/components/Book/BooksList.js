import React from 'react'

const renderBook = (book, i) => (
  <li key={`${i}-${book.value}`}>
    <Book {...book} />
  </li>
)

const BookList = ({ books }) => (
  <ol className="books-grid">
    { books.map(renderBook) }
  </ol>
)

BookList.propTypes = {
  books: PropTypes.array
}

export default BookList
