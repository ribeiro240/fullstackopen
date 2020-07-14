import React from 'react';

const RenderPhonebook = (props) => {
  if (props.filteredPhonebook.length == 0) return (<h2>Phonebook is empty</h2>)

  return(
    <ul>
      {props.filteredPhonebook.map((phoneEntry, i) => {
        return (
          <div key={'div' + i}>
            <li key={phoneEntry.name + i}>{phoneEntry.name} {phoneEntry.number}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default RenderPhonebook;
