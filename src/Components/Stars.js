import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Stars.css';

const Stars = ({ rating, onClick }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    return (
        <div className="stars" onClick={onClick}>
            {Array.from({ length: totalStars }, (_, index) => (
                <span key={index} className={`star ${index < fullStars ? 'full' : ''} ${index === fullStars && hasHalfStar ? 'half' : ''}`}>
                    &#9733; 
                </span>
            ))}
            <span className="rating-text">({rating.toFixed(1)})</span>
        </div>
    );
};

Stars.propTypes = {
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func,
};

export default Stars;
