// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../s2login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login and set user to localStorage
    const user = { email }; // Simplified user object
    localStorage.setItem('user', JSON.stringify(user));

    navigate('/user-options');
  };

  return (
    <div className="login-container">
      <div className="welcome-box">
        <h1>Welcome to Business Education App</h1>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Not registered yet? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;