import React, { useState } from 'react';
import DecisionResult from './DecisionResult';
import styles from './StoryProgression.module.css';

const scenarios = [
  {
    scenario: 'You are launching a new product. Choose a strategy to achieve success.',
    questions: [
      {
        id: 1,
        text: 'What pricing strategy will you use?',
        options: [
          'Penetration Pricing', 
          'Skimming Pricing', 
          'Competitive Pricing'
        ],
      },
      {
        id: 2,
        text: 'What marketing approach will you adopt?',
        options: [
          'Digital Marketing',
          'Traditional Advertising',
          'Influencer Partnerships'
        ],
      }
    ],
  },
  {
    scenario: 'Your company is facing intense competition. How will you respond?',
    questions: [
      {
        id: 3,
        text: 'How will you handle competition?',
        options: [
          'Focus on Unique Selling Proposition',
          'Lower Prices',
          'Enhance Customer Service'
        ],
      },
      {
        id: 4,
        text: 'What is your approach to customer feedback?',
        options: [
          'Regular Feedback Surveys',
          'Loyalty Programs',
          'Personalized Customer Service'
        ],
      }
    ],
  },
  {
    scenario: 'You need to manage your cash flow effectively.',
    questions: [
      {
        id: 5,
        text: 'What is your strategy for managing cash flow?',
        options: [
          'Maintain a Reserve Fund',
          'Regular Budget Reviews',
          'Increase Revenue Streams'
        ],
      },
      {
        id: 6,
        text: 'How will you diversify your income sources?',
        options: [
          'Expand Product Lines',
          'Explore New Markets',
          'Improve Service Offerings'
        ],
      }
    ],
  },
  {
    scenario: 'Your business is scaling rapidly. What’s your next step?',
    questions: [
      {
        id: 7,
        text: 'How will you handle increased demand?',
        options: [
          'Scale Operations',
          'Outsource Services',
          'Automate Processes'
        ],
      },
      {
        id: 8,
        text: 'What is your plan for talent acquisition?',
        options: [
          'Hire Experienced Professionals',
          'Invest in Training Programs',
          'Leverage Freelancers'
        ],
      }
    ],
  },
  {
    scenario: 'You are looking to innovate and grow.',
    questions: [
      {
        id: 9,
        text: 'How will you foster innovation?',
        options: [
          'Encourage Creative Thinking',
          'Invest in R&D',
          'Collaborate with Startups'
        ],
      },
      {
        id: 10,
        text: 'What’s your approach to new market trends?',
        options: [
          'Adapt Quickly',
          'Conduct Market Research',
          'Implement Pilot Projects'
        ],
      }
    ],
  }
];

const StoryProgression = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const currentScenarioData = scenarios[currentScenario] || { questions: [] };
    const allAnswered = currentScenarioData.questions.every(
      (question) => answers[question.id]
    );

    if (allAnswered) {
      setShowResult(true);
    } else {
      alert('Please answer all the questions before submitting.');
    }
  };

  const handleNextScenario = () => {
    setCurrentScenario((prev) => prev + 1);
    setShowResult(false);
    setAnswers({});
  };

  const currentScenarioData = scenarios[currentScenario] || { scenario: '', questions: [] };

  if (showResult) {
    return (
      <div className={styles['decision-result']}>
        <DecisionResult answers={answers} />
        {currentScenario < scenarios.length - 1 && (
          <button onClick={handleNextScenario}>Next Scenario</button>
        )}
      </div>
    );
  }

  return (
    <div className={styles['story-progress-container']}>
      <h1>Scenario</h1>
      <p>{currentScenarioData.scenario}</p>
      {currentScenarioData.questions.map((question) => (
        <div key={question.id} className={styles['question']}>
          <label>{question.text}</label>
          <ul className={styles['options']}>
            {question.options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  onChange={() => handleAnswerChange(question.id, option)}
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StoryProgression;