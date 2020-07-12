import React from 'react';

const ShowButton = ({ handleClick, country }) => {
  return <button onClick={ () => handleClick(country) }>show</button>
}

export default ShowButton;
