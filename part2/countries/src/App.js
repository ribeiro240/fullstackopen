import React, { useState, useEffect } from 'react';
import SearchField from './components/SearchField';
import ShowResults from './components/ShowResults';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');

  const handleSearchField = (event) => {
    setSearchField(event.target.value);
  }

  const filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().indexOf(searchField.toLowerCase()) !== -1;
    });

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="App">
      find countries <SearchField value={searchField} handleSearchField={handleSearchField} />
      <ShowResults filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
