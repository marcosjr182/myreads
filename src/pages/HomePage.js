import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from '../components/Book/BookShelf'

const booksByShelf = (prev, book) => {
  const { shelf = 'None' } = book
  const shelfBooks = (prev[shelf] || [])
  return {
    ...prev, 
    [shelf]: shelfBooks.concat(book)
  }
}

const transformBookShelf = (books) => {
  return Object.values(books).reduce(booksByShelf, {})
}

const HomePage = ({ books, handleBookMove }) => {
  const {
    currentlyReading,
    wantToRead,
    read
  } = transformBookShelf(books);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title='Currently Reading'
            handleBookMove={handleBookMove}
            books={currentlyReading} 
            />
          <BookShelf
            title='Want to Read'
            handleBookMove={handleBookMove}
            books={wantToRead}
            />
          <BookShelf
            title='Read'
            handleBookMove={handleBookMove}
            books={read}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>
          <button>
            Add a book
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
