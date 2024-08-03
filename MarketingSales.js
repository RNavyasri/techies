import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is the primary goal of marketing?',
    options: ['To create products', 'To sell products', 'To promote products', 'To manage finances'],
    answer: 'To promote products',
  },
  {
    question: 'What is a sales funnel?',
    options: ['A method for organizing products', 'A strategy for increasing production', 'A model that describes the customer journey', 'A financial report'],
    answer: 'A model that describes the customer journey',
  },
  {
    question: 'Which of the following is a key component of a marketing strategy?',
    options: ['Production costs', 'Employee training', 'Target audience', 'Office location'],
    answer: 'Target audience',
  },
  {
    question: 'What is the purpose of branding?',
    options: ['To manage company finances', 'To differentiate a product or service from its competitors', 'To hire new employees', 'To develop new products'],
    answer: 'To differentiate a product or service from its competitors',
  },
  {
    question: 'What is a USP?',
    options: ['Unique Selling Proposition', 'Universal Sales Pitch', 'Unit Sales Price', 'Uniform Service Plan'],
    answer: 'Unique Selling Proposition',
  },
  {
    question: 'What does SEO stand for?',
    options: ['Sales and Employee Optimization', 'Search Engine Optimization', 'Service and Engagement Optimization', 'Sales and Earnings Overview'],
    answer: 'Search Engine Optimization',
  },
  {
    question: 'Which of the following is a method of digital marketing?',
    options: ['Television ads', 'Billboards', 'Social media advertising', 'Radio commercials'],
    answer: 'Social media advertising',
  },
  {
    question: 'What is the purpose of a customer loyalty program?',
    options: ['To increase production efficiency', 'To reward repeat customers and encourage loyalty', 'To manage employee performance', 'To reduce operating costs'],
    answer: 'To reward repeat customers and encourage loyalty',
  },
  {
    question: 'What is a marketing mix?',
    options: ['A combination of different products', 'A strategy for managing employees', 'A set of actions a company uses to promote its brand or product', 'A financial report'],
    answer: 'A set of actions a company uses to promote its brand or product',
  },
  {
    question: 'What is lead generation?',
    options: ['The process of creating new products', 'The process of attracting and converting strangers into prospects', 'A financial management strategy', 'A method for training employees'],
    answer: 'The process of attracting and converting strangers into prospects',
  },
];

function MarketingSales() {
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

export default MarketingSales;