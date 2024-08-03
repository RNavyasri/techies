import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is legal compliance?',
    options: ['Adhering to laws and regulations applicable to a business', 'Creating marketing strategies', 'Designing new products', 'Managing employee schedules'],
    answer: 'Adhering to laws and regulations applicable to a business',
  },
  {
    question: 'What is intellectual property?',
    options: ['Legal rights protecting creations of the mind', 'A type of financial investment', 'A marketing strategy', 'An employee benefit'],
    answer: 'Legal rights protecting creations of the mind',
  },
  {
    question: 'What is a non-disclosure agreement (NDA)?',
    options: ['A contract to keep certain information confidential', 'A financial document', 'A product development plan', 'A marketing tool'],
    answer: 'A contract to keep certain information confidential',
  },
  {
    question: 'What is ethical behavior in business?',
    options: ['Conducting business in a manner that is fair and just', 'Managing financial resources', 'Designing marketing campaigns', 'Creating new products'],
    answer: 'Conducting business in a manner that is fair and just',
  },
  {
    question: 'What is data protection?',
    options: ['Safeguarding personal and sensitive information from unauthorized access', 'A type of market analysis', 'A financial strategy', 'An employee performance review'],
    answer: 'Safeguarding personal and sensitive information from unauthorized access',
  },
  {
    question: 'What is corporate social responsibility (CSR)?',
    options: ['A company’s commitment to operating ethically and contributing to societal goals', 'A type of financial management', 'A marketing strategy', 'A product development method'],
    answer: 'A company’s commitment to operating ethically and contributing to societal goals',
  },
  {
    question: 'What is fraud?',
    options: ['Intentional deception for personal or financial gain', 'A financial loss', 'A marketing tactic', 'An employee behavior issue'],
    answer: 'Intentional deception for personal or financial gain',
  },
  {
    question: 'What is a conflict of interest?',
    options: ['A situation where personal interests could interfere with professional duties', 'A type of financial strategy', 'A marketing campaign', 'An employee benefit'],
    answer: 'A situation where personal interests could interfere with professional duties',
  },
  {
    question: 'What is anti-bribery legislation?',
    options: ['Laws designed to prevent and punish bribery and corruption', 'A type of market analysis', 'A financial management tool', 'A product design principle'],
    answer: 'Laws designed to prevent and punish bribery and corruption',
  },
  {
    question: 'What is informed consent?',
    options: ['Obtaining permission with a full understanding of the implications and risks', 'A financial agreement', 'A marketing tool', 'A product feature'],
    answer: 'Obtaining permission with a full understanding of the implications and risks',
  },
];

function LegalEthicalConsiderations() {
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

export default LegalEthicalConsiderations;