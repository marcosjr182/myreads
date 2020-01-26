import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import BookShelf from '../components/Book/BookShelf'

const booksByShelf = (prev, book) => {
  const { shelf = 'N/A' } = book
  const shelfBooks = (prev[shelf] || [])
  return {
    ...prev, 
    [shelf]: shelfBooks.concat(book)
  }
}
const transformBookShelf = (books) => books.reduce(booksByShelf, {})

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookShelf: {},
      loading: true
    }
    this.handleMove = this.handleMove.bind(this)
  }

  componentDidMount() {
    return BooksAPI.getAll()
      .then(books => {
        this.setState({ loading: false, bookShelf: transformBookShelf(books) })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      });
  }

  handleMove(event, book) {
    const bookShelf = this.state.bookShelf
    const getBooks = (shelf) => (bookShelf[shelf] || [])

    const targetShelf = (event && event.target.value) || book.shelf
    const fixedBookShelf = {
      ...bookShelf,
      [book.shelf]: getBooks(book.shelf).filter(b => b.id !== book.id),
      [targetShelf]: getBooks(targetShelf).concat({...book, shelf: targetShelf})
    }

    return BooksAPI.update(book, targetShelf)
      .then(() => this.setState({ bookShelf: fixedBookShelf }))
  }

  getBookShelf(shelf) {
    return ;
  }

  render() {
    const {
      currentlyReading,
      wantToRead,
      read
    } = this.state.bookShelf;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              handleMove={this.handleMove}
              title='Currently Reading'
              books={currentlyReading} 
              />
            <BookShelf
              handleMove={this.handleMove}
              title='Want to Read'
              books={wantToRead}
              />
            <BookShelf
              handleMove={this.handleMove}
              title='Read'
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
}

export default HomePage
