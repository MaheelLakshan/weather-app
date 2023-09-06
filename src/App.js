import React, { useEffect, useState } from 'react';
import data from './data/cities.json';
import { fetchWeatherData } from './services/apiServices'; // Import the API function
import WeatherCard from './components/cards/weatherCard'; // Ensure proper casing

function App() {
  const cityCodes = data.List.map((city) => city.CityCode);

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const weatherResults = await fetchWeatherData(cityCodes);
      setWeatherData(weatherResults);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {weatherData.map((weatherInfo, index) => (
        <WeatherCard key={index} weatherInfo={weatherInfo} />
      ))}
    </div>
  );
}

export default App;
