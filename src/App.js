import React, { useState } from 'react';
import './App.css';
import Header from './weather';
import SearchForm from './searchform';
import WeatherDetails from './details';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = 'cf441a5a704b7ba0d567ccd3a65981de';

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        }
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header/>
      <SearchForm onSearch={fetchWeather} />
      {loading && <p id='loading'>Loading...</p>}
      {error && <p>{error}</p>}
      <WeatherDetails weather={weather}/>
    </div>
  );
};

export default App;
