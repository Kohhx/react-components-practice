import React, { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Create function outside mapping function. Use this method
  const handleClick = (index) => {
    setExpandedIndex( prevIndex => {
      if (prevIndex === index) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(index);
      }
    })
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      // <div key={item.id} onClick={() => setExpandedIndex(index)}>
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex items-center p-3 bg-gray-50 border-b cursor-pointer justify-between"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
