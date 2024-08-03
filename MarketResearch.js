import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is market research?',
    options: ['A way to develop products', 'A way to promote products', 'A way to gather information about consumers', 'A way to calculate profits'],
    answer: 'A way to gather information about consumers',
  },
  {
    question: 'Which type of market research involves directly interacting with consumers?',
    options: ['Secondary research', 'Primary research', 'Tertiary research', 'Quantitative research'],
    answer: 'Primary research',
  },
  {
    question: 'Which of the following is a method of primary research?',
    options: ['Reading industry reports', 'Conducting surveys', 'Analyzing financial statements', 'Reviewing academic journals'],
    answer: 'Conducting surveys',
  },
  {
    question: 'What does SWOT analysis stand for?',
    options: ['Strengths, Weaknesses, Opportunities, Threats', 'Strengths, Wins, Opportunities, Targets', 'Sales, Weaknesses, Opportunities, Threats', 'Strengths, Weaknesses, Options, Targets'],
    answer: 'Strengths, Weaknesses, Opportunities, Threats',
  },
  {
    question: 'Which method is commonly used in secondary research?',
    options: ['Focus groups', 'Surveys', 'Observation', 'Reviewing existing data'],
    answer: 'Reviewing existing data',
  },
  {
    question: 'What is a target market?',
    options: ['A market you want to avoid', 'A specific group of consumers a business aims to reach', 'A market in another country', 'A type of market research method'],
    answer: 'A specific group of consumers a business aims to reach',
  },
  {
    question: 'What is the purpose of market segmentation?',
    options: ['To divide a market into distinct groups', 'To increase production costs', 'To reduce marketing efforts', 'To combine all market groups'],
    answer: 'To divide a market into distinct groups',
  },
  {
    question: 'What type of research includes customer feedback and focus groups?',
    options: ['Primary research', 'Secondary research', 'Quantitative research', 'Tertiary research'],
    answer: 'Primary research',
  },
  {
    question: 'What is a competitive analysis?',
    options: ['A report of company profits', 'An analysis of competitors in the market', 'A type of financial statement', 'A consumer survey'],
    answer: 'An analysis of competitors in the market',
  },
  {
    question: 'Which of the following is NOT a common method of collecting primary data?',
    options: ['Surveys', 'Focus groups', 'Observation', 'Reviewing industry reports'],
    answer: 'Reviewing industry reports',
  },
];

function MarketResearch() {
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

export default MarketResearch;