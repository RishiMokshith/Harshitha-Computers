import React from 'react';
import '../Styles/Welcome.css';
import FeatureBoxes from './FeatureBoxes';


const Welcome = () => {
  return (
    <div className="welcome-screen">
      <div className="welcome-overlay">
        <div className="welcome-content">
          <h1>Welcome to Harshitha Computers</h1>
          <p>Your Gateway to Mastering Your Future !</p>
        </div>
      </div>
      <FeatureBoxes />
      

    </div>
  );
};

export default Welcome;





