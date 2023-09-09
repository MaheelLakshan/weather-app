import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './PopUpCard.css'; // Import the CSS file

function PopUpCard({ selectedCardData, onClose }) {
  const { name, main, weather, dt, id } = selectedCardData;
  const description = weather[0].description;
  const temp = main.temp;

  const selectCard = {
    'clear sky': 'Clear_Sky_Popup.png',
    mist: 'Mist_Popup.png',
    'few clouds': 'Few_Clouds_Popup.png',
    'broken clouds': 'Broken_Clouds_Popup.png',
    'overcast clouds': 'Light_Ran_Popup.png',
  };

  const weatherIcons = {
    'clear sky': 'clear_sky_icon.png',
    mist: 'mist_icon.png',
    'few clouds': 'few_clouds_icon.png',
    'broken clouds': 'broken_clouds_icon.png',
    'overcast clouds': 'light_rain_icon.png',
  };

  const selectImage = selectCard[description] || 'Mist_Popup.png';
  const weatherIcon = weatherIcons[description] || 'mist_icon.png';

  return (
    <div className="popup-container">
      <Card className="card-popup" style={{ background: '#383b47' }}>
        <div className="card-media-container_Popup">
          <div className="close-button card-back-overlay">
            <Button variant="contained" onClick={onClose}>
              &lt;
            </Button>
          </div>

          <img
            className="card-media-popup"
            src={require(`../../assets/PopUp/${selectImage}`)}
            alt="Weather Icon"
          />
          <div className="card-name-overlay_popup">
            <Typography
              variant="h4"
              component="div"
              style={{ fontWeight: 'bold' }}
            >
              {name}
            </Typography>
          </div>

          <div className="card-temp-overlay_popup">
            <Typography variant="h5" component="div">
              {temp}°C
            </Typography>
          </div>
          <div className="card-seperate-overlay_popup">
            <img
              src={require(`../../assets/PopUp/separator.png`)}
              alt="Weather Icon"
              style={{ marginRight: '10px' }}
            />
          </div>

          <div className="card-icons-overlay_popup">
            <Typography variant="h8" component="div">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '10px',
                }}
              >
                <img
                  src={require(`../../assets/${weatherIcon}`)}
                  alt="Weather Icon"
                  style={{ marginRight: '10px' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {description}
              </div>
            </Typography>
          </div>
        </div>

        <CardContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1" className="body-text" color="#e5e1e1">
              Last Update: {new Date(dt * 1000).toLocaleString()}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1" className="body-text" color="#e5e1e1">
              ID: {id}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PopUpCard;
