import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Button,
} from '@mui/material';
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

  const weatherImage = weatherImageMapping[description] || 'Mist.png';

  return (
    <Card
      className={`weather-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Weather Icon"
          height="100"
          image={require(`../../assets/${weatherImage}`)}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {temp}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last Update: {formattedDate} at {formattedTime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default WeatherCard;
