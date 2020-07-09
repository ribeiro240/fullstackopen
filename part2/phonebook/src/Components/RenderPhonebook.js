import React from 'react';

const RenderPhonebook = (props) => {
  return (
    <ul>
      {props.filteredPhonebook.map((phoneEntry, i) => {
        return (
          <div key={'div' + i}>
            <li key={phoneEntry[0] + i}>{phoneEntry[0]} {phoneEntry[1]}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default RenderPhonebook;
