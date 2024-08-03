import React, { useState } from 'react';
import Question from './Question';
import DecisionResult from './DecisionResult';

const StoryProgression = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);

  const scenarios = [
    {
      id: 1,
      scenario: "You have just launched a new tech startup. You have limited funds and need to decide how to allocate resources effectively.",
      questions: [
        {
          id: 1,
          text: "How much of your budget will you allocate to marketing?",
          options: ["20%", "30%", "50%"],
        },
        {
          id: 2,
          text: "Will you focus on online or offline marketing?",
          options: ["Online", "Offline", "Both"],
        },
        {
          id: 3,
          text: "How will you handle customer feedback?",
          options: ["Ignore it", "Use it to improve products", "Address it publicly"],
        },
      ],
    },
    {
      id: 2,
      scenario: "Your startup is growing, and you need to hire your first team members. It’s crucial to build a strong team to support your vision.",
      questions: [
        {
          id: 4,
          text: "What will be your top priority when hiring new team members?",
          options: ["Skills and experience", "Cultural fit", "Cost-effectiveness"],
        },
        {
          id: 5,
          text: "How will you ensure that the new hires align with your company’s culture?",
          options: ["Conduct thorough interviews", "Offer a trial period", "Provide comprehensive onboarding"],
        },
        {
          id: 6,
          text: "How will you motivate your team?",
          options: ["Competitive salaries", "Flexible work hours", "Regular team-building activities"],
        },
      ],
    },
    // Add more scenarios here
  ];

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleNextScenario = () => {
    setCurrentScenario(currentScenario + 1);
    setShowResult(false);
    setAnswers({});
  };

  if (showResult) {
    return (
      <div>
        <DecisionResult answers={answers} />
        {currentScenario < scenarios.length - 1 && (
          <button onClick={handleNextScenario}>Next Scenario</button>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Scenario</h1>
      <p>{scenarios[currentScenario].scenario}</p>
      {scenarios[currentScenario].questions.map((question) => (
        <Question key={question.id} question={question} onAnswerChange={handleAnswerChange} />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StoryProgression;
