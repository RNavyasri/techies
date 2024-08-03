// src/components/EntrepreneurGuide.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 
const EntrepreneurGuide = () => {
  const navigate = useNavigate();

  const topics = [
    { path: '/entrepreneurguide/how-to-startup', label: 'How to Startup' },
    { path: '/entrepreneurguide/top-10-startup-mistakes', label: 'Top 10 Startup Mistakes' },
    { path: '/entrepreneurguide/signs-you-are-an-entrepreneur', label: 'Signs You Are an Entrepreneur' },
    { path: '/entrepreneurguide/job-vs-startup', label: 'Job vs Startup' },
    { path: '/entrepreneurguide/how-to-raise-funds', label: 'How to Raise Funds' },
  ];

  return (
    <div className="centered-container">
      <h1>Entrepreneur Guide</h1>
      <div className="icon-container">
        {topics.map((topic) => (
          <button className="icon-card" onClick={() => navigate(topic.path)} key={topic.path}>
            <p>{topic.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EntrepreneurGuide;