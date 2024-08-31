import React from 'react';
import '../Styles/WhyChooseUs.css';

const Testimonial = ({ photo, name, text }) => {
  return (
    <div className="testimonial">
      <div className="photo-frame">
        <img src={photo} alt={name} />
      </div>
      <p>{text}</p>
      <h4>{name}</h4>
    </div>
  );
};

export default Testimonial;
