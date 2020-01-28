import React from 'react'

const actionList = [
  { value: 'move', label: 'Move to...', disabled: true },
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
  { value: 'none', label: 'None' },
]

const Option = (props) => (
  <option key={props.value} {...props}></option>
);

const BookActions = ({ book, onMove }) => {
  const currentBookshelf = (book.shelf || 'None');
  return (
    <div className="book-shelf-changer">
      <select
        value={currentBookshelf}
        onChange={(event) => onMove(event, book)}>
        { actionList.map(Option) }
      </select>
    </div>
  );
}

export default BookActions;
