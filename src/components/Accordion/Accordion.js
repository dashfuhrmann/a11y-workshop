import React, { useState } from "react";
import "./accordion.css";

export default function Accordion() {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (index) => {
    console.log(index);
    if (expandedAccordion === index) {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion(index);
    }
  };

  return (
    <div>
      <span>Frequently Asked Questions</span>
      {[1, 2, 3].map((index) => (
        <div key={index} className="accordion">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            Question {index}
          </div>
          <div
            className="accordion-content"
            hidden={expandedAccordion !== index}
          >
            <p>Answer {index}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
