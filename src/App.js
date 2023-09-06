import React, { useEffect, useState } from 'react';
import data from './data/cities.json';
import { fetchWeatherData } from './services/apiServices'; // Import the API function
import WeatherCard from './components/cards/weatherCard'; // Ensure proper casing
import background from './assets/1 Dashboard - 1200px.png';
import { Button } from '@mui/material';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cityCodes = data.List.map((city) => city.CityCode);

  const [weatherData, setWeatherData] = useState([]);
  // Function to fetch and cache weather data
  const fetchAndCacheWeatherData = async () => {
    const cachedData = localStorage.getItem('weatherData');
    if (cachedData) {
      // Use cached data if it exists and is not expired
      const parsedData = JSON.parse(cachedData);
      const currentTime = new Date().getTime();
      if (parsedData.timestamp && currentTime - parsedData.timestamp < 300000) {
        setWeatherData(parsedData.data);
        return;
      }
    }

    // Fetch fresh data if cache is expired or doesn't exist
    const weatherResults = await fetchWeatherData(cityCodes);
    setWeatherData(weatherResults);

    // Cache the data with a timestamp
    localStorage.setItem(
      'weatherData',
      JSON.stringify({ data: weatherResults, timestamp: new Date().getTime() })
    );
  };

  useEffect(() => {
    fetchAndCacheWeatherData();
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  return (
    <div className="app-container">
      <div className="cards">
        <div className="background-image">
          <img src={background} alt="Background" />
        </div>
        <div className="weather-cards">
          {weatherData.map((weatherInfo, index) => (
            <WeatherCard
              key={index}
              weatherInfo={weatherInfo}
              isSelected={selectedCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
          {selectedCard !== null && (
            <div className="back-button">
              <Button
                variant="contained"
                color="primary"
                onClick={handleBackClick}
              >
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
