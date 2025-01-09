import React from 'react';
import './Navigation.css';

interface NavigationProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedTab, onTabChange }) => {
  const tabs = ['nature', 'culture', 'portrait', 'contact'];

  return (
    <nav className="navigation">
      <div className="logo">PETER SCHRADER PHOTOFOLIO</div>
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`nav-tab ${selectedTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
