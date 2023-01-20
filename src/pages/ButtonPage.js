import React from "react";
import Button from "../components/Button";
import { FaAccessibleIcon } from "react-icons/fa";

const ButtonPage = () => {

  const handleClick = () => {
    console.log("Clicked")
  }
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-1"><FaAccessibleIcon/>Clicked Me!</Button>
      </div>
      <div>
        <Button secondary outline>Buy Me!</Button>
      </div>
      <div>
        <Button success outline rounded>Hey!</Button>
      </div>
      <div>
        <Button warning rounded>There</Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
