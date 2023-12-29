import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/alluser");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container rounded text-danger">
        <h2 className="mt-3 mb-4">User List</h2>
        <div className="row">
          {users.map((user) => (
            <div key={user._id} className="col-md-4 mb-4">
              <div className="card border-warning">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <h5 className='card-title'>{user.address}</h5>
                  <p className='card-text'>{user.password}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
