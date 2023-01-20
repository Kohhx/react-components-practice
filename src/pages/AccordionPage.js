import React from "react";
import Accordion from "../components/Accordion";
import { FaAccessibleIcon } from "react-icons/fa";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "Can i use react?",
      content: "you can!",
    },
    {
      id: 2,
      label: "Can i use Node?",
      content: "Nope!",
    },
    {
      id: 3,
      label: "Can i use Angular?",
      content: "SO difficult!",
    },
  ];

  return (
    //  <div><ButtonPage /></div>
    <Accordion items={items} />
  );
};

export default AccordionPage;
