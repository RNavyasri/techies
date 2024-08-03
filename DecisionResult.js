import React from 'react';

const DecisionResult = ({ answers }) => {
  const evaluateDecisions = (answers) => {
    const feedback = [];

    if (answers[1] === "30%" && answers[2] === "Online" && answers[3] === "Use it to improve products") {
      feedback.push("Scenario 1: Great decisions! You are on the right track.");
    } else {
      feedback.push("Scenario 1: Consider revising your decisions for better results.");
    }

    if (answers[4] === "Skills and experience" && answers[5] === "Conduct thorough interviews" && answers[6] === "Competitive salaries") {
      feedback.push("Scenario 2: Excellent hiring strategy. Your team will be strong.");
    } else {
      feedback.push("Scenario 2: Review your hiring strategy for better team alignment.");
    }

    if (answers[7] === "Product development" && answers[8] === "Use financial software" && answers[9] === "Keep costs low") {
      feedback.push("Scenario 3: Wise financial management. Your startup is set for growth.");
    } else {
      feedback.push("Scenario 3: Consider improving your financial strategy.");
    }

    if (answers[10] === "Customer feedback" && answers[11] === "Beta testing with select customers" && answers[12] === "Evaluate and decide based on impact") {
      feedback.push("Scenario 4: Great product development approach.");
    } else {
      feedback.push("Scenario 4: Consider revising your product development strategy.");
    }

    if (answers[13] === "Social media marketing" && answers[14] === "Customer engagement metrics" && answers[15] === "Offer excellent customer service") {
      feedback.push("Scenario 5: Excellent customer acquisition and retention strategy.");
    } else {
      feedback.push("Scenario 5: Review your customer acquisition strategy.");
    }

    if (answers[16] === "Improve your product’s features" && answers[17] === "Highlight unique features" && answers[18] === "Continuous innovation") {
      feedback.push("Scenario 6: Smart competitive strategy.");
    } else {
      feedback.push("Scenario 6: Reevaluate your competitive strategy.");
    }

    if (answers[19] === "Investigate and fix the defect" && answers[20] === "Email them directly" && answers[21] === "Implement stricter quality control") {
      feedback.push("Scenario 7: Good crisis management.");
    } else {
      feedback.push("Scenario 7: Improve your crisis management approach.");
    }

    if (answers[22] === "Expanding the product line" && answers[23] === "Reinvest profits" && answers[24] === "Develop a strong onboarding process") {
      feedback.push("Scenario 8: Excellent scaling strategy.");
    } else {
      feedback.push("Scenario 8: Reconsider your scaling strategy.");
    }

    return feedback;
  };

  return (
    <div>
      <h1>Decision Results</h1>
      {evaluateDecisions(answers).map((result, index) => (
        <p key={index}>{result}</p>
      ))}
    </div>
  );
};

export default DecisionResult;
