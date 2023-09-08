import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import './weatherCard.css';

function WeatherCard({ weatherInfo, isSelected, onClick }) {
  const { name, main, weather, dt, id } = weatherInfo;
  const description = weather[0].description;
  const temp = main.temp;
  const timestamp = dt;

  const date = new Date(timestamp * 1000);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const formattedTime = date.toLocaleTimeString();

  const weatherImageMapping = {
    'clear sky': 'Clear_Sky.png',
    mist: 'Mist.png',
    'few clouds': 'Few_Clouds.png',
    'broken clouds': 'Broken_Clouds.png',
    'overcast clouds': 'Light_Ran.png',
  };
  const weatherIcons = {
    'clear sky': 'clear_sky_icon.png',
    mist: 'mist_icon.png',
    'few clouds': 'few_clouds_icon.png',
    'broken clouds': 'broken_clouds_icon.png',
    'overcast clouds': 'light_rain_icon.png',
  };
  const weatherImage = weatherImageMapping[description] || 'Mist.png';
  const weatherIcon = weatherIcons[description] || 'mist_icon.png';

  return (
    <Card
      style={{ background: '#383b47' }}
      className={`weather-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <CardActionArea>
        <div className="card-media-container">
          <img
            className="card-media"
            src={require(`../../assets/${weatherImage}`)}
            alt="Weather Icon"
          />
          <div className="card-name-overlay">
            <Typography
              variant="h6"
              component="div"
              style={{ fontWeight: 'bold' }}
            >
              {name}
            </Typography>
          </div>
          <div className="card-temp-overlay">
            <Typography variant="h5" component="div">
              {temp}°C
            </Typography>
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

        <CardContent style={{ background: '#383b47' }}>
          {/* <Typography variant="body2" color="#e5e1e1">
            Description: {description}
          </Typography> */}
          {/* <Typography variant="body2" color="#e5e1e1">
            Temperature: {temp}°C
          </Typography> */}
          <Typography variant="body2" color="#e5e1e1">
            Last Update: {formattedDate} at {formattedTime}
          </Typography>
          <Typography variant="body2" color="#e5e1e1">
            ID: {id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default WeatherCard;
