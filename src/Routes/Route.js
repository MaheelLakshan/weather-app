import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../Pages/HomePage/App';
import SelectedCardPage from '../Pages/SelectedCardPage/SelectedCardPage.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/selectedCardData" element={<SelectedCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
