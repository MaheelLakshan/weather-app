import axios from 'axios';
import { UNITS, API } from '../Constants/Constant';

export const fetchWeatherData = async (cityCodes) => {
  const promises = cityCodes.map(async (cityCode) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${cityCode}&units=${UNITS}&appid=${API}`;

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
