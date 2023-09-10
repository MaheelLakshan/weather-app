import axios from 'axios';
// import 'dotenv/config'

const apiKey = '635ed7741cfe41bd3522e449647baa4e';
const units = 'metric';

export const fetchWeatherData = async (cityCodes) => {
  const promises = cityCodes.map(async (cityCode) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${cityCode}&units=${units}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);

      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  });

  const weatherResults = await Promise.all(promises);

  return weatherResults.filter((data) => data !== null);
};
