import React from 'react';
import DeleteButton from './DeleteButton';

const RenderPhonebook = (props) => {
  if (props.filteredPhonebook.length === 0) return (<h2>Phonebook is empty</h2>)

  return(
    <ul>
      {props.filteredPhonebook.map((phoneEntry, i) => {
        return (
          <div key={'div' + i}>
            <li id={phoneEntry.id} key={phoneEntry.id}>{phoneEntry.name} {phoneEntry.number} <DeleteButton id={phoneEntry.id} handleDeleteButton={props.handleDeleteButton} /></li>
          </div>
        )
      })}
    </ul>
  )
}

export default RenderPhonebook;
