import React from 'react';
import './CardAboveContain.css';
import { Typography } from '@mui/material';
import * as CardConstants from '../../constants/Card_Constants'; // Import the constants here

function CardAboveContain({ weatherInfo }) {
  const { name, main, weather, dt, sys } = weatherInfo;
  const description = weather[0].description;
  const temp = Math.round(main.temp);
  const min_temp = Math.round(main.temp_min);
  const max_temp = Math.round(main.temp_max);
  const date = new Date(dt * 1000);

  const formattedDate = date.toLocaleDateString(undefined, {
    month: 'short', // Display month in short form (e.g., "Feb" for February)
    day: 'numeric', // Display day of the month
  });

  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const weatherImage =
    CardConstants.WEATHER_IMAGE_MAPPING[description] ||
    CardConstants.WEATHER_IMAGE_DEFAULT;
  const weatherIcon =
    CardConstants.WEATHER_ICONS[description] ||
    CardConstants.WEATHER_ICON_DEFAULT;
  return (
    <div className="card-media-container">
      <img
        className="card-media"
        src={require(`../../assets/${weatherImage}`)}
        alt="Weather Icon"
      />
      <div className="card-name-overlay">
        <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
          <div>
            {name}, {sys.country}
          </div>
          <div className="card-date-overlay">
            {formattedTime},{formattedDate}
          </div>
        </Typography>
      </div>

      <div className="card-temp-overlay">
        <span>
          {temp}
          {CardConstants.TEMPERATURE_UNIT}
        </span>
        <span style={{ fontSize: CardConstants.TEMPERATURE_ICON_SIZE }}>C</span>
      </div>

      <div className="card-close-overlay">X</div>

      <div className="card-temp_muchdetails-overlay">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          Temp Min:{' '}
          <div style={{ marginLeft: '8px' }}>
            {min_temp}
            {CardConstants.TEMPERATURE_UNIT}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          Temp Max:{' '}
          <div style={{ marginLeft: '5px' }}>
            {max_temp}
            {CardConstants.TEMPERATURE_UNIT}
          </div>
        </div>
      </div>

      <div className="card-icons-overlay">
        <Typography variant="h8" component="div">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={require(`../../assets/${weatherIcon}`)}
              alt="Weather Icon"
              style={{ marginRight: '10px' }}
            />
            <div>{description}</div>
          </div>
        </Typography>
      </div>
    </div>
  );
}

export default CardAboveContain;
