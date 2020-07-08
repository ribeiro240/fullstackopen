import React, { useState } from 'react';
import Header from './Components/Header';
import './App.css';

const App = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [phonebook, setPhonebook] = useState([[name, number]]);
  const [search, setSearch] = useState('');

  const addName = (event) => {
    event.preventDefault();
    let phonebookString = JSON.stringify(phonebook);
    let numberNameString = JSON.stringify([name, number]);
    let isRepeated = phonebookString.indexOf(numberNameString);
    if (isRepeated === -1 && name.trim().length > 0) {
      setPhonebook([...phonebook].concat([[name, number]]));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already added to phonebook`)
    }
  }

  const handleNewName = (event) => {
    setName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNumber(event.target.value);
  }

  const filteredPhonebook = phonebook.filter((phoneEntry) => {
    return (phoneEntry[0].indexOf(search) !== -1) || (phoneEntry[1].indexOf(search) !== -1)
  })

  return (
    <main>
      <Header text="Phonebook"/>
      <input value={search}
        onChange={(event) => setSearch(event.target.value)}
       />
      <Header text="Add a new Name"/>
      <form onSubmit={addName}>
        Name: <input value={name}
          onChange={handleNewName}
          onClick={() => setName('')}/>
        Number: <input value={number}
          onChange={handleNewNumber}
          onClick={() => setNumber('')} />
        <button type="submit">save</button>
      </form>
      <Header text="Numbers" />
      <ul>
        {filteredPhonebook.map((phoneEntry, i) => {
          return (
            <div key={'div' + i}>
              <li key={phoneEntry[0] + i}>{phoneEntry[0]} {phoneEntry[1]}</li>
            </div>
          )
        })}
      </ul>
    </main>
  )
}

export default App;
