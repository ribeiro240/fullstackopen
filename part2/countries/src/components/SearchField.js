import React from 'react';

const SearchField = ({ value, handleSearchField }) => {
  return (
      <input value={value}
      onChange={handleSearchField} />
  )
}

export default SearchField;
