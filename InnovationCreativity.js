import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is innovation?',
    options: ['The process of creating new ideas, products, or methods', 'A type of market research', 'A financial strategy', 'An employee management technique'],
    answer: 'The process of creating new ideas, products, or methods',
  },
  {
    question: 'What is creativity?',
    options: ['The ability to generate original and novel ideas', 'A type of financial analysis', 'A marketing tool', 'A product development process'],
    answer: 'The ability to generate original and novel ideas',
  },
  {
    question: 'What is a disruptive innovation?',
    options: ['An innovation that significantly alters the market or industry', 'A financial forecast', 'A type of market segmentation', 'An employee performance review'],
    answer: 'An innovation that significantly alters the market or industry',
  },
  {
    question: 'What is brainstorming?',
    options: ['A technique for generating creative ideas and solutions through group discussion', 'A financial planning method', 'A marketing strategy', 'An employee training program'],
    answer: 'A technique for generating creative ideas and solutions through group discussion',
  },
  {
    question: 'What is a prototype?',
    options: ['An early model or sample of a product used to test and refine ideas', 'A type of financial statement', 'A market analysis tool', 'An employee feedback mechanism'],
    answer: 'An early model or sample of a product used to test and refine ideas',
  },
  {
    question: 'What does "thinking outside the box" mean?',
    options: ['Approaching problems and solutions from a unique or unconventional perspective', 'A financial strategy', 'A marketing technique', 'A product development method'],
    answer: 'Approaching problems and solutions from a unique or unconventional perspective',
  },
  {
    question: 'What is ideation?',
    options: ['The process of generating and developing new ideas', 'A type of market research', 'A financial analysis technique', 'An employee management system'],
    answer: 'The process of generating and developing new ideas',
  },
  {
    question: 'What is a creative brief?',
    options: ['A document outlining the objectives and scope of a creative project', 'A financial report', 'A product design document', 'An employee performance review'],
    answer: 'A document outlining the objectives and scope of a creative project',
  },
  {
    question: 'What is the role of failure in the innovation process?',
    options: ['Failure provides learning opportunities and insights that drive further innovation', 'Failure is a type of financial loss', 'Failure indicates a lack of creativity', 'Failure should be avoided at all costs'],
    answer: 'Failure provides learning opportunities and insights that drive further innovation',
  },
  {
    question: 'What is a disruptive idea?',
    options: ['An idea that challenges and changes existing market dynamics', 'A financial concept', 'A marketing strategy', 'An employee development plan'],
    answer: 'An idea that challenges and changes existing market dynamics',
  },
];

function InnovationCreativity() {
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

export default InnovationCreativity;