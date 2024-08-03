import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is risk management?',
    options: ['The process of identifying, assessing, and controlling threats to an organization', 'Managing financial investments', 'Designing marketing strategies', 'Creating new products'],
    answer: 'The process of identifying, assessing, and controlling threats to an organization',
  },
  {
    question: 'What is a risk assessment?',
    options: ['The process of evaluating potential risks and their impact on an organization', 'A type of market research', 'A financial analysis', 'A product development technique'],
    answer: 'The process of evaluating potential risks and their impact on an organization',
  },
  {
    question: 'What is risk mitigation?',
    options: ['Implementing strategies to reduce or eliminate risks', 'Creating marketing plans', 'Managing financial resources', 'Designing new products'],
    answer: 'Implementing strategies to reduce or eliminate risks',
  },
  {
    question: 'What is a risk matrix?',
    options: ['A tool used to evaluate and prioritize risks based on their likelihood and impact', 'A financial management tool', 'A marketing strategy', 'An employee performance evaluation'],
    answer: 'A tool used to evaluate and prioritize risks based on their likelihood and impact',
  },
  {
    question: 'What is a contingency plan?',
    options: ['A plan developed to address potential risks and unforeseen events', 'A type of market analysis', 'A financial strategy', 'A product design process'],
    answer: 'A plan developed to address potential risks and unforeseen events',
  },
  {
    question: 'What is risk transfer?',
    options: ['Shifting the risk to a third party, such as through insurance or outsourcing', 'A financial strategy', 'A marketing tool', 'A product development method'],
    answer: 'Shifting the risk to a third party, such as through insurance or outsourcing',
  },
  {
    question: 'What is risk avoidance?',
    options: ['Taking actions to eliminate or avoid the risk entirely', 'A type of financial management', 'A marketing technique', 'A product design principle'],
    answer: 'Taking actions to eliminate or avoid the risk entirely',
  },
  {
    question: 'What is risk acceptance?',
    options: ['Acknowledging the risk and choosing to accept it without additional controls', 'A type of market analysis', 'A financial strategy', 'A product development tool'],
    answer: 'Acknowledging the risk and choosing to accept it without additional controls',
  },
  {
    question: 'What is risk monitoring?',
    options: ['The ongoing process of reviewing and assessing risks and their controls', 'A financial analysis technique', 'A marketing strategy', 'A product design process'],
    answer: 'The ongoing process of reviewing and assessing risks and their controls',
  },
  {
    question: 'What is residual risk?',
    options: ['The risk that remains after controls and mitigation strategies have been implemented', 'A type of financial loss', 'A marketing campaign', 'An employee management issue'],
    answer: 'The risk that remains after controls and mitigation strategies have been implemented',
  },
];

function RiskManagement() {
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

export default RiskManagement;