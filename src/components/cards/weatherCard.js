import React from 'react';
import { Card, CardContent, CardActionArea } from '@mui/material';
import './WeatherCard.css';
import CardBelowContain from '../CardBelowContain/CardBelowContain';
import CardAboveContain from '../CardAboveContain/CardAboveContain';
import { Link } from 'react-router-dom';

function WeatherCard({ weatherInfo }) {
  return (
    <Card className="background" as={Link} to={`${weatherInfo.id}`}>
      <CardActionArea>
        <CardAboveContain weatherInfo={weatherInfo} />
        <CardContent style={{ background: '#383b47', margin: '-5px' }}>
          <CardBelowContain weatherInfo={weatherInfo} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default WeatherCard;
