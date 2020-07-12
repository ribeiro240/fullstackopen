import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShowCountryInfo = ({ country }) => {
  const [weatherInfo, setWeatherInfo] = useState('');

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=01cded648becb4867e6cdb499fc06168`)
      .then(response => {
        setWeatherInfo(response.data.main)
      });
  }, []);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => {
          return <li key={language.name}>{language.name}</li>
        })}
      </ul>
      <img src={country.flag} alt={`${country.name}'s flag`} />
      <h3>Weather in {country.capital}</h3>
      <p><strong>temperature: </strong>{(weatherInfo.temp - 273.15).toFixed()} celsius</p>
    </div>
  );
}

export default ShowCountryInfo;
