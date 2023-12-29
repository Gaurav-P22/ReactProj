import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/alluser');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <button onClick={fetchData}>Reload Data</button>
      <ul>
        {userData.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name}, <strong>Username:</strong> {user.username}, <strong>Age:</strong> {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
