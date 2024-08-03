import React from 'react';

const Question = ({ question, onAnswerChange }) => {
  const handleChange = (event) => {
    onAnswerChange(question.id, event.target.value);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <div>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`question-${question.id}-option-${index}`}
              value={option}
              name={`question-${question.id}`}
              onChange={handleChange}
            />
            <label htmlFor={`question-${question.id}-option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
