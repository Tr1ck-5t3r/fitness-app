import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Example state for user information
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'Fitness enthusiast and developer.'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate saving data
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1 className="text-center">Profile</h1>
      <div className="profile-card card bg-dark text-light">
        <div className="card-body">
          {!isEditing ? (
            <>
              <h5 className="card-title">{user.username}</h5>
              <p className="card-text"><strong>Email:</strong> {user.email}</p>
              <p className="card-text"><strong>Bio:</strong> {user.bio}</p>
              <button className="btn btn-primary" onClick={handleEditClick}>Edit Profile</button>
            </>
          ) : (
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio</label>
                <textarea 
                  className="form-control" 
                  id="bio" 
                  name="bio" 
                  rows="3" 
                  value={formData.bio} 
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success">Save</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
