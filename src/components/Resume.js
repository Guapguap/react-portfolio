import React from "react";

export default function Resume() {
  return (
    <div>
      <li>
        <a href="../../assets/Londono_Resume.pdf" download>
          Download Resume
        </a>
      </li>
      <p>I have experience working with:</p>
      <ul className="about-me-text">
        <li>JavaScript ES5 + ES6</li>
        <li>HTML5 + CSS3</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB + Mongoose</li>
        <li>MySQL + Sequelize</li>
        <li>Third Party APIs</li>
      </ul>
    </div>
  );
}
