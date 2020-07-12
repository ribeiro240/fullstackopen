import React, {useState} from 'react';
import ShowButton from './ShowButton';
import ShowCountryInfo from './ShowCountryInfo';

const ShowResults = ({ filteredCountries }) => {
  const [infoContainer, setInfoContainer] = useState();
  const handleShowButtonClick = (country) => {
    const newInfoContainer = <ShowCountryInfo key={country.name} country={country} />;
    setInfoContainer(newInfoContainer)
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches. Specify another filter</p>
  }

  if (filteredCountries.length === 1) {
    return (
    <ul>
      {filteredCountries.map((country) => {
        return (
          <ShowCountryInfo key={country.name} country={country} />
        )
      })}
    </ul>
    )
  }

  return (
    <ul>
      {filteredCountries.map((country) => {
        return <li key={country.name}> {country.name} <ShowButton country={country} handleClick={(country) => handleShowButtonClick(country)}/></li>
      })}
      {infoContainer}
    </ul>
  )
}

export default ShowResults;
