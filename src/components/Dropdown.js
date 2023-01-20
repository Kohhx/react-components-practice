import React, { useState } from "react";

const Dropdown = ({ options, onSelect, selection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptions = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  let content = "Select...";
  if (selection) {
    content = selection;
  }

  const renderedOptions = options.map((option, index) => {
    return (
      <div onClick={() => handleOptions(option)} key={index}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
