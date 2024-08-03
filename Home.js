// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleWelcomeClick = () => {
    navigate('/login');
  };

  return (
    <div className="centered-container">
      <h1>Welcome to the Business Education App</h1>
      <button onClick={handleWelcomeClick}>Enter</button>
    </div>
  );
};
export default Home;