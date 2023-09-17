import React, { useEffect, useState } from 'react';
import background from '../../assets/1 Dashboard - 1200px.png';
import './SelectedCardPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PopUpCard from '../../components/popUp/PopUpCard';

function SelectedCardPage() {
  return (
    <div className="selectedCardContainer">
      <div>
        <div className="backgroundImageNew">
          <img src={background} alt="Background2" />
        </div>

        <Header />

        <div className="weather-card-container">
          <PopUpCard />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default SelectedCardPage;
