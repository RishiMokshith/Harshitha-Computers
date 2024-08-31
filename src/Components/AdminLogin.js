import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AdminLogin.css';

const AdminLogin = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const correctAdminName = 'admin';
  const correctPassword = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (adminName===correctAdminName && password===correctPassword)
      {
        navigate('/AdminPage');
    } else{
      alert('Incorrect username or password');
    }
    
  };

  return (
    <div className="AdminLogin">
      <div className="AdminLogin-container">
        <div className="AdminLogin-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="AdminLogin-input-group">
              <label>Admin Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                required
              />
            </div>
            <div className="AdminLogin-input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="AdminLogin-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
