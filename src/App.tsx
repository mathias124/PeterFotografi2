import React, { useState } from 'react';
import Slideshow from './components/Slideshow';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

import './App.css';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Street Life');
  const [showContact, setShowContact] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    if (tab === 'contact') {
      setShowContact(true);
    } else {
      setSelectedTab(tab);
      setShowContact(false);
    }
  };

  return (
    <div className="app">
      <Navigation selectedTab={showContact ? 'contact' : selectedTab} onTabChange={handleTabChange} />
      {showContact ? (
        <Contact />
      ) : (
        <>
          <Slideshow category={selectedTab} />
          <div className="content-overlay">
            <h1 className="main-title">Capturing Moments</h1>
            <p className="subtitle">Through the lens of imagination</p>
          </div>

        </>
      )}
    </div>
  );
};

export default App;
