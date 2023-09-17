import React from 'react';
import { Card, CardContent, CardActionArea } from '@mui/material';
import './weatherCard.css';

import CardBelowContain from '../CardBelowContain/cardBelowContain';
import CardAboveContain from '../CardAboveContain/CardAboveContain';

function WeatherCard({ weatherInfo, onClick }) {
  return (
    <Card style={{ background: '#383b47' }} onClick={onClick}>
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
