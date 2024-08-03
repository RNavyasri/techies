import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is the primary goal of a for-profit business?',
    options: ['To provide social services', 'To generate profit', 'To promote government policies', 'To educate the public'],
    answer: 'To generate profit',
  },
  {
    question: 'Which of the following is a key characteristic of an entrepreneur?',
    options: ['Risk aversion', 'Lack of ambition', 'Innovativeness', 'Preference for routine'],
    answer: 'Innovativeness',
  },
  {
    question: 'What is a business model?',
    options: ['A type of business structure', 'A company’s plan for making a profit', 'An employee role', 'A marketing strategy'],
    answer: 'A company’s plan for making a profit',
  },
  {
    question: 'Which of the following is NOT a business structure?',
    options: ['Sole proprietorship', 'Partnership', 'Corporation', 'Tax deduction'],
    answer: 'Tax deduction',
  },
  {
    question: 'What does ROI stand for?',
    options: ['Return on Investment', 'Rate of Interest', 'Revenue on Income', 'Return on Income'],
    answer: 'Return on Investment',
  },
  {
    question: 'What is the role of a business plan?',
    options: ['To define the business idea', 'To provide a roadmap for the business', 'To attract investors', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'Which department is responsible for managing company finances?',
    options: ['Marketing', 'Operations', 'Finance', 'Human Resources'],
    answer: 'Finance',
  },
  {
    question: 'What is market segmentation?',
    options: ['Dividing a market into distinct groups of buyers', 'A type of business competition', 'Analyzing financial data', 'Developing a business plan'],
    answer: 'Dividing a market into distinct groups of buyers',
  },
  {
    question: 'What is the primary purpose of marketing?',
    options: ['To produce goods', 'To manage employees', 'To promote and sell products', 'To balance financial accounts'],
    answer: 'To promote and sell products',
  },
  {
    question: 'What is a SWOT analysis?',
    options: ['A method of risk management', 'An analysis of Strengths, Weaknesses, Opportunities, and Threats', 'A financial report', 'A market research technique'],
    answer: 'An analysis of Strengths, Weaknesses, Opportunities, and Threats',
  },
];

function BusinessFundamentals() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="quiz-score">
          <h1>Your Score: {score} / {questions.length}</h1>
        </div>
      ) : (
        <div className="quiz-box">
          <h1 className="quiz-question">{questions[currentQuestion].question}</h1>
          <ul className="quiz-options">
            {questions[currentQuestion].options.map((option) => (
              <li key={option}>
                <button className="quiz-option-button" onClick={() => handleAnswerOptionClick(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BusinessFundamentals;