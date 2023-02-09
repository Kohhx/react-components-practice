import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { FaAccessibleIcon } from "react-icons/fa";

const DropdownPage = () => {
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
    <Dropdown value={value} options={options} onChange={handleChange}/>
  );
};

export default DropdownPage;
