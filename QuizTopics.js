import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartLine, faFileAlt, faBullhorn, faMoneyBillWave, faUsers, faBalanceScale, faFlask, faExclamationTriangle, faLeaf } from '@fortawesome/free-solid-svg-icons';
import '../qu.css'; // Ensure your CSS file is imported

const QuizTopics = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="centered-container">
      <h2>Select a Quiz Topic</h2>
      <div className="icon-container">
        <div className="icon-card" onClick={() => handleNavigation('/quiz/business-fundamentals')}>
          <FontAwesomeIcon icon={faLightbulb} size="3x" />
          <p>Business Fundamentals</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/market-research')}>
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <p>Market Research</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/business-plan')}>
          <FontAwesomeIcon icon={faFileAlt} size="3x" />
          <p>Business Plan</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/marketing-sales')}>
          <FontAwesomeIcon icon={faBullhorn} size="3x" />
          <p>Marketing and Sales</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/financial-management')}>
          <FontAwesomeIcon icon={faMoneyBillWave} size="3x" />
          <p>Financial Management</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/leadership-team-management')}>
          <FontAwesomeIcon icon={faUsers} size="3x" />
          <p>Leadership and Team Management</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/legal-ethical-considerations')}>
          <FontAwesomeIcon icon={faBalanceScale} size="3x" />
          <p>Legal and Ethical Considerations</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/innovation-creativity')}>
          <FontAwesomeIcon icon={faFlask} size="3x" />
          <p>Innovation and Creativity</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/risk-management')}>
          <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
          <p>Risk Management</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz/sustainability-social-responsibility')}>
          <FontAwesomeIcon icon={faLeaf} size="3x" />
          <p>Sustainability and Social Responsibility</p>
        </div>
      </div>
    </div>
  );
};

export default QuizTopics;
