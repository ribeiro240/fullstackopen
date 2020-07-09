import React from 'react';

const AddEntry = (props) => {
  return (
    <form onSubmit={props.submit}>
      Name: <input value={props.name}
        onChange={props.handleNewName}
        onClick={props.handleNameClick}/>
      Number: <input value={props.number}
        onChange={props.handleNewNumber}
        onClick={props.handleNumberClick} />
      <button type="submit">save</button>
    </form>
  )
}

export default AddEntry;
