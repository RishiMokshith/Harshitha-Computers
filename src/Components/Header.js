import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Harshitha Computers</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li>
              <Link to="/Footer">Contact</Link>
            </li>
            <li>
              <Link to="/UserForm">Register</Link>
            </li>
            <li>
              <Link to="/AdminLogin">Admin</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
