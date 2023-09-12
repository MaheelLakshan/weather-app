//Api services
export const UNITS = 'metric';

//popUp card details
export const SELECTCARD = {
  'clear sky': 'Clear_Sky_Popup.png',
  mist: 'Mist_Popup.png',
  'few clouds': 'Few_Clouds_Popup.png',
  'broken clouds': 'Broken_Clouds_Popup.png',
  'overcast clouds': 'Light_Ran_Popup.png',
};

//Weather icon indicator under the the Wether card
export const WEATHER_ICONS = {
  'clear sky': 'clear_sky_icon.png',
  mist: 'mist_icon.png',
  'few clouds': 'few_clouds_icon.png',
  'broken clouds': 'broken_clouds_icon.png',
  'overcast clouds': 'light_rain_icon.png',
};

//Weather image under the the Wether card
export const WEATHER_IMAGE_MAPPING = {
  'clear sky': 'Clear_Sky.png',
  mist: 'Mist.png',
  'few clouds': 'Few_Clouds.png',
  'broken clouds': 'Broken_Clouds.png',
  'overcast clouds': 'Light_Ran.png',
};

export const OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };



//App.js

export const CACHE_KEY = 'weatherData';
export const CACHE_TIMEOUT = 300000; // 5 minutes in milliseconds