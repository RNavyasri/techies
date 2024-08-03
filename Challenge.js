import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './chall.css';
import { FaStar, FaDollarSign, FaBullhorn, FaLightbulb } from 'react-icons/fa';

const questions = [
  {
    question: "You are launching a new product. What pricing strategy will you use?",
    options: [
      { text: "Penetration Pricing", impact: "70% chance of quickly gaining market share but with lower profit margins initially.", icon: <FaStar /> },
      { text: "Skimming Pricing", impact: "60% chance of higher initial profits and establishing a premium brand image, but slower market penetration.", icon: <FaDollarSign /> },
      { text: "Competitive Pricing", impact: "50% chance of maintaining market presence but may lead to price wars with competitors.", icon: <FaBullhorn /> }
    ]
  },
  {
    question: "How will you handle competition in your market?",
    options: [
      { text: "Focus on Unique Selling Proposition", impact: "60% chance of differentiating from competitors and attracting loyal customers.", icon: <FaLightbulb /> },
      { text: "Lower Prices", impact: "50% chance of driving competitors out of the market but with reduced profit margins.", icon: <FaDollarSign /> },
      { text: "Enhance Customer Service", impact: "55% chance of building strong customer relationships and encouraging repeat business.", icon: <FaBullhorn /> }
    ]
  },
  {
    question: "What is your approach to marketing?",
    options: [
      { text: "Digital Marketing", impact: "70% chance of reaching a broad audience effectively through various online channels.", icon: <FaStar /> },
      { text: "Traditional Advertising", impact: "50% chance of reaching local audiences, but with higher costs and less measurable results.", icon: <FaBullhorn /> },
      { text: "Influencer Partnerships", impact: "65% chance of leveraging influencer credibility to boost brand awareness and engagement.", icon: <FaLightbulb /> }
    ]
  },
  {
    question: "What is your strategy for managing cash flow?",
    options: [
      { text: "Maintain a Reserve Fund", impact: "75% chance of ensuring financial stability and covering unexpected expenses.", icon: <FaDollarSign /> },
      { text: "Regular Budget Reviews", impact: "60% chance of identifying and addressing potential financial issues early.", icon: <FaLightbulb /> },
      { text: "Increase Revenue Streams", impact: "65% chance of diversifying income sources and reducing dependency on a single revenue stream.", icon: <FaStar /> }
    ]
  },
  {
    question: "How will you ensure customer satisfaction?",
    options: [
      { text: "Regular Feedback Surveys", impact: "70% chance of understanding customer needs and making improvements accordingly.", icon: <FaBullhorn /> },
      { text: "Loyalty Programs", impact: "60% chance of rewarding repeat customers and encouraging continued business.", icon: <FaStar /> },
      { text: "Personalized Customer Service", impact: "65% chance of enhancing customer experience and building strong relationships.", icon: <FaDollarSign /> }
    ]
  }
];

function Challenge() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showImpact, setShowImpact] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (option) => {
    if (!selectedAnswers[currentQuestion]) {
      setSelectedAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = option;
        return newAnswers;
      });
    }
    setShowImpact(true);
  };

  const handleNextClick = () => {
    setShowImpact(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Pass only text and impact to results
      const simplifiedAnswers = selectedAnswers.map(answer => ({
        text: answer?.text,
        impact: answer?.impact
      }));
      navigate('/results', { state: { selectedAnswers: simplifiedAnswers } });
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h1>Business Quiz</h1>
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option-box ${selectedAnswers[currentQuestion] === option ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(option)}
              >
                <div className="option-text">
                  {option.icon}
                  {option.text}
                </div>
                {showImpact && (
                  <div className="impact-box">
                    <p>{option.impact}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Challenge;