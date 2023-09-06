import React from 'react';

function WeatherCard({ weatherInfo }) {
  const { name, main, weather } = weatherInfo;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
