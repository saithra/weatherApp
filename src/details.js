import React from 'react';
const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherData } = weather;
  const { temp } = main;
  const { description, icon } = weatherData[0];

  return (
    <div className="weather-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
      <p>Temperature: {temp} °C</p>
    </div>
  );
};

export default WeatherDetails;
