import React from 'react';
import Slider from 'react-slick';
import '../Styles/WhyChooseUs.css';
import Feature from './Feature';
import Testimonial from './Testimonial';
import CTA from './CTA';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="why-choose-us-container">
      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <Feature icon="🎓" title="Experienced Faculty" description="Learn from industry experts and seasoned educators." />
          <Feature icon="💼" title="Job Placement" description="Get assistance with job placements and internships." />
          <Feature icon="📚" title="Comprehensive Curriculum" description="Curriculum designed to meet industry demands." />
          <Feature icon="🌐" title="Global Opportunities" description="Opportunities to participate in international programs." />
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <Slider {...settings} className="testimonials-slider">
          <Testimonial photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl71dRqWx8ik8rj8lFqDBV78EUfabAKjlpmS1O4Z1tABUfeWlZb2F9xg4w3g&s" name="Arun" text="This institute changed my life with their quality education and job placement assistance." />
          <Testimonial photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSKAQurChE5XfZ7I09zcDRjYkFsNKHQrpBB7OeM5rYm9zHhCYqwl4PIqDHg&s" name="Varun" text="The faculty here are top-notch. I feel well-prepared for my career." />
          <Testimonial photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVU_ALRpN6IHWhdRS35G0CcGO21qI6HmlIAdrlyiHAAOExK9PT2EiOg1jaJw&s" name="Charan" text="The curriculum is comprehensive and up-to-date with industry standards." />
          <Testimonial photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVU_ALRpN6IHWhdRS35G0CcGO21qI6HmlIAdrlyiHAAOExK9PT2EiOg1jaJw&s" name="Tharun" text="I had the opportunity to participate in international programs, which broadened my horizons." />
          <Testimonial photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND6BCNBezg8bzWpjldiP-a-oGl9B2fJniWbr6lA-PHjuAFspq9ve8gzVI1w&s" name="Saran" text="Job placement assistance was incredibly helpful in starting my career." />
        </Slider>
      </section>

      <CTA text="Join Us Today"  buttonText="Enroll Now" />
    </div>
  );
};

export default WhyChooseUs;

