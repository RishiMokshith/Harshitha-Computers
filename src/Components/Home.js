import React from 'react';
import Header from '../Components/Header';
import '../Styles/Home.css';
import Welcome from './Welcome';
import Footer from './Footer';
import Courses from './Courses';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-home">
        <section id="home-home">
          <div className='home-video'>
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              muted
            >
              <source src={`${process.env.PUBLIC_URL}Untitled_Project_V5.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          </section>

        
           
      </main>
      <Welcome/>
      <WhyChooseUs/>
      <Footer/>
    </>
  );
};

export default Home;
