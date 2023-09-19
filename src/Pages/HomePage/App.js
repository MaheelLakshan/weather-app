import React, { useEffect, useState } from 'react';
import data from '../../data/cities.json';
import { fetchWeatherData } from '../../services/apiServices'; // Import the API function
import WeatherCard from '../../components/Cards/WeatherCard'; // Ensure proper casing
import Header from '../../components/Header/Header';
import SearchSection from '../../components/SeachSection/SearchSection';
import './App.css';
import { CACHE_KEY, CACHE_TIMEOUT } from '../../constants/App_Constants';
import Footer from '../../components/Footer/Footer';

function App() {
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

  return (
    <div className="app-container">
      <Header />

      <SearchSection />

      <div className="weather-card-container-twoColumn">
        {weatherData.map((weatherInfo, index) => (
          <WeatherCard key={index} weatherInfo={weatherInfo} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
