import React from 'react';
import logo from '../../assets/Logo.png';
import './Header.css';

function Header() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" />
      <div className="logo-text">Weather App</div>
    </div>
  );
}

export default Header;
