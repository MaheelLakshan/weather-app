import React from 'react';
import './CardBelowContain.css';
import {
  NAVIGATOR_IMAGE,
  SEPARATOR_IMAGE,
} from '../../constants/Card_Constants';

function cardBelowContain({ weatherInfo }) {
  const { main, visibility, wind, sys } = weatherInfo;
  const pressure = main.pressure;
  const humidity = main.humidity;
  const visibility_rounded = visibility / 1000;
  const wind_speed = parseFloat(wind.speed.toFixed(1));
  const wind_degree = wind.deg;
  const RiseTime = new Date(sys.sunrise * 1000);
  const formattedSunriseTime = RiseTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const SetTime = new Date(sys.sunset * 1000);
  const formattedSunsetTime = SetTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="card-details-container">
      {/* First Section */}
      <div className="section section1">
        <div className="section-content">
          <div className="section-column">
            <div className="FirstPiece">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                Pressure:{pressure}hPa
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                Humidity: {humidity}%
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                Visibility: {visibility_rounded}km
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section1">
        <div className="section-content">
          <div className="section-column">
            <div className="section-column-seperation">
              <img
                src={SEPARATOR_IMAGE}
                alt="Weather Icon"
                // style={{ marginRight: '10px' }}
                className="section-image"
              />
            </div>
          </div>{' '}
        </div>
      </div>

      {/* Second Section */}
      <div className="section section2">
        <div className="SecondPiece">
          <img
            src={NAVIGATOR_IMAGE}
            alt="Weather Icon"
            // style={{ marginRight: '10px' }}
            className="section-image"
          />
          <div className="MiddlePiece">
            {wind_speed}m/s {wind_degree} Degree
          </div>
        </div>
      </div>
      <div className="section section1">
        <div className="section-content">
          <div className="section-column-seperation">
            <img
              src={SEPARATOR_IMAGE}
              alt="Weather Icon"
              // style={{ marginRight: '10px' }}
              className="section-image"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="section section1">
        <div className="section-content">
          <div className="section-column">
            <div className="FirstPiece">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                Sunrise:{formattedSunriseTime}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                Sunset: {formattedSunsetTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardBelowContain;
