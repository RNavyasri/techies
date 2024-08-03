import React from 'react';
import { useLocation } from 'react-router-dom';
import './Rewards.css';
// eslint-disable-next-line 
import { FaRocket, FaLifeRing, FaClock, FaQuestionCircle, FaLightbulb, FaCogs } from 'react-icons/fa';

const Rewards = () => {
  const location = useLocation();
  const { points } = location.state || { points: 0 };

  // Define rewards and their required points
  const rewards = [
    { name: 'Quiz Boosters', pointsRequired: 10 },
    { name: 'Extra Lives', pointsRequired: 20 },
    { name: 'Time Extension', pointsRequired: 30 },
    { name: 'Skip Question', pointsRequired: 40 },
    { name: 'Hint Feature', pointsRequired: 50 },
    { name: '50-50 Option', pointsRequired: 60 }
  ];

  // Function to unlock features based on points
  const getUnlockedFeatures = () => {
    return rewards.filter(reward => points >= reward.pointsRequired);
  };

  return (
    <div className="rewards-container">
      <h1>Rewards Dashboard</h1>
      {points > 0 ? (
        <div>
          <div className="points-section">
            <h2>Your Points: {points}</h2>
          </div>
          <div className="rewards-list">
            <h2>Unlocked Features:</h2>
            <ul>
              {getUnlockedFeatures().map(reward => (
                <li key={reward.name}>
                  {reward.name} <span className="reward-icon">{getIconForReward(reward.name)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rewards-list">
            <h2>Available Features:</h2>
            <ul>
              {rewards.map(reward => (
                <li key={reward.name}>
                  {reward.name} - {reward.pointsRequired} points
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="no-rewards">
          <h2>Please complete the challenges to earn points and unlock rewards.</h2>
        </div>
      )}
    </div>
  );
};

// Helper function to get icon for a reward
const getIconForReward = (rewardName) => {
  switch (rewardName) {
    case 'Quiz Boosters':
      return <FaRocket />;
    case 'Extra Lives':
      return <FaLifeRing />;
    case 'Time Extension':
      return <FaClock />;
    case 'Skip Question':
      return <FaQuestionCircle />;
    case 'Hint Feature':
      return <FaLightbulb />;
    case '50-50 Option':
      return <FaCogs />;
    default:
      return null;
  }
};

export default Rewards;