import React from 'react';
import './TabSelection.css';

interface TabSelectionProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const TabSelection: React.FC<TabSelectionProps> = ({ selectedTab, onTabChange }) => {
  const tabs = ['nature', 'culture', 'portrait'];

  return (
    <div className="tab-selection">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${selectedTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabSelection;

