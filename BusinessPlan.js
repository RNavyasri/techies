import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is a business plan?',
    options: ['A financial statement', 'A marketing strategy', 'A document outlining a business\'s goals and how to achieve them', 'A report for stakeholders'],
    answer: 'A document outlining a business\'s goals and how to achieve them',
  },
  {
    question: 'What is included in a business plan?',
    options: ['Executive summary', 'Market analysis', 'Financial projections', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'Why is a business plan important?',
    options: ['To secure funding', 'To guide operations', 'To set goals and objectives', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'What does the executive summary of a business plan contain?',
    options: ['Detailed financial data', 'An overview of the business', 'Marketing strategies', 'Employee roles'],
    answer: 'An overview of the business',
  },
  {
    question: 'What is the purpose of market analysis in a business plan?',
    options: ['To understand the target market', 'To outline the production process', 'To set business goals', 'To manage employees'],
    answer: 'To understand the target market',
  },
  {
    question: 'What are financial projections in a business plan?',
    options: ['Past financial performance', 'Predictions of future financial performance', 'Marketing strategies', 'Employee salaries'],
    answer: 'Predictions of future financial performance',
  },
  {
    question: 'What is a SWOT analysis?',
    options: ['A method of risk management', 'An analysis of Strengths, Weaknesses, Opportunities, and Threats', 'A financial report', 'A market research technique'],
    answer: 'An analysis of Strengths, Weaknesses, Opportunities, and Threats',
  },
  {
    question: 'What should be included in the marketing strategy section of a business plan?',
    options: ['Pricing strategy', 'Sales strategy', 'Promotion strategy', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'What is the purpose of the operations plan in a business plan?',
    options: ['To outline the production process', 'To set financial goals', 'To understand the market', 'To secure funding'],
    answer: 'To outline the production process',
  },
  {
    question: 'How often should a business plan be reviewed and updated?',
    options: ['Once a year', 'Every five years', 'Only when seeking funding', 'As needed based on business performance and goals'],
    answer: 'As needed based on business performance and goals',
  },
];

function BusinessPlan() {
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

export default BusinessPlan;