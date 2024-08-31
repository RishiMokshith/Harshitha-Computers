import React, { useEffect, useState } from 'react';
import '../Styles/AdminPage.css';

const AdminPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete the details permanently?');

    if (confirmDelete) {
      fetch(`http://localhost:8000/users/${id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          setUserData(userData.filter(user => user.id !== id));
        } else {
          alert('Failed to delete data.');
        }
      })
      .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className='admin-wrapper'>
      <div className="admin-container">
        <h2>User Details</h2>
        {userData.length > 0 ? (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Number</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.number}</td>
                  <td>{user.course}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;

