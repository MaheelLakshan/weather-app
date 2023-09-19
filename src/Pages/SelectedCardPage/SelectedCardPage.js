import React, { useEffect, useState } from 'react';
import './SelectedCardPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PopUpCard from '../../components/popUp/PopUpCard';
import { useParams } from 'react-router-dom';
import { fetchSelectedWeatherData } from '../../services/apiServices';

function SelectedCardPage() {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (id) {
        const data = await fetchSelectedWeatherData(id);
        setFetchData(data);
      }
    };
    init();
  }, [id]);

  return (
    <div className="selectedCardContainer">
      <Header />
      <div className="weather-card-container">
        {!!fetchData && <PopUpCard data={fetchData} />}
      </div>
      <Footer />
    </div>
  );
}

export default SelectedCardPage;
