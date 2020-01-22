import React from 'react'

const example = [
  { value: 'move', label: 'Move to...', disabled: true },
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
  { value: 'none', label: 'None' },
]

const renderOption = (props) => (
  <option {...props}></option>
);

const BookActions = ({ onChangeHandler }) => {
  
  return (
    <select onChange={onChangeHandler}>
      { example.map(renderOption) }
    </select>
  );
}

export default BookActions;
