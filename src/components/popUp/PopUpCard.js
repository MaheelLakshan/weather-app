import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './PopUpCard.css'; // Import the CSS file

function PopUpCard({ selectedCardData, onClose }) {
  const { name, main, weather, dt, id } = selectedCardData;
  const description = weather[0].description;
  const temp = main.temp;

  return (
    <div className="popup-container">
      <Card className="card-popup">
        <CardContent>
          <Typography variant="h6" className="title">
            {name}
          </Typography>
          <Typography variant="body1" className="body-text">
            Description: {description}
          </Typography>
          <Typography variant="body1" className="body-text">
            Temperature: {temp}°C
          </Typography>
          <Typography variant="body1" className="body-text">
            Last Update: {new Date(dt * 1000).toLocaleString()}
          </Typography>
          <Typography variant="body1" className="body-text">
            ID: {id}
          </Typography>
          <div className="close-button">
            <Button variant="contained" color="primary" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PopUpCard;
