import React, { useState } from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { FaAccessibleIcon } from "react-icons/fa";

const App = () => {
  const [selection, setSelection] = useState()

  const options = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
  ];

  const handleSelect = (option) => {
    setSelection(option.value)
  }

  return (
    //  <div><ButtonPage /></div>
    // <AccordionPage items={items} />
    <Dropdown selection={selection} options={options} onSelect={handleSelect}/>
  );
};

export default App;
