import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './res.css';
import { FaStar, FaDollarSign, FaBullhorn, FaLightbulb } from 'react-icons/fa';

const questions = [
  { question: "You are launching a new product. What pricing strategy will you use?" },
  { question: "How will you handle competition in your market?" },
  { question: "What is your approach to marketing?" },
  { question: "What is your strategy for managing cash flow?" },
  { question: "How will you ensure customer satisfaction?" }
];

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAnswers } = location.state || { selectedAnswers: [] };

  const calculatePoints = () => {
    let points = 0;
    selectedAnswers.forEach(answer => {
      if (answer && answer.impact) {
        const impactPercentage = parseInt(answer.impact, 10);
        if (impactPercentage >= 70) {
          points += 10;
        } else if (impactPercentage >= 50) {
          points += 5;
        } else {
          points += 3;
        }
      }
    });
    return points;
  };

  const points = calculatePoints();

  const calculateImpact = (impactText) => {
    if (impactText) {
      if (impactText.includes('70%')) return <FaStar />;
      if (impactText.includes('60%')) return <FaDollarSign />;
      if (impactText.includes('50%')) return <FaBullhorn />;
    }
    return <FaLightbulb />;
  };

  const handleViewRewards = () => {
    navigate('/rewards', { state: { points } });
  };

  return (
    <div className="results-container">
      <div className="results-content">
        <h1>Quiz Results</h1>
        {selectedAnswers.length ? (
          selectedAnswers.map((answer, index) => (
            <div key={index} className="result-item">
              <div className="question-text">{questions[index]?.question}</div>
              <div className="selected-answer">
                <div className="answer-icon">{calculateImpact(answer.impact)}</div>
                <div className="answer-text">{answer.text}</div>
              </div>
              <div className="impact-text">{answer.impact}</div>
            </div>
          ))
        ) : (
          <p>No answers available.</p>
        )}
        <h2>Total Points: {points}</h2>
        <button onClick={handleViewRewards}>View Rewards</button>
      </div>
    </div>
  );
};

export default Results;