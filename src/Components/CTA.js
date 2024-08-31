import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/WhyChooseUs.css';

const CTA = ({ text, buttonText }) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  return (
    <div className="cta-section">
      <h2>{text}</h2>
      <button onClick={handleEnrollClick}>{buttonText}</button>
    </div>
  );
};

export default CTA;

