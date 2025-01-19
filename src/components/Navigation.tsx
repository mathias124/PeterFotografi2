import React, { useState } from 'react';
import './Navigation.css';

interface NavigationProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedTab, onTabChange }) => {
  const tabs = [
    {
      label: 'Cities / Countries',
      subcategories: ['Bangkok', 'France'], // Subcategories for the dropdown
    },
    { label: 'Black & White' },
    { label: 'Nature & Landscape' },
    { label: 'Street Life' },
    { label: 'concert' },
    { label: 'something else' },
    { label: 'contact' },
  ];

  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <nav className="navigation">
      <div className="logo">PETER SCHRADER PHOTOFOLIO</div>
      <div className="nav-tabs">
        {tabs.map((tab) =>
          tab.subcategories ? (
            <div
              key={tab.label}
              className="nav-tab dropdown-container"
              onMouseEnter={() => setHoveredTab(tab.label)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <button
                className={`nav-tab-button ${selectedTab === tab.label ? 'active' : ''}`}
                onClick={() => onTabChange(tab.label)}
              >
                {tab.label}
              </button>
              {hoveredTab === tab.label && (
                <div className="dropdown-menu">
                  {tab.subcategories.map((subcategory) => (
                    <div
                      key={subcategory}
                      className="dropdown-item"
                      onClick={() => onTabChange(subcategory)}
                    >
                      {subcategory}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={tab.label}
              className={`nav-tab ${selectedTab === tab.label ? 'active' : ''}`}
              onClick={() => onTabChange(tab.label)}
            >
              {tab.label.charAt(0).toUpperCase() + tab.label.slice(1)}
            </button>
          )
        )}
      </div>
    </nav>
  );
};

export default Navigation;
