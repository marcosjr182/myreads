import React from 'react'

const actionList = [
  { value: 'move', label: 'Move to...', disabled: true },
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
  { value: 'none', label: 'None' },
]

const renderOption = (props) => (
  <option key={props.value} {...props}></option>
);

const BookActions = ({ onChangeHandler }) => {
  return (
    <div className="book-shelf-changer">
      <select onChange={onChangeHandler}>
        { actionList.map(renderOption) }
      </select>
    </div>
  );
}

export default BookActions;
