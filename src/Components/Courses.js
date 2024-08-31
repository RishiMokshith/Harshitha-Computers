import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import '../Styles/Courses.css';
import Stars from './Stars';
import Header from './Header';
import Footer from './Footer';

const apiUrl = 'http://localhost:8000/reviews';

const Courses = () => {
    const courses = [
        {
                         title: 'Java',
                         description: 'Learn the fundamentals of Java programming language.',
                         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAZar1VIvatHSsPIB-vB2xWeuKFHLDdebR5XOzEOteYzmvQBuBfKqsdpKwm3dTGpDiBY&usqp=CAU',
                         code: 'java001'
                     },
                     {
                         title: 'Python',
                         description: 'Master Python and its versatile use cases    to solve the programing issues.',
                         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIeVu7kf17z_H1uf9ZKaxnNbaavKzuAJ9rw&s',
                         code: 'python001'
                     },
                     {
                                     title: 'DCA',
                                     description: 'Diploma in Computer Applications - basic computer skills.',
                                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVovhoGw3-KjA3aZWqmNYI2Ui4TC6XcsL-w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvR8_Rk1K1fER6AQJ8B8wVKfyZOXV8hLbQA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdh7ahzlPHqUayVCIJiMmv4l7iDmAA7ixYg&s',
                                     code: 'dca001'
                                 },
                                 {
                                     title: 'PGDCA',
                                     description: 'Post Graduate Diploma in Computer Applications - advanced skills.',
                                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPuomHg9Af9x_aNMjL17AhIL0O7oq5BeWuA&s',
                                     code: 'pgdca001'
                                 },
                                 {
                                     title: 'MS Office',
                                     description: 'Comprehensive training in Microsoft Office tools with all the skills',
                                     image: 'https://e1.pxfuel.com/desktop-wallpaper/918/209/desktop-wallpaper-microsoft-office-2013-tiles-windows-8-by-davi5alexander-on-backgrounds.jpg',
                                     code: 'msoffice001'
                                 },
                                 {
                                     title: 'DTP',
                                     description: 'Desktop Publishing - Learn to design and produce print materials end to end',
                                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZoQQmky3guHQnUHwEh2oXQsJGQJZmv9R0w&usqp=CAU',
                                     code: 'dtp001'
                                 },
                                 {
                                     title: 'Tally',
                                     description: 'Accounting and financial management with Tally software.',
                                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-SQDDVy7c8N3q4JrOAg47nIyduksZV6jWw&usqp=CAU',
                                     code: 'tally001'
                                 },
                                 {
                                     title: 'C Language',
                                     description: 'Understanding the C programming language.',
                                     image: 'https://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/001/652/wide/learn_c_program.jpg?1455608462',
                                     code: 'c001'
                                 },
                                 {
                                     title: 'Photoshop',
                                     description: 'Master Photoshop for professional photo editing.',
                                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87oz-tp2XE4vWvp433opdU6LSdV0BbNFhsRIQak4REY8FA7LVKXFbsWRKQQ&s',
                                     code: 'photoshop001'
                                }
    ];

    const videos = [
        'https://videos.pexels.com/video-files/7801479/7801479-sd_640_360_30fps.mp4',
        'https://videos.pexels.com/video-files/15336139/15336139-sd_640_360_30fps.mp4',
    ];

    const settings = {
        dots: true,
       infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const [ratings, setRatings] = useState({});

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                const reviews = response.data;
                const groupedReviews = reviews.reduce((acc, review) => {
                    if (!acc[review.courseCode]) {
                        acc[review.courseCode] = [];
                    }
                    acc[review.courseCode].push(review);
                    return acc;
                }, {});
                setRatings(groupedReviews);
            })
            .catch(error => {
                console.error('There was an error fetching the reviews!', error);
            });
    }, []);

    const handleRatingSubmit = (courseCode) => {
        const rating = parseFloat(prompt('Please give your star rating (1-5):'));
        if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
            alert('Please enter a valid rating between 1 and 5.');
            return;
        }

        const username = prompt('Enter your name:');
        const village = prompt('Enter your village/town/city:');

        const existingReviews = ratings[courseCode] || [];
        const isDuplicate = existingReviews.some(review => review.username === username);

        if (isDuplicate) {
            alert('You have already reviewed this course.');
            return;
        }

        const newReview = { courseCode, rating, username, village };

        axios.post(apiUrl, newReview)
            .then(response => {
                const updatedRatings = { ...ratings };
                if (!updatedRatings[courseCode]) {
                    updatedRatings[courseCode] = [];
                }
                updatedRatings[courseCode].push(response.data);
                setRatings(updatedRatings);
            })
            .catch(error => {
                console.error('There was an error submitting the review!', error);
            });
    };

    const calculateOverallRating = (courseRatings) => {
        if (!courseRatings || courseRatings.length === 0) return 0;
        const total = courseRatings.reduce((acc, curr) => acc + curr.rating, 0);
        return (total / courseRatings.length).toFixed(1);
    };

    return (
        
        <div className="Courses">
            <Header/>
            <Slider {...settings} className="video-carousel">
                {videos.map((video, index) => (
                    <div key={index}>
                        <video src={video} controls className="carousel-video" autoPlay muted loop />
                    </div>
                ))}
            </Slider>
            <div className="Course-Heading">
                <h2>Courses Offered</h2>
                <div className="courses-container">
                    {courses.map((course, index) => (
                        <div key={index} className="course-box">
                            <img src={course.image} alt={`${course.title} Course`} />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className="rating-section">
                                <Stars
                                    rating={parseFloat(calculateOverallRating(ratings[course.code]))}
                                    onClick={() => handleRatingSubmit(course.code)}
                                />
                                <div className="reviews">
                                    <span onClick={() => alert(`Reviews:\n${ratings[course.code] ? ratings[course.code].map(r => `${r.username} (${r.village}): ${r.rating} stars`).join('\n') : 'No reviews yet.'}`)}>
                                        {ratings[course.code] ? `${ratings[course.code].length} review(s)` : '0 reviews'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Courses;


// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';
// import '../Styles/Courses.css';
// import Stars from './Stars';
// import Header from './Header';
// import Footer from './Footer';


// const apiUrl = 'http://localhost:8000/reviews';

// const Courses = () => {
//     const courses = [
//         {
//             title: 'Java',
//             description: 'Learn the fundamentals of Java programming language.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAZar1VIvatHSsPIB-vB2xWeuKFHLDdebR5XOzEOteYzmvQBuBfKqsdpKwm3dTGpDiBY&usqp=CAU',
//             code: 'java001'
//         },
//         {
//             title: 'Python',
//             description: 'Master Python and its versatile use cases to solve the programing issues.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIeVu7kf17z_H1uf9ZKaxnNbaavKzuAJ9rw&s',
//             code: 'python001'
//         },
//         {
//             title: 'DCA',
//             description: 'Diploma in Computer Applications - basic computer skills.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVovhoGw3-KjA3aZWqmNYI2Ui4TC6XcsL-w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvR8_Rk1K1fER6AQJ8B8wVKfyZOXV8hLbQA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdh7ahzlPHqUayVCIJiMmv4l7iDmAA7ixYg&s',
//             code: 'dca001'
//         },
//         {
//             title: 'PGDCA',
//             description: 'Post Graduate Diploma in Computer Applications - advanced skills.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPuomHg9Af9x_aNMjL17AhIL0O7oq5BeWuA&s',
//             code: 'pgdca001'
//         },
//         {
//             title: 'MS Office',
//             description: 'Comprehensive training in Microsoft Office tools with all the skills',
//             image: 'https://e1.pxfuel.com/desktop-wallpaper/918/209/desktop-wallpaper-microsoft-office-2013-tiles-windows-8-by-davi5alexander-on-backgrounds.jpg',
//             code: 'msoffice001'
//         },
//         {
//             title: 'DTP',
//             description: 'Desktop Publishing - Learn to design and produce print materials end to end',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZoQQmky3guHQnUHwEh2oXQsJGQJZmv9R0w&usqp=CAU',
//             code: 'dtp001'
//         },
//         {
//             title: 'Tally',
//             description: 'Accounting and financial management with Tally software.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-SQDDVy7c8N3q4JrOAg47nIyduksZV6jWw&usqp=CAU',
//             code: 'tally001'
//         },
//         {
//             title: 'C Language',
//             description: 'Understanding the C programming language.',
//             image: 'https://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/001/652/wide/learn_c_program.jpg?1455608462',
//             code: 'c001'
//         },
//         {
//             title: 'Photoshop',
//             description: 'Master Photoshop for professional photo editing.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87oz-tp2XE4vWvp433opdU6LSdV0BbNFhsRIQak4REY8FA7LVKXFbsWRKQQ&s',
//             code: 'photoshop001'
//        }
//     ];

//     const videos = [
//         'https://videos.pexels.com/video-files/7801479/7801479-sd_640_360_30fps.mp4',
//         'https://videos.pexels.com/video-files/15336139/15336139-sd_640_360_30fps.mp4',
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//     };

//     const [ratings, setRatings] = useState({});

//     useEffect(() => {
//         axios.get(apiUrl)
//             .then(response => {
//                 const reviews = response.data;
//                 const groupedReviews = reviews.reduce((acc, review) => {
//                     if (!acc[review.courseCode]) {
//                         acc[review.courseCode] = [];
//                     }
//                     acc[review.courseCode].push(review);
//                     return acc;
//                 }, {});
//                 setRatings(groupedReviews);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the reviews!', error);
//             });
//     }, []);

//     const handleRatingSubmit = (courseCode) => {
//         const rating = parseFloat(prompt('Please give your star rating (1-5):'));
//         if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
//             alert('Please enter a valid rating between 1 and 5.');
//             return;
//         }

//         const username = prompt('Enter your name:');
//         const village = prompt('Enter your village/town/city:');

//         const existingReviews = ratings[courseCode] || [];
//         const isDuplicate = existingReviews.some(review => review.username === username);

//         if (isDuplicate) {
//             alert('You have already reviewed this course.');
//             return;
//         }

//         const newReview = { courseCode, rating, username, village };

//         axios.post(apiUrl, newReview)
//             .then(response => {
//                 const updatedRatings = { ...ratings };
//                 if (!updatedRatings[courseCode]) {
//                     updatedRatings[courseCode] = [];
//                 }
//                 updatedRatings[courseCode].push(response.data);
//                 setRatings(updatedRatings);
//             })
//             .catch(error => {
//                 console.error('There was an error submitting the review!', error);
//             });
//     };

//     const calculateOverallRating = (courseRatings) => {
//         if (!courseRatings || courseRatings.length === 0) return 0;
//         const total = courseRatings.reduce((acc, curr) => acc + curr.rating, 0);
//         return (total / courseRatings.length).toFixed(1);
//     };

//     return (
//         <div className="Courses">
//             <Header />
//             <Slider {...settings} className="video-carousel">
//                 {videos.map((video, index) => (
//                     <div key={index}>
//                         <video src={video} controls className="carousel-video" autoPlay muted loop />
//                     </div>
//                 ))}
//             </Slider>
//             <div className="Course-Heading">
//                 <h2>Courses Offered</h2>
//                 <div className="courses-container">
//                     {courses.map((course, index) => (
//                         <div key={index} className="course-box">
//                             <img src={course.image} alt={`${course.title} Course`} />
//                             <h3>{course.title}</h3>
//                             <p>{course.description}</p>
//                             <div className="rating-section">
//                                 <Stars
//                                     rating={parseFloat(calculateOverallRating(ratings[course.code]))}
//                                     onClick={() => handleRatingSubmit(course.code)}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Courses;


// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';
// import '../Styles/Courses.css';
// import Stars from './Stars';
// import Header from './Header';
// import Footer from './Footer';

// const apiUrl = 'http://localhost:8000/reviews'; 

// const Courses = () => {
//     const courses = [
//         {
//             title: 'Java',
//             description: 'Learn the fundamentals of Java programming language.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAZar1VIvatHSsPIB-vB2xWeuKFHLDdebR5XOzEOteYzmvQBuBfKqsdpKwm3dTGpDiBY&usqp=CAU',
//             code: 'java001'
//         },
//         {
//             title: 'Python',
//             description: 'Master Python and its versatile use cases to solve the programing issues.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIeVu7kf17z_H1uf9ZKaxnNbaavKzuAJ9rw&s',
//             code: 'python001'
//         },
//         {
//             title: 'DCA',
//             description: 'Diploma in Computer Applications - basic computer skills.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVovhoGw3-KjA3aZWqmNYI2Ui4TC6XcsL-w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvR8_Rk1K1fER6AQJ8B8wVKfyZOXV8hLbQA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdh7ahzlPHqUayVCIJiMmv4l7iDmAA7ixYg&s',
//             code: 'dca001'
//         },
//         {
//             title: 'PGDCA',
//             description: 'Post Graduate Diploma in Computer Applications - advanced skills.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPuomHg9Af9x_aNMjL17AhIL0O7oq5BeWuA&s',
//             code: 'pgdca001'
//         },
//         {
//             title: 'MS Office',
//             description: 'Comprehensive training in Microsoft Office tools with all the skills',
//             image: 'https://e1.pxfuel.com/desktop-wallpaper/918/209/desktop-wallpaper-microsoft-office-2013-tiles-windows-8-by-davi5alexander-on-backgrounds.jpg',
//             code: 'msoffice001'
//         },
//         {
//             title: 'DTP',
//             description: 'Desktop Publishing - Learn to design and produce print materials end to end',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZoQQmky3guHQnUHwEh2oXQsJGQJZmv9R0w&usqp=CAU',
//             code: 'dtp001'
//         },
//         {
//             title: 'Tally',
//             description: 'Accounting and financial management with Tally software.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-SQDDVy7c8N3q4JrOAg47nIyduksZV6jWw&usqp=CAU',
//             code: 'tally001'
//         },
//         {
//             title: 'C Language',
//             description: 'Understanding the C programming language.',
//             image: 'https://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/001/652/wide/learn_c_program.jpg?1455608462',
//             code: 'c001'
//         },
//         {
//             title: 'Photoshop',
//             description: 'Master Photoshop for professional photo editing.',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87oz-tp2XE4vWvp433opdU6LSdV0BbNFhsRIQak4REY8FA7LVKXFbsWRKQQ&s',
//             code: 'photoshop001'
//        }
//     ];

//     const videos = [
//         'https://videos.pexels.com/video-files/7801479/7801479-sd_640_360_30fps.mp4',
//         'https://videos.pexels.com/video-files/15336139/15336139-sd_640_360_30fps.mp4',
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//     };

//     const [ratings, setRatings] = useState({});

//     useEffect(() => {
//         axios.get(apiUrl)
//             .then(response => {
//                 const reviews = response.data;
//                 const groupedReviews = reviews.reduce((acc, review) => {
//                     if (!acc[review.courseCode]) {
//                         acc[review.courseCode] = [];
//                     }
//                     acc[review.courseCode].push(review);
//                     return acc;
//                 }, {});
//                 setRatings(groupedReviews);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the reviews!', error);
//             });
//     }, []);

//     const handleRatingSubmit = (courseCode) => {
//         const rating = parseFloat(prompt('Please give your star rating (1-5):'));
//         if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
//             alert('Please enter a valid rating between 1 and 5.');
//             return;
//         }

//         const username = prompt('Enter your name:');
//         const village = prompt('Enter your village/town/city:');

//         const existingReviews = ratings[courseCode] || [];
//         const isDuplicate = existingReviews.some(review => review.username === username);

//         if (isDuplicate) {
//             alert('You have already reviewed this course.');
//             return;
//         }

//         const newReview = { courseCode, rating, username, village };

//         axios.post(apiUrl, newReview)
//             .then(response => {
//                 const updatedRatings = { ...ratings };
//                 if (!updatedRatings[courseCode]) {
//                     updatedRatings[courseCode] = [];
//                 }
//                 updatedRatings[courseCode].push(response.data);
//                 setRatings(updatedRatings);
//             })
//             .catch(error => {
//                 console.error('There was an error submitting the review!', error);
//             });
//     };

//     const calculateOverallRating = (courseRatings) => {
//         if (!courseRatings || courseRatings.length === 0) return 0;
//         const total = courseRatings.reduce((acc, curr) => acc + curr.rating, 0);
//         return (total / courseRatings.length).toFixed(1);
//     };

//     return (
//         <div className="Courses">
//             <Header />
//             <Slider {...settings} className="video-carousel">
//                 {videos.map((video, index) => (
//                     <div key={index}>
//                         <video src={video} controls className="carousel-video" autoPlay muted loop />
//                     </div>
//                 ))}
//             </Slider>
//             <div className="Course-Heading">
//                 <h2>Courses Offered</h2>
//                 <div className="courses-container">
//                     {courses.map((course, index) => (
//                         <div key={index} className="course-box">
//                             <img src={course.image} alt={`${course.title} Course`} />
//                             <h3>{course.title}</h3>
//                             <p>{course.description}</p>
//                             <div className="rating-section">
//                                 <Stars
//                                     rating={parseFloat(calculateOverallRating(ratings[course.code]))}
//                                     onClick={() => handleRatingSubmit(course.code)}
//                                 />
//                                 {ratings[course.code] && ratings[course.code].length > 0 && (
//                                     <div className="reviewers-list">
//                                         <h4>Reviews:</h4>
//                                         <ul>
//                                             {ratings[course.code].map((review, index) => (
//                                                 <li key={index}>
//                                                     {review.username} from {review.village} gave a rating of {review.rating} stars
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Courses;
