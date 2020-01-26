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
  return (
    <div className="book-shelf-changer">
      <select value='move' onChange={(event) => onMove(event, book)}>
        {
          actionList
            .filter(action => action.value !== book.shelf)
            .map(Option)
        }
      </select>
    </div>
  );
}

export default BookActions;
