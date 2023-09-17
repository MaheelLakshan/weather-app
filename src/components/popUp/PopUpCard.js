import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './PopUpCard.css'; // Import the CSS file
import CardBelowContain from '../CardBelowContain/cardBelowContain';
import * as PopupConstants from '../../Constants/CardConstants';
import GlobalContext from '../../Context/GlobalContext';

function PopUpCard() {
  const { selectedCardData, setSelectedCardData } = useContext(GlobalContext);
  const { name, main, weather, sys, dt } = selectedCardData;
  const min_temp = Math.round(main.temp_min);
  const max_temp = Math.round(main.temp_max);
  const description = weather[0].description;
  const temp = Math.round(main.temp);
  const date = new Date(dt * 1000);
  const selectImage =
    PopupConstants.SELECTCARD[description] || 'Mist_Popup.png';
  const weatherIcon =
    PopupConstants.WEATHER_ICONS[description] || 'mist_icon.png';

  const formattedDate = date.toLocaleDateString(undefined, {
    month: 'short', // Display month in short form (e.g., "Feb" for February)
    day: 'numeric', // Display day of the month
  });

  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="popup-container">
      <Card className="card-popup" style={{ background: '#383b47' }}>
        <div className="card-media-container_Popup">
          <div className="close-button card-back-overlay">
            <Button variant="contained" onClick={handleClose}>
              &lt;
            </Button>
          </div>

          <img
            className="card-media-popup"
            src={require(`../../assets/PopUp/${selectImage}`)}
            alt="Weather Icon"
          />

          <div className="card-name-overlay_popup">
            <div>
              {name},{sys.country}
            </div>
            <div className="card-date-overlay_popup">
              {formattedTime},{formattedDate}
            </div>
          </div>

          <div className="card-temp-overlay_popup">
            <div>{temp}°C</div>
          </div>

          <div className="card-temp_muchdetails-overlay_popUp">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              Temp Min: <div style={{ marginLeft: '8px' }}>{min_temp}°C</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              Temp Max: <div style={{ marginLeft: '5px' }}>{max_temp}°C</div>
            </div>
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
          <CardBelowContain weatherInfo={selectedCardData} />
        </CardContent>
      </Card>
    </div>
  );
}

export default PopUpCard;
