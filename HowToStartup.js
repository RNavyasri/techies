import React from 'react'; // Import the CSS file for styling
import './HowToStartup.css';

const HowToStartup = () => (
  <div className="guide-container">
    <h1>How to Startup</h1>
    <div className="guide-section">
      <h2>Ideation</h2>
      <img src={require('.//e1.jpg').default} alt="Ideation" className="guide-image" />
      <p>Ideation involves brainstorming and generating new ideas for your startup.</p>
    </div>
    <div className="guide-section">
      <h2>Validation</h2>
      <img src={require('.//e1.jpg').default} alt="Validation" className="guide-image" />
      <p>Validation is about testing your idea to ensure there is a market need.</p>
    </div>
    <div className="guide-section">
      <h2>Business Plan</h2>
      <img src={require('.//e1.jpg').default} alt="Business Plan" className="guide-image" />
      <p>Develop a comprehensive business plan outlining your strategy and goals.</p>
    </div>
    <div className="guide-section">
      <h2>Building a Team</h2>
      <img src={require('.//e1.jpg').default} alt="Building a Team" className="guide-image" />
      <p>Assemble a team with the skills and experience needed for your startup.</p>
    </div>
    <div className="guide-section">
      <h2>Legal Framework</h2>
      <img src={require('.//e1.jpg').default} alt="Legal Framework" className="guide-image" />
      <p>Ensure you have the necessary legal structure and documentation in place.</p>
    </div>
    <div className="guide-section">
      <h2>Launch</h2>
      <img src={require('.//e1.jpg').default} alt="Launch" className="guide-image" />
      <p>Launch your startup and begin marketing your product or service.</p>
    </div>
    <div className="guide-section">
      <h2>Feedback & Improvement</h2>
      <img src={require('.//e1.jpg').default} alt="Feedback & Improvement" className="guide-image" />
      <p>Collect feedback and make improvements based on user responses.</p>
    </div>
    <p>That's all for now. Good luck with your startup journey!</p>
  </div>
);

export default HowToStartup;
