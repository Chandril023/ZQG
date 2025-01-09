import React from 'react';
import './skills.css'; // Assuming your CSS is in a separate file

const Skills = () => {
  const textCount = 50; // Number of times "ZQG" should repeat (adjust as needed)
  const textArray = Array.from({ length: textCount }, (_, index) => '◦ Zero ◦ Quantum ◦ Gravity '); // Create an array of 'ZQG'

  return (
    <div className="skills-container">
      <div className="moving-text-wrapper">
        {textArray.map((text, index) => (
          <div key={index} className="moving-text">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
