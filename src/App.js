import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <div>
        <Button primary>Clicked Me!</Button>
      </div>
      <div>
        <Button>Buy Me!</Button>
      </div>
      <div>
        <Button>Hey!</Button>
      </div>
      <div>
        <Button>There</Button>
      </div>
      <div>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default App;
