import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import SearchField from './Components/SearchField';
import AddEntry from './Components/AddEntry';
import RenderPhonebook from './Components/RenderPhonebook';
import PhonebookServices from './services/PhonebookServices';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [phonebook, setPhonebook] = useState([]);
  const [search, setSearch] = useState('');

  const addName = (event) => {
    event.preventDefault();
    let phonebookString = JSON.stringify(phonebook);
    let numberNameString = JSON.stringify({name, number});
    let isRepeated = phonebookString.indexOf(numberNameString);
    if (isRepeated === -1 && name.trim().length > 0) {
      PhonebookServices.create({name, number})
        .then(setPhonebook([...phonebook].concat([{name, number}])));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already added to phonebook`)
    }
  }

  useEffect(() => {
    PhonebookServices.getAll()
      .then(response => {
        setPhonebook(response);
      });
  }, []);

  const handleNewName = (event) => {
    setName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNumber(event.target.value);
  }

  const filteredPhonebook = phonebook.filter((phoneEntry) => {
    return (phoneEntry.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || (phoneEntry.number.indexOf(search) !== -1)
  });

  return (
    <main>
      <Header text="Phonebook"/>
      <SearchField searchValue={search}
        onChangeHandler={(event) => setSearch(event.target.value)}
       />
      <Header text="Add a new Name"/>
      <AddEntry submit={addName} handleNewName={handleNewName}
        handleNewNumber={handleNewNumber} handleNumberClick={() => setNumber('')}
        handleNameClick={() => setName('')} />
      <Header text="Numbers" />
      <RenderPhonebook filteredPhonebook={filteredPhonebook} />
    </main>
  )
}

export default App;
