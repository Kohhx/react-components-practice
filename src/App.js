import React, { useState } from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { FaAccessibleIcon } from "react-icons/fa";

const App = () => {
  const [value, setValue] = useState()

  const options = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
  ];

  const handleChange = (option) => {
    setValue(option.value)
  }

  return (
    //  <div><ButtonPage /></div>
    // <AccordionPage items={items} />
    <Dropdown value={value} options={options} onChange={handleChange}/>
  );
};

export default App;
