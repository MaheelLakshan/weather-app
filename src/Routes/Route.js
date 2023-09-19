import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../pages/HomePage/App';
import SelectedCardPage from '../pages/SelectedCardPage/SelectedCardPage.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<SelectedCardPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
