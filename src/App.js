import React, { useEffect, useState } from 'react';
import data from './data/cities.json';
import { fetchWeatherData } from './services/apiServices'; // Import the API function
import WeatherCard from './components/cards/weatherCard'; // Ensure proper casing
import background from './assets/1 Dashboard - 1200px.png';
import PopUpCard from './components/popUp/PopUpCard';
import Header from './components/Header/Header';
import SearchSection from './components/SeachSection/SearchSection';
import './App.css';
import { CACHE_KEY, CACHE_TIMEOUT } from './Constants/Constant';

function App() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  // City Codes from JSON data
  const cityCodes = data.List.map((city) => city.CityCode);

  // Function to fetch and cache weather data
  const fetchAndCacheWeatherData = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      // Use cached data if it exists and is not expired
      const parsedData = JSON.parse(cachedData);
      const currentTime = new Date().getTime();
      if (
        parsedData.timestamp &&
        currentTime - parsedData.timestamp < CACHE_TIMEOUT
      ) {
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
    setSelectedCardIndex(index);
    setSelectedCardData(weatherData[index]);
  };

  const handleBackClick = () => {
    setSelectedCardIndex(null);
    setSelectedCardData(null);
  };

  return (
    <div className="app-container">
      <div className="background-image">
        <img src={background} alt="Background" />
      </div>
      <Header />
      <SearchSection />
      <div
        className={`${
          selectedCardIndex != null
            ? 'weather-card-container'
            : 'weather-card-container-twoColumn'
        }`}
      >
        {/* <div className="weather-card-container">weather-cards */}
        {!selectedCardData &&
          weatherData.map((weatherInfo, index) => (
            <WeatherCard
              key={index}
              weatherInfo={weatherInfo}
              onClick={() => handleCardClick(index)}
            />
          ))}

        {selectedCardData && (
          <div>
            <PopUpCard
              selectedCardData={selectedCardData}
              onClose={handleBackClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
