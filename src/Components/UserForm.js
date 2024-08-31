import React, { useState } from 'react';
import { FaUser, FaPhone, FaBook } from 'react-icons/fa';
import '../Styles/UserForm.css';
import Header from './Header';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    number: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          username: '',
          number: '',
          course: ''
        });
        alert('Form data submitted successfully!');
      } else {
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="user-form-container">
      <Header /> 
      <form onSubmit={handleSubmit} className="user-form">
        <div className="input-container">
          <h2>User Details</h2>
          <label htmlFor="username">Username:</label>
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={formData.username} 
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="number">Number:</label>
          <div className="input-with-icon">
            <FaPhone className="input-icon" />
            <input 
              type="tel" 
              id="number" 
              name="number" 
              value={formData.number} 
              onChange={handleChange}
              required 
              pattern="[0-9]{10}" 
              title="Please enter a valid 10-digit number"
            />
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="course">Course:</label>
          <div className="input-with-icon">
            <FaBook className="input-icon" />
            <select 
              id="course" 
              name="course" 
              value={formData.course} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a course</option>
              <option value="Full Stack Java">Full Stack Java</option>
              <option value="Python">Python</option>
              <option value="MS Office">MS Office</option>
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="DCA">DCA</option>
              <option value="PGDCA">PGDCA</option>
              <option value="ADCA">ADCA</option>
              <option value="ADTP">ADTP</option>
              <option value="Photoshop">Photoshop</option>
              <option value="AWS">AWS</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="form-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oSJnSXRwkgfJOZ__W2WIDYd3VK8VpwJ6kg&s" alt="Registration" />
      </div>
    </div>
  );
};

export default UserForm;
