import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is sustainability?',
    options: ['Meeting current needs without compromising the ability of future generations to meet theirs', 'A financial strategy', 'A marketing tool', 'A product development method'],
    answer: 'Meeting current needs without compromising the ability of future generations to meet theirs',
  },
  {
    question: 'What is corporate social responsibility (CSR)?',
    options: ['A company’s commitment to ethical behavior and contributing to societal goals', 'A type of financial analysis', 'A marketing campaign', 'A product design principle'],
    answer: 'A company’s commitment to ethical behavior and contributing to societal goals',
  },
  {
    question: 'What are the three pillars of sustainability?',
    options: ['Economic, Environmental, Social', 'Marketing, Finance, Operations', 'Product, Process, People', 'Risk, Compliance, Innovation'],
    answer: 'Economic, Environmental, Social',
  },
  {
    question: 'What is the purpose of a sustainability report?',
    options: ['To disclose a company’s environmental, social, and economic impacts and performance', 'To report financial earnings', 'To market new products', 'To manage employee performance'],
    answer: 'To disclose a company’s environmental, social, and economic impacts and performance',
  },
  {
    question: 'What does "triple bottom line" refer to?',
    options: ['An approach that evaluates a company’s commitment to social, environmental, and economic responsibilities', 'A financial accounting method', 'A marketing strategy', 'A product development process'],
    answer: 'An approach that evaluates a company’s commitment to social, environmental, and economic responsibilities',
  },
  {
    question: 'What is greenwashing?',
    options: ['The practice of misleading consumers about the environmental benefits of a product or company', 'A financial management technique', 'A marketing strategy', 'An employee training program'],
    answer: 'The practice of misleading consumers about the environmental benefits of a product or company',
  },
  {
    question: 'What is the purpose of ethical sourcing?',
    options: ['To ensure that products are obtained in a responsible and sustainable manner', 'To manage financial resources', 'To design marketing strategies', 'To develop new products'],
    answer: 'To ensure that products are obtained in a responsible and sustainable manner',
  },
  {
    question: 'What is a social impact assessment?',
    options: ['A process to evaluate the social consequences of a project or policy', 'A financial analysis tool', 'A marketing strategy', 'A product design principle'],
    answer: 'A process to evaluate the social consequences of a project or policy',
  },
  {
    question: 'What is fair trade?',
    options: ['A trading partnership that aims to create better trading conditions and ensure fair wages', 'A financial investment strategy', 'A marketing tactic', 'A product development method'],
    answer: 'A trading partnership that aims to create better trading conditions and ensure fair wages',
  },
  {
    question: 'What is the role of stakeholder engagement in sustainability?',
    options: ['To involve individuals or groups affected by or interested in a company’s sustainability efforts', 'To manage financial risks', 'To design marketing campaigns', 'To develop new products'],
    answer: 'To involve individuals or groups affected by or interested in a company’s sustainability efforts',
  },
];

function SustainabilitySocialResponsibility() {
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

export default SustainabilitySocialResponsibility;