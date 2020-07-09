import React from 'react';

const SearchField = (props) => {
  return (
    <input value={props.searchValue}
      onChange={props.onChangeHandler}/>
  )
}

export default SearchField;
