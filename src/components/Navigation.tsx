import React from 'react';
import './Navigation.css';

interface NavigationProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedTab, onTabChange, onContactClick }) => {
  const tabs = ['nature', 'culture', 'portrait', 'contact'];

  const handleTabClick = (tab: string) => {
    if (tab === 'contact') {
      onContactClick();
    } else {
      onTabChange(tab);
    }
  };

  return (
    <nav className="navigation">
      <div className="logo">PETER SCHRADER PHOTOFOLIO</div>
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`nav-tab ${selectedTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

