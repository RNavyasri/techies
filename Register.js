// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    designation: '',
    age: '',
    city: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    navigate('/login');
  };

  return (
    <div className="centered-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" required />
        <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
