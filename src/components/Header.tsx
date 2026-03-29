import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="app-title">🎬 Movie Explorer</h1>
          <p className="app-subtitle">Discover Popular, New Releases, Top Rated &amp; Upcoming movies</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
