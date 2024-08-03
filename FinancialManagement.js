import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is financial management?',
    options: ['The process of planning, organizing, and controlling financial resources', 'Managing employee schedules', 'Creating marketing strategies', 'Designing new products'],
    answer: 'The process of planning, organizing, and controlling financial resources',
  },
  {
    question: 'What is a balance sheet?',
    options: ['A financial statement showing a company’s assets, liabilities, and equity', 'A type of market analysis', 'An employee performance review', 'A product development plan'],
    answer: 'A financial statement showing a company’s assets, liabilities, and equity',
  },
  {
    question: 'What is a cash flow statement?',
    options: ['A financial report showing the inflows and outflows of cash', 'A marketing tool', 'A product specification', 'A type of business license'],
    answer: 'A financial report showing the inflows and outflows of cash',
  },
  {
    question: 'What is budgeting?',
    options: ['The process of creating a plan for managing financial resources', 'Managing employee schedules', 'Developing new products', 'Creating marketing strategies'],
    answer: 'The process of creating a plan for managing financial resources',
  },
  {
    question: 'What is financial forecasting?',
    options: ['Predicting future financial performance based on historical data', 'Creating marketing campaigns', 'Designing new products', 'Managing inventory'],
    answer: 'Predicting future financial performance based on historical data',
  },
  {
    question: 'What is a profit and loss statement?',
    options: ['A financial report showing a company’s revenues, expenses, and profits', 'A type of market research', 'A product development plan', 'An employee benefit'],
    answer: 'A financial report showing a company’s revenues, expenses, and profits',
  },
  {
    question: 'What is working capital?',
    options: ['The difference between current assets and current liabilities', 'A type of financial investment', 'A marketing strategy', 'A product feature'],
    answer: 'The difference between current assets and current liabilities',
  },
  {
    question: 'What is financial analysis?',
    options: ['The process of evaluating financial data to make informed decisions', 'Creating marketing strategies', 'Designing new products', 'Managing employee performance'],
    answer: 'The process of evaluating financial data to make informed decisions',
  },
  {
    question: 'What is a financial ratio?',
    options: ['A metric used to evaluate financial performance', 'A type of market analysis', 'A marketing tool', 'An employee benefit'],
    answer: 'A metric used to evaluate financial performance',
  },
  {
    question: 'What is cost control?',
    options: ['The process of managing and reducing expenses', 'Creating marketing strategies', 'Designing new products', 'Managing employee schedules'],
    answer: 'The process of managing and reducing expenses',
  },
];

function FinancialManagement() {
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

export default FinancialManagement;