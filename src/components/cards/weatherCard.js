import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import './weatherCard.css';
import {
  WEATHER_IMAGE_MAPPING,
  WEATHER_ICONS,
  OPTIONS,
} from '../../Constants/Constant';

function WeatherCard({ weatherInfo, onClick }) {
  const { name, main, weather, dt, id } = weatherInfo;
  const description = weather[0].description;
  const temp = main.temp;
  const timestamp = dt;
  const date = new Date(timestamp * 1000);

  const formattedDate = date.toLocaleDateString(undefined, OPTIONS);
  const formattedTime = date.toLocaleTimeString();

  const weatherImage = WEATHER_IMAGE_MAPPING[description] || 'Mist.png';
  const weatherIcon = WEATHER_ICONS[description] || 'mist_icon.png';

  return (
    <Card style={{ background: '#383b47' }} onClick={onClick}>
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

        <CardContent style={{ background: '#383b47', margin: '-5px' }}>
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
