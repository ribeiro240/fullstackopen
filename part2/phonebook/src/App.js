import React, { useState } from 'react';
import Header from './Components/Header';

const App = (props) => {
  const [namesList, setNamesList] = useState([]);
  const [name, setName] = useState('');

  const addName = (event) => {
    event.preventDefault();
    if (name.trim().length > 0) {
      setNamesList([...namesList].concat(name.trim()));
      setName('');
    }
  }

  const handleNewName = (event) => {
    setName(event.target.value);
  }

  return (
    <main>
      <Header text="Phonebook" />
      <ul>
        {namesList.map((listItem, i) => {
          return <li key={listItem + i}>{listItem}</li>
        })}
      </ul>
      <form onSubmit={addName}>
        <input value={name}
          onChange={handleNewName} />
        <button type="submit">save</button>
      </form>
    </main>
  )
}

export default App;
