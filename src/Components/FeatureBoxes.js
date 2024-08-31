import React from 'react';
import '../Styles/FeatureBoxes.css';

const FeatureBoxes = () => {
  return (
    <div className='Feature-heading'>
        <h1>Our Key Features</h1>
    <div className="feature-container">
        
      <div className="feature-box">
        <h3>Experienced Faculty</h3>
        <p>The faculty members possess over 10 years of experience in the technology and computer science industries, bringing real-world knowledge and practical insights into the classroom.</p>
        <p>They are committed to providing personalized guidance and mentorship, ensuring that each student receives the support they need to succeed academically and professionally.</p>
        <p>The faculty utilizes cutting-edge teaching techniques and tools, integrating the latest industry trends and technologies to provide students with a forward-thinking and comprehensive education.</p>
      </div>
      <div className="feature-box">
        <h3>Advanced Technology</h3>
        <p>Our institution is equipped with state-of-the-art computer labs, featuring the latest hardware and software, enabling hands-on learning with cutting-edge technology.</p>
        <p>We utilize advanced cloud-based platforms that allow students to access learning materials, collaborate on projects, and work on assignments from anywhere, ensuring a seamless learning experience.</p>
        <p>Students are trained using real-time industry tools and software, preparing them to tackle the technological challenges of the modern workplace with confidence.</p>
      </div>
      <div className="feature-box">
        <h3>Career Growth</h3>
        <p>We offer dedicated job placement support, including resume building, interview preparation, and connections with industry professionals, to help students secure rewarding careers.</p>
        <p>Our programs are designed to provide students with real-world skills, aligning with industry demands and enhancing their employability upon graduation.</p>
        <p>Students have access to workshops, seminars, and certifications that keep them updated with the latest trends and innovations, ensuring their skills remain relevant and competitive in the job market.</p>

      </div>
    </div>
    </div>
  );
};

export default FeatureBoxes;

