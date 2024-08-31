import React, { useState, useEffect } from 'react';
import axios from 'axios';


const apiUrl = 'http://localhost:8000/reviews';

const ReviewsManager = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ courseTitle: '', rating: '', username: '', village: '' });

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the reviews!', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(apiUrl, newReview)
            .then(response => {
                setReviews([...reviews, response.data]);
                setNewReview({ courseTitle: '', rating: '', username: '', village: '' });
            })
            .catch(error => {
                console.error('There was an error submitting the review!', error);
            });
    };

    return (
        <div>
            <h2>Manage Reviews</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="courseTitle"
                    placeholder="Course Title"
                    value={newReview.courseTitle}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={newReview.rating}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="5"
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    value={newReview.username}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="village"
                    placeholder="Your Village/Town/City"
                    value={newReview.village}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
            <h3>All Reviews</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <strong>{review.courseTitle}</strong>: {review.rating} stars by {review.username} from {review.village}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewsManager;
