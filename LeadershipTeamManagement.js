import React, { useState } from 'react';
import './quizzes.css';

const questions = [
  {
    question: 'What is leadership?',
    options: ['The ability to inspire and guide others towards achieving goals', 'Managing employee schedules', 'Creating marketing strategies', 'Designing products'],
    answer: 'The ability to inspire and guide others towards achieving goals',
  },
  {
    question: 'What is a leadership style?',
    options: ['The approach a leader takes to manage and motivate their team', 'A type of financial strategy', 'A marketing tool', 'An employee training program'],
    answer: 'The approach a leader takes to manage and motivate their team',
  },
  {
    question: 'What is emotional intelligence in leadership?',
    options: ['The ability to understand and manage one’s own emotions and the emotions of others', 'A financial analysis technique', 'A marketing strategy', 'A product development method'],
    answer: 'The ability to understand and manage one’s own emotions and the emotions of others',
  },
  {
    question: 'What is team dynamics?',
    options: ['The forces that influence the behavior and performance of a team', 'A type of market analysis', 'A financial management tool', 'A product design'],
    answer: 'The forces that influence the behavior and performance of a team',
  },
  {
    question: 'What is conflict resolution in a team setting?',
    options: ['The process of addressing and resolving disagreements or conflicts among team members', 'A financial strategy', 'A marketing technique', 'A product development method'],
    answer: 'The process of addressing and resolving disagreements or conflicts among team members',
  },
  {
    question: 'What is delegation?',
    options: ['The process of assigning tasks or responsibilities to team members', 'A financial planning tool', 'A marketing strategy', 'A product design process'],
    answer: 'The process of assigning tasks or responsibilities to team members',
  },
  {
    question: 'What is a team leader?',
    options: ['A person who directs and motivates a team to achieve goals', 'A type of financial analyst', 'A marketing manager', 'A product designer'],
    answer: 'A person who directs and motivates a team to achieve goals',
  },
  {
    question: 'What is team building?',
    options: ['Activities and strategies used to enhance team performance and cohesion', 'A financial analysis technique', 'A marketing strategy', 'A product development method'],
    answer: 'Activities and strategies used to enhance team performance and cohesion',
  },
  {
    question: 'What is performance management?',
    options: ['The process of assessing and improving the performance of team members', 'A financial strategy', 'A marketing tool', 'A product design process'],
    answer: 'The process of assessing and improving the performance of team members',
  },
  {
    question: 'What is a motivational strategy?',
    options: ['Techniques used to encourage and inspire team members to perform at their best', 'A financial analysis method', 'A marketing campaign', 'A product development tool'],
    answer: 'Techniques used to encourage and inspire team members to perform at their best',
  },
];

function LeadershipTeamManagement() {
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

export default LeadershipTeamManagement;